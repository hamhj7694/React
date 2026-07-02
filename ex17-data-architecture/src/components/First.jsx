import Second from "./Second"

function First(props){
    return(
        <div>
            <h3>FIRST component</h3>

            <Second msg={props.msg} setMsg={props.setMsg} ></Second>
        </div>
    )
}
export default First