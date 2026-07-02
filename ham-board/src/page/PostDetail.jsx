import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./PostDetail.css"
import PostReaction from "../components/PostReaction"

const CURRENT_USER = "나"
const PARTNER = "너"

const reactionOptions = ["💗", "🥰", "🥺", "😂", "✨", "🫶"]

const categoryList = ["데이트", "일상", "마음", "여행", "추억", "약속"]

const moodList = [
    "행복",
    "설렘",
    "몽글",
    "고마움",
    "아쉬움",
    "그리움",
    "평온",
    "미안함",
    "기대",
]

function PostDetail({ posts = [], setPosts }){
    const { id } = useParams()
    const navigate = useNavigate()

    const post = posts.find((item) => item.id === Number(id))

    const [reactionLogs, setReactionLogs] = useState(post?.reactions || [])
    const [wordText, setWordText] = useState("")

    const [isEditing, setIsEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(post?.title || "")
    const [editCategory, setEditCategory] = useState(post?.category || "데이트")
    const [editMood, setEditMood] = useState(post?.mood || "행복")
    const [editContent, setEditContent] = useState(post?.content || "")

    if(!post){
        return(
            <div className="PostDetail_wrap">
                <div className="PostDetail_card">
                    <p className="PostDetail_empty">기록을 찾을 수 없어요.</p>

                    <button 
                        type="button" 
                        className="Back_button"
                        onClick={() => navigate("/")}
                    >
                        목록으로 돌아가기
                    </button>
                </div>
            </div>
        )
    }

    const getNowText = () => {
        const now = new Date()

        const dateText = now.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })

        const timeText = now.toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
        })

        return {
            date: dateText,
            time: timeText,
        }
    }

    const myReactionLog = reactionLogs.find((log) => log.nickname === CURRENT_USER)
    const partnerReactionLog = reactionLogs.find((log) => log.nickname === PARTNER)

    const getReactionDisplay = (reactionLog) => {
        if(!reactionLog) return "읽음"

        const word = reactionLog.word?.trim() || ""

        if(word.length >= 3) return "💬"
        if(word.length >= 1) return word

        return reactionLog.reaction || "읽음"
    }

    const handleReactionClick = (selectedReaction) => {
        const newLog = {
            nickname: CURRENT_USER,
            reaction: selectedReaction,
            word: myReactionLog?.word || "",
            reactedAt: getNowText(),
        }

        setReactionLogs((prevLogs) => {
            const filteredLogs = prevLogs.filter(
                (log) => log.nickname !== CURRENT_USER
            )

            return [newLog, ...filteredLogs]
        })
    }

    const handleWordSubmit = (e) => {
        e.preventDefault()

        const trimmedWord = wordText.trim()

        if(trimmedWord === "") return

        const newLog = {
            nickname: CURRENT_USER,
            reaction: myReactionLog?.reaction || "💗",
            word: trimmedWord,
            reactedAt: getNowText(),
        }

        setReactionLogs((prevLogs) => {
            const filteredLogs = prevLogs.filter(
                (log) => log.nickname !== CURRENT_USER
            )

            return [newLog, ...filteredLogs]
        })

        setWordText("")
    }

    const handleEditStart = () => {
        setEditTitle(post.title)
        setEditCategory(post.category)
        setEditMood(post.mood)
        setEditContent(post.content)
        setIsEditing(true)
    }

    const handleEditCancel = () => {
        setEditTitle(post.title)
        setEditCategory(post.category)
        setEditMood(post.mood)
        setEditContent(post.content)
        setIsEditing(false)
    }

    const handleEditSave = () => {
        const trimmedTitle = editTitle.trim()
        const trimmedContent = editContent.trim()

        if(trimmedTitle === ""){
            alert("제목을 입력해줘!")
            return
        }

        if(trimmedContent === ""){
            alert("내용을 입력해줘!")
            return
        }

        if(!setPosts){
            alert("수정 기능이 아직 연결되지 않았어!")
            return
        }

        setPosts((prevPosts) => (
            prevPosts.map((item) => (
                item.id === post.id
                    ? {
                        ...item,
                        title: trimmedTitle,
                        category: editCategory,
                        mood: editMood,
                        content: trimmedContent,
                    }
                    : item
            ))
        ))

        setIsEditing(false)
    }

    const handleDelete = () => {
        const isConfirmed = window.confirm("이 기록을 삭제할까?")

        if(!isConfirmed) return

        if(!setPosts){
            alert("삭제 기능이 아직 연결되지 않았어!")
            return
        }

        setPosts((prevPosts) => (
            prevPosts.filter((item) => item.id !== post.id)
        ))

        navigate("/")
    }

    return(
        <div className="PostDetail_wrap">
            <div className="PostDetail_card">

                <div className="PostDetail_header">
                    {isEditing ? (
                        <>
                            <div className="PostDetail_edit_group">
                                <label>카테고리</label>

                                <div className="PostDetail_chip_group">
                                    {categoryList.map((category) => (
                                        <button
                                            type="button"
                                            key={category}
                                            className={
                                                editCategory === category
                                                    ? "PostDetail_chip active"
                                                    : "PostDetail_chip"
                                            }
                                            onClick={() => setEditCategory(category)}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="PostDetail_edit_group">
                                <label>제목</label>

                                <input
                                    type="text"
                                    className="PostDetail_edit_title"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <span className="PostDetail_category">
                                {post.category}
                            </span>

                            <h2>{post.title}</h2>
                        </>
                    )}
                </div>

                <div className="PostDetail_meta">
                    <span>쓴 사람: {post.writer}</span>

                    <span>
                        날짜: {post.date}
                        {post.time ? ` ${post.time}` : ""}
                    </span>

                    {isEditing ? (
                        <span className="PostDetail_mood_edit">
                            기분:{" "}
                            <select 
                                value={editMood}
                                onChange={(e) => setEditMood(e.target.value)}
                            >
                                {moodList.map((mood) => (
                                    <option key={mood} value={mood}>
                                        {mood}
                                    </option>
                                ))}
                            </select>
                        </span>
                    ) : (
                        <span>기분: {post.mood}</span>
                    )}

                    <span>
                        상대 반응:{" "}
                        <strong>
                            {getReactionDisplay(partnerReactionLog)}
                        </strong>
                    </span>
                </div>

                {isEditing ? (
                    <div className="PostDetail_edit_content">
                        <label>내용</label>

                        <textarea
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                        />

                        <div className="PostDetail_edit_count">
                            {editContent.length}자
                        </div>
                    </div>
                ) : (
                    <div className="PostDetail_content">
                        {post.content.split("\n").map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                )}

                {post.images && post.images.length > 0 && (
                    <div className="PostDetail_images">
                        {post.images.map((image) => (
                            <div className="PostDetail_image_item" key={image.id}>
                                <img src={image.url} alt={image.name} />
                            </div>
                        ))}
                    </div>
                )}

                {!isEditing && (
                    <div className="PostReaction">
                        <PostReaction
                            reactionOptions={reactionOptions}
                            myReactionLog={myReactionLog}
                            partnerReactionLog={partnerReactionLog}
                            handleReactionClick={handleReactionClick}
                            wordText={wordText}
                            setWordText={setWordText}
                            handleWordSubmit={handleWordSubmit}
                        />
                    </div>
                )}

                <div className="PostDetail_actions">
                    <button 
                        type="button" 
                        className="Back_button"
                        onClick={() => navigate("/")}
                    >
                        목록으로 돌아가기
                    </button>

                    {isEditing ? (
                        <>
                            <button
                                type="button"
                                className="PostDetail_save_button"
                                onClick={handleEditSave}
                            >
                                저장
                            </button>

                            <button
                                type="button"
                                className="PostDetail_cancel_button"
                                onClick={handleEditCancel}
                            >
                                취소
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                className="PostDetail_edit_button"
                                onClick={handleEditStart}
                            >
                                수정
                            </button>

                            <button
                                type="button"
                                className="PostDetail_delete_button"
                                onClick={handleDelete}
                            >
                                삭제
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PostDetail