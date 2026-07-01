import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import MovieDetail from '../page/MovieDetail'

// 페이지 이동을 위한 경로와 컴포넌트 지정하는 라우터 컴포넌트 생성

function PageRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/movie/:id' element={<MovieDetail/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default PageRouter