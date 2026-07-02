import { useDispatch, useSelector } from "react-redux"

function First(){

    // store에 있는 number 값을 불러오는 HOOK 기술
    const number= useSelector(state=>state.numberReducer.number)

    // store에 있는 numberReducer에게 원하는 작업을 action객체를 만들어 보내는 함수
    const dispatch = useDispatch()

    return(
        <div style={{padding:16, backgroundColor:'aqua'}}>
            <h3>퍼스트 컴포넌트</h3>

            {/* 전역 store에 있는 number 값 사용 */}
            <p> 숫자 : {number} </p>
            <button onClick={()=>dispatch({type:'increase'})}> 더하기 + </button>
            <button onClick={()=>dispatch({type:'decrease'})}> 빼기 - </button>
        </div>
    )
}
export default First