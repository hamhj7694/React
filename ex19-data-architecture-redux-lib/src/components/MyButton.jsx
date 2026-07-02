import { useDispatch } from "react-redux"

function MyButton(){

    const dispatch= useDispatch()

    return <button onClick={()=>dispatch({type:'reset', payload:0})} style={{width:"100%", padding:10, boxSizing:'border-box'}}> 0으로 초기화 </button>
}
export default MyButton