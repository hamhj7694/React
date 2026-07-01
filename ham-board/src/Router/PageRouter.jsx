import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import Board from "../components/Board"
import PostDetail from '../page/PostDetail'

// 페이지 이동을 위한 경로와 컴포넌트 지정하는 라우터 컴포넌트 생성

function PageRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home><Board /></Home>}></Route>
                <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
        </BrowserRouter>
    )
}
export default PageRouter