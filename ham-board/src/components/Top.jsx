import "./Top.css"

function Top({ searchKeyword, setSearchKeyword }){
    return(
        <div className="Top">
            {/* <div className="Top_left">
                <span className="Top_label">나와 너의</span>
                <h2>우리 둘만의 공간</h2>
            </div> */}

            <div className="Top_right">
                <div className="Top_chip">
                    <span className="Top_chip_label">D-Day</span>
                    <strong>D+128</strong>
                </div>

                <div className="Top_chip mood">
                    <span className="Top_chip_label">오늘 기분</span>
                    <strong>몽글</strong>
                </div>
            </div>

            <div className="Top_search">
                <input 
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="기억의 조각 검색하기"
                />

                <span className="Top_search_icon">🔍</span>
            </div>

        </div>
    )
}
export default Top