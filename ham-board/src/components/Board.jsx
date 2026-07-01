import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { postData } from "../data/posts"
import "./Board.css"

function Board({ searchKeyword = "", selectedCategory = "전체" }){
    const navigate = useNavigate()

    const [posts] = useState(postData)
    const [page, setPage] = useState(1)

    const postsPerPage = 7

    // 검색어 정리
    const keyword = searchKeyword.trim().toLowerCase()

    // 검색된 게시글 목록 / 카테고리 선택으로도 됨
    const filteredPosts = posts.filter((post) => {
        const isCategoryMatched = 
            selectedCategory === "전체" || post.category === selectedCategory

        if(!isCategoryMatched) return false

        if(keyword === "") return true

        const title = String(post.title || "").toLowerCase()
        const content = String(post.content || "").toLowerCase()
        const writer = String(post.writer || "").toLowerCase()
        const category = String(post.category || "").toLowerCase()
        const mood = String(post.mood || "").toLowerCase()

        return (
            title.includes(keyword) ||
            content.includes(keyword) ||
            writer.includes(keyword) ||
            category.includes(keyword) ||
            mood.includes(keyword)
        )
    })

    // 검색 결과 기준 페이지 계산
    const totalPage = Math.ceil(filteredPosts.length / postsPerPage)

    const startIndex = (page - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    const currentPosts = filteredPosts.slice(startIndex, endIndex)

    // 검색어가 바뀌면 1페이지로 이동
    useEffect(() => {
        setPage(1)
    }, [searchKeyword, selectedCategory])

    const handleWrite = () => {
        alert("오늘 남기기 페이지로 이동 예정")
    }

    const goFirstPage = () => {
        setPage(1)
    }

    const goLastPage = () => {
        if(totalPage === 0) return
        setPage(totalPage)
    }

    const goPrevPage = () => {
        if(page === 1) return
        setPage(page - 1)
    }

    const goNextPage = () => {
        if(page === totalPage || totalPage === 0) return
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
                            <th className="col_no">NO</th>
                            <th className="col_title">기억 조각</th>
                            <th className="col_writer">쓴이</th>
                            <th className="col_date">날짜</th>
                            <th className="col_mood">기분</th>
                            <th className="col_reaction">반응</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentPosts.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="empty_result">
                                    검색 결과가 없어요.
                                </td>
                            </tr>
                        ) : (
                            currentPosts.map((post) => (
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
                            ))
                        )}
                    </tbody>
                </table>

                {totalPage > 0 && (
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
                )}
            </div>
        </div>
    )
}
export default Board