import Board from "../components/Board"
import "./Home.css"

function Home(){
    return(
        <div className="HomePage">
            <div className="Container">
                <div className="Menu">메뉴</div>

                <div className="Content">
                    <div className="Header">
                        <div className="Top">Top</div>
                        <div className="Boxs">box 4개</div>
                    </div>

                    <div className="Main">
                        <div className="Board"><Board/></div>

                        <div className="Board_info">
                            <div className="Best_list">인기 게시물</div>
                            <div className="Category">카테고리</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home