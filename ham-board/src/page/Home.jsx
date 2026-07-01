import { useState, cloneElement, isValidElement } from "react"
import "./Home.css"

import Menu from "../components/Menu"
import Top from "../components/Top"
import SummaryCards from "../components/SummaryCards"
import Category from "../components/Category"
import RecentFeed from "../components/RecentFeed"
function Home({ children }){
    const [searchKeyword, setSearchKeyword] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("전체")

    return(
        <div className="HomePage">
            <div className="Container">
                <Menu />

                <div className="Content">
                    <div className="Content_mid">
                        <div className="Header">
                            <Top 
                                searchKeyword={searchKeyword}
                                setSearchKeyword={setSearchKeyword}
                            />

                            <div className="Boxs"><SummaryCards/></div>
                        </div>

                        <div className="Main">
                            <div className="Board">
                                {isValidElement(children) 
                                    ? cloneElement(children, { 
                                        searchKeyword,
                                        selectedCategory,
                                    }) 
                                    : children
                                }
                            </div>
                        </div>
                    </div>
                    
                    <div className="Board_info">
                        <div className="Category">
                            <Category
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />
                        </div>
                        <div className="Best_list">
                            <RecentFeed />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home