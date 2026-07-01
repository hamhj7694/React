import { useEffect, useRef, useState } from "react"
import "./RecentFeed.css"

const initialChatData = [
    {
        id: 1,
        user: "나",
        text: "모해 자기양?",
        time: "21:10",
    },
    {
        id: 2,
        user: "너",
        text: "아직 일하는 중..ㅠㅠ",
        time: "21:12",
    },
    {
        id: 3,
        user: "나",
        text: "끝나면 연락해!",
        time: "21:13",
    },
    {
        id: 4,
        user: "너",
        text: "웅 조금만 기다려줘",
        time: "21:15",
    },
    {
        id: 5,
        user: "나",
        text: "천천히 해도 돼!",
        time: "21:16",
    },
]

function RecentFeed(){
    const [chatList, setChatList] = useState(initialChatData)
    const [chatText, setChatText] = useState("")

    const chatEndRef = useRef(null)

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth",
        })
    }, [chatList])

    const getNowTime = () => {
        const now = new Date()

        return now.toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const trimmedText = chatText.trim()

        if(trimmedText === "") return

        const newChat = {
            id: Date.now(),
            user: "나",
            text: trimmedText,
            time: getNowTime(),
        }

        setChatList((prevChatList) => [
            ...prevChatList,
            newChat,
        ])

        setChatText("")
    }

    return(
        <div className="RecentChat">
            <div className="RecentChat_header">
                <div>
                    <span className="RecentChat_label">Live Chat</span>
                    <h3>우리 채팅</h3>
                </div>

                <span className="RecentChat_icon">💬</span>
            </div>

            <div className="RecentChat_body">
                {chatList.map((chat) => (
                    <div 
                        className={
                            chat.user === "나" 
                                ? "RecentChat_message mine" 
                                : "RecentChat_message partner"
                        }
                        key={chat.id}
                    >
                        <div className="RecentChat_bubble">
                            <div className="RecentChat_meta">
                                <span>{chat.user}</span>
                                <em>{chat.time}</em>
                            </div>

                            <p>{chat.text}</p>
                        </div>
                    </div>
                ))}

                <div ref={chatEndRef}></div>
            </div>

            <form className="RecentChat_form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={chatText}
                    onChange={(e) => setChatText(e.target.value)}
                    placeholder="메시지 입력"
                />

                <button type="submit">
                    보내기
                </button>
            </form>
        </div>
    )
}

export default RecentFeed