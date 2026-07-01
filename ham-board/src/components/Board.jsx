import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postData } from "../data/posts"
import "./Board.css"

function Board(){
    const navigate = useNavigate()

    const [posts] = useState(postData)
    const [page, setPage] = useState(1)

    const postsPerPage = 7
    const totalPage = Math.ceil(posts.length / postsPerPage)

    const startIndex = (page - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    const currentPosts = posts.slice(startIndex, endIndex)

    const handleWrite = () => {
        alert("오늘 남기기 페이지로 이동 예정")
    }

    const goFirstPage = () => {
        setPage(1)
    }

    const goLastPage = () => {
        setPage(totalPage)
    }

    const goPrevPage = () => {
        if(page === 1) return
        setPage(page - 1)
    }

    const goNextPage = () => {
        if(page === totalPage) return
        setPage(page + 1)
    }

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`)
    }

    return(
        <div className="Board_wrap">

            <div className="Board_title">
                <h2>우리의 기록</h2>
                <button type="button" onClick={handleWrite}>
                    + 함께 기록하기
                </button>
            </div>

            <div className="Board_list_wrap">
                <table className="Board_list">
                    <thead>
                        <tr className="column_title">
                            <th className="col_no">번호</th>
                            <th className="col_title">기억 조각</th>
                            <th className="col_writer">쓴 사람</th>
                            <th className="col_date">날짜</th>
                            <th className="col_mood">기분</th>
                            <th className="col_reaction">반응</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentPosts.map((post) => (
                            <tr 
                                className="post_item" 
                                key={post.id}
                                onClick={() => handlePostClick(post.id)}
                            >
                                <td className="col_no">{post.id}</td>

                                <td className="col_title">
                                    <span className="post_badge">
                                        {post.category}
                                    </span>

                                    <span className="post_title">
                                        {post.title}
                                    </span>
                                </td>

                                <td className="col_writer">{post.writer}</td>
                                <td className="col_date">{post.date}</td>
                                <td className="col_mood">{post.mood}</td>
                                <td className="col_reaction">
                                    <span className={post.reaction === "읽음" ? "reaction_badge read" : "reaction_badge"}>
                                        {post.reaction}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="Pagination">
                    <button 
                        type="button" 
                        onClick={goFirstPage}
                        disabled={page === 1}
                    >
                        «
                    </button>

                    <button 
                        type="button" 
                        onClick={goPrevPage}
                        disabled={page === 1}
                    >
                        ‹
                    </button>

                    {Array.from({ length: totalPage }, (_, index) => (
                        <button
                            type="button"
                            key={index + 1}
                            className={page === index + 1 ? "active" : ""}
                            onClick={() => setPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button 
                        type="button" 
                        onClick={goNextPage}
                        disabled={page === totalPage}
                    >
                        ›
                    </button>

                    <button 
                        type="button" 
                        onClick={goLastPage}
                        disabled={page === totalPage}
                    >
                        »
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Board