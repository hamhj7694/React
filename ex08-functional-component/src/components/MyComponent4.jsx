import { useState } from "react"

function MyComponent4(){

    // 값이 변경되면 화면이 자동으로 갱신되는 아주 특별한 state 변수
    // Component 클래스를 상속하지 않아서 this.state라는 멤버 변수가 존재하지 않음

    // 원래 함수형 컴포넌트는 간단하게 UI만 표시하는 목적이었음.
    // 즉, Component의 능력은 아무거도 가지고 있지 않았음.

    // 리액트 버전업 되며.. 함수형 컴포넌트에서도 클래스형 컴포넌트 기능들을 사용할게 있게 됨!
    // [ HOOK ] 이렇게 함수형에서 클래스형의 기능들을 사용할 수 있는 기법
    // Hook 기능 함수의 명칭은 대부분 useXXX() 라고 명명하였음!

    // Hook 중 가장 중요한 uesState() 사용
    // message 라는 이름의 state 변수와 setState 용 함수를 만들어보기!
    let [message, setMessage] = useState('이건 초기에 설정된 state 메시지 입니다!') // [] 배열 구조분해할당, ()안에 초기 값 지정

    // 버튼 클릭 시 반응할 함수 (화살표)
    const aaa= ()=>{
        setMessage('Hook 기술로 뿅!')
    }

    // 또 다른 state 변수 만들어보기
    let [title, setTitle]= useState('제목')
    const bbb= ()=> setTitle('제목이 뿅!')

    return(
        <div style={{border:'2px solid black', padding:8, margin:4}}>
            <h3>함수형 컴포넌트에서 state 사용해보기!</h3>
            
            {/* state 변수 만들어 출력해보기 */}
            <p> {message} </p>
            {/* 버튼 클릭해서 message 변수 변경(state변수이니 자동 화면 갱신됨) */}
            {/* 클릭하면 aaa라는 지역 함수 호출 [return 키워드 전에 함수가 있어야 함] */}
            <button onClick={aaa}>메시지를 바꿉니다!</button>

            <hr />
            <p>{title}</p>
            <button onClick={bbb}>제목 변경</button>
        </div>
    )
}
export default MyComponent4