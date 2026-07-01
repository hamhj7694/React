import { useRef, useState } from "react"
import "./Menu.css"

const menuItems = [
    {
        id: 1,
        name: "우리 홈",
        path: "/",
        icon: "🏠",
    },
    {
        id: 2,
        name: "포스트",
        path: "/",
        icon: "📓",
    },
    {
        id: 3,
        name: "갤러리",
        path: "/gallery",
        icon: "🖼️",
    },
    {
        id: 4,
        name: "캘린더",
        path: "/calendar",
        icon: "📅",
    },
    {
        id: 5,
        name: "채팅",
        path: "/chat",
        icon: "💬",
    },
    {
        id: 6,
        name: "설정",
        path: "/setting",
        icon: "⚙️",
    },
]

const todayMessages = [
    "언제나 사랑하는 마음으로",
    "오늘도 우리답게 천천히",
    "서로의 하루에 다정함을 남기기",
    "작은 순간도 같이 기억하기",
    "오늘도 네 편이 되어주기",
    "말하지 않아도 마음은 가까이",
    "조금 서툴러도 함께라서 괜찮아",
    "오늘의 우리도 소중하게",
    "괜히 보고 싶은 날",
    "같이 웃을 수 있는 하루",
]

const getTodayKey = () => {
    const today = new Date()

    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const date = String(today.getDate()).padStart(2, "0")

    return `${year}-${month}-${date}`
}

const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * todayMessages.length)

    return todayMessages[randomIndex]
}

const getTodayMessage = () => {
    const todayKey = getTodayKey()

    const savedData = JSON.parse(localStorage.getItem("todayMessageData"))

    if(savedData && savedData.date === todayKey){
        return savedData.message
    }

    const newMessage = getRandomMessage()

    localStorage.setItem(
        "todayMessageData",
        JSON.stringify({
            date: todayKey,
            message: newMessage,
        })
    )

    return newMessage
}

function Menu(){
    const navRef = useRef(null)

    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const [todayMessage] = useState(getTodayMessage)

    const handleMouseDown = (e) => {
        if(!navRef.current) return

        setIsDragging(true)
        setStartX(e.pageX - navRef.current.offsetLeft)
        setScrollLeft(navRef.current.scrollLeft)
    }

    const handleMouseMove = (e) => {
        if(!isDragging || !navRef.current) return

        e.preventDefault()

        const x = e.pageX - navRef.current.offsetLeft
        const walk = x - startX

        navRef.current.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    return(
        <aside className="Menu">
            <div className="Menu_logo">
                <div className="Menu_logo_icon">♡</div>

                <div className="Menu_logo_text">
                    <h1>우리 공간</h1>
                </div>
            </div>

            <nav 
                className={`Menu_nav ${isDragging ? "dragging" : ""}`}
                ref={navRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {menuItems.map((item) => (
                    <button 
                        type="button"
                        className="Menu_item"
                        key={item.id}
                    >
                        <span className="Menu_icon">
                            {item.icon}
                        </span>

                        <span className="Menu_text_wrap">
                            <span className="Menu_text">
                                {item.name}
                            </span>

                            {item.desc && (
                                <span className="Menu_desc">
                                    {item.desc}
                                </span>
                            )}
                        </span>
                    </button>
                ))}
            </nav>

            <div className="Menu_today">
                <span className="Menu_today_label">오늘의 멘트</span>
                <p>“{todayMessage}”</p>
            </div>
        </aside>
    )
}

export default Menu