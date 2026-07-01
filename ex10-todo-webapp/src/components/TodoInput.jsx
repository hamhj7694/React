import { MdAdd } from "react-icons/md";

import { useState } from 'react'

import './TodoInput.scss'

function TodoInput(props){

    // input 요소에 써있는 글씨 저장하는 state 변수
    const [content, setContent]= useState('')

    // const clickAddBtn=()=>{
    //     // input 요소에 써있는 글씨(content state 변수)를 가져와서.. props 전달받은 insertTodo()함수를 실행시켜 항목 추가
    //     props.insertTodo(content)
    //     // 다음 입력을 편하도록.. input 요소의 value 값을 빈글씨로 바꾸자!
    //     setContent('')
    // }

    // 버튼을 클릭하거나. 엔터키 눌렀을 때 form요소의 onSubmit 이벤트에 의해 실행될 함수
    const submit= ()=>{
        // form 요소는 기본적으로 화면을 바꾸는 동작을 수행함... 이를 방지해야 함.
        event.preventDefault()
        if(content=='') return //쓴 글씨가 없으면 동작종료

        // insertTodo에 content 보내고 ''빈 칸으로 만들기
        props.insertTodo(content)
        setContent('')
    }

    return(
        // 사용자가 버튼이 아닌 '엔터키'를 눌러도 할일데이터가 추가되게 하고 싶다면 --> form요소 사용
        // form요소의 안에 있는 마지막 input 요소의 입력이 되고 '엔터키'를 누르면 자동으로 써밋됨
        <form className="TodoInput" onSubmit={submit}>
            <input type="text" placeholder="할 일을 입력하세요" value={content} onChange={(event)=>{ setContent(event.target.value) }} />
            {/* 버튼 속 + 기호는 아이콘 이용(react-icons 라이브러리) */}
            <button type="submit"><MdAdd /></button>
        </form>
    )
}
export default TodoInput