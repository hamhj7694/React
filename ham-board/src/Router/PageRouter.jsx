import { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../page/Home'
import Board from "../components/Board"
import PostDetail from '../page/PostDetail'
import PostWrite from '../page/PostWrite'

function PageRouter(){
    const [posts, setPosts] = useState([])

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/' 
                    element={
                        <Home posts={posts} setPosts={setPosts}><Board /></Home>
                    }
                />

                <Route 
                    path="/post/:id" 
                    element={
                        <Home detailMode={true} posts={posts} setPosts={setPosts}><PostDetail /></Home>
                    } 
                />

                <Route 
                    path="/write" 
                    element={
                        <Home detailMode={true} posts={posts} setPosts={setPosts}><PostWrite /></Home>
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter