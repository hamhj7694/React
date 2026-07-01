import "./PostReaction.css"

function PostReaction({
    reactionOptions,
    myReactionLog,
    partnerReactionLog,
    handleReactionClick,
}){
    return(
        <div className="PostDetail_reaction_box">
            <p>반응하기</p>
            <div className="Reaction_buttons">
                
                {reactionOptions.map((reaction) => (
                    <button 
                        type="button"
                        key={reaction}
                        className={myReactionLog?.reaction === reaction ? "active" : ""}
                        onClick={() => handleReactionClick(reaction)}
                    >
                        {reaction}
                    </button>
                ))}
            </div>

            <div className="Reaction_log_box">
                <p className="Reaction_log_title">우리 반응</p>

                <div className="Reaction_log_list">
                    <div className="Reaction_log_item">
                        <span className="Reaction_log_name">내 반응</span>

                        <span className="Reaction_log_reaction">
                            {myReactionLog ? myReactionLog.reaction : "아직 없음"}
                        </span>

                        <span className="Reaction_log_time">
                            {myReactionLog ? myReactionLog.reactedAt : "-"}
                        </span>
                    </div>

                    <div className="Reaction_log_item">
                        <span className="Reaction_log_name">상대 반응</span>

                        <span className="Reaction_log_reaction">
                            {partnerReactionLog ? partnerReactionLog.reaction : "읽음"}
                        </span>

                        <span className="Reaction_log_time">
                            {partnerReactionLog ? partnerReactionLog.reactedAt : "-"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostReaction