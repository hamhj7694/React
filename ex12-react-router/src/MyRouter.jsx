// 라우터 import
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// 페이지 컴포넌트 import
import Home from './page/Home'
import Second from './page/Second'
import Third from './page/Third'
import Intro from './page/Intro'
import Login from './page/Login'
import Signup from './page/Signup'

function MyRouter(){
    return(
        // 경로에 따라 페이지를 다르게 보여주는 라우터 생성
        <BrowserRouter>
            <Routes>
                {/* 페이지 컴포넌트들을 등록.. 경로와 함께 */}
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/second' element={<Second/>}></Route>

                <Route path='/third/:no' element={<Third/>}></Route>

                <Route path='/intro' element={<Intro/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}
export default MyRouter