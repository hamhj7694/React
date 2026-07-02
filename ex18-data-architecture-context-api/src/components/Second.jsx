import { useContext } from "react"
import { MyContext } from "../Home"

function Second(){

    //Context API로 저장된 전역 데이터를 가져오는 HOOK 기술 
    const value= useContext(MyContext)

    return (
        <div style={{padding:16, backgroundColor:'lightgreen'}}>
            <h3>SECOND COMPONENT</h3>   
            <p>Home 컴포넌트의 메세지 데이터 : {value.msg}</p>         
        </div>
    )
}
export default Second