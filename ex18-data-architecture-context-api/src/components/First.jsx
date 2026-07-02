import { MyContext } from "../Home"
import Second from "./Second"
import { useContext } from "react"

function First(){

    const value = useContext(MyContext)
    return(
        <div style={{padding:16, backgroundColor:'aqua'}}>
            <h3>First component</h3>
            <Second></Second>

            <button onClick={()=>value.setMsg('변경되었습니다!')}>변경</button>
        </div>
    )
}
export default First