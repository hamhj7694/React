import { useNavigate } from "react-router-dom"

function Login(){

    const navigate= useNavigate()

    return(
        <div>
            <h4>Login 페이지</h4>

            <button onClick={()=>{navigate('/intro', {replace:true})}}>(복잡 코드) 이전 페이지로 돌아가기</button>
            <button onClick={()=>{navigate(-1)}}>(간결 코드) 이전 페이지로 돌아가기</button>
        </div>
    )
}
export default Login