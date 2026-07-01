import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { postData } from "../data/posts"
import "./PostDetail.css"
import PostReaction from "../components/PostReaction"

const CURRENT_USER = "나"
const PARTNER = "너"

const reactionOptions = ["💗", "🥰", "🥺", "😂", "✨", "🫶"]

function PostDetail(){
    const { id } = useParams()
    const navigate = useNavigate()

    const post = postData.find((item) => item.id === Number(id))

    const [reactionLogs, setReactionLogs] = useState(post?.reactions || [])

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

        return now.toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    const myReactionLog = reactionLogs.find((log) => log.nickname === CURRENT_USER)
    const partnerReactionLog = reactionLogs.find((log) => log.nickname === PARTNER)

    const handleReactionClick = (selectedReaction) => {
        const newLog = {
            nickname: CURRENT_USER,
            reaction: selectedReaction,
            reactedAt: getNowText(),
        }

        setReactionLogs((prevLogs) => {
            const filteredLogs = prevLogs.filter(
                (log) => log.nickname !== CURRENT_USER
            )

            return [newLog, ...filteredLogs]
        })
    }

    return(
        <div className="PostDetail_wrap">
            <div className="PostDetail_card">

                <div className="PostDetail_header">
                    <span className="PostDetail_category">
                        {post.category}
                    </span>

                    <h2>{post.title}</h2>
                </div>

                <div className="PostDetail_meta">
                    <span>쓴 사람: {post.writer}</span>
                    <span>날짜: {post.date}</span>
                    <span>기분: {post.mood}</span>
                    <span>
                        상대 반응:{" "}
                        <strong>
                            {partnerReactionLog ? partnerReactionLog.reaction : "읽음"}
                        </strong>
                    </span>
                </div>

                <div className="PostDetail_content">
                    {post.content}
                </div>

                <div className="PostReaction">
                    <PostReaction
                        reactionOptions={reactionOptions}
                        myReactionLog={myReactionLog}
                        partnerReactionLog={partnerReactionLog}
                        handleReactionClick={handleReactionClick}
                    />
                </div>

                <div className="PostDetail_actions">
                    <button 
                        type="button" 
                        className="Back_button"
                        onClick={() => navigate("/")}
                    >
                        목록으로 돌아가기
                    </button>
                </div>

            </div>

            <div className="Chat">

            </div>
        </div>
    )
}

export default PostDetail