function Second(props){
    return(
        <div>
            <h3>Second component</h3>
            <p>Home 컴포넌트의 msg 변수값: { props.msg }</p>
            <button onClick={()=>props.setMsg('nice to meet you! 바꼈어용~')}>메시지 바꾸기 버튼</button>
        </div>
    )
}
export default Second