import { useNavigate } from "react-router-dom"

function Intro(){

    // Link 요소 없이 페이지를 이동시키는 기능 함수를 만들기 - HOOK 기술
    const navigate= useNavigate()
    
    // 버튼 클릭시 발동 함수
    const goLogin= ()=>{
        navigate('/login')
    }

    const goSignup= ()=>{
        // 페이지 이동할 때 여러개의 값을 전달하고 싶으면? 서브경로로는 어려움..!
        // 그래서 state 라는 값을 줌!
        navigate('/signup', {state:{name:'sam', age:20}})
    }

    return(
        <div>
            <h2>intro</h2>
            <p>버튼 클릭으로 페이지 이동하기</p>
            
            <button onClick={goLogin}>로그인 페이지로</button>
            <button onClick={goSignup}>회원가입 페이지로</button>
        </div>
    )
}
export default Intro