import { useLocation } from "react-router-dom"

function Signup(){

    // 페이지 전환될 때 state로 전달된 객체를 받기 - HOOK 사용
    const location = useLocation()
    
    return(
        <div>
            <h4>Signup 페이지</h4>
            {/* 로케이션에 전달된 state 값 사용하기 */}
            <p>이름: {location.state.name} </p>
            <p>나이: {location.state.age} </p>
        </div>
    )
}
export default Signup