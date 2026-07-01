import { useState } from 'react'
import './TodoContainer.scss'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function TodoContainer(){

    //TodoInput과 TodoList에서 사용할 [할일목록 데이터 todos] state 변수 만들기
    const [todos, setTodos] = useState([ // 여러(3개) 객체를 가진 배열 
        // {no:1, content:'리액트 기초문법 학습', isDone:false,},
        // {no:2, content:'리액트 스타일링 학습', isDone:true,},
        // {no:3, content:'리액트 컴포넌트 기초 학습', isDone:false,},
    ])

    // todos 배열에 새로운 데이터를 추가하는 기능함수 만들기(사용하는 위치 관계없이, todos 변수가 선언된 곳에서 함수가 정의 되어야 함!)
    const insertTodo= (content)=>{ //파라미터로 새로 추가된 '할일 데이터'를 받아서 추가

        // 새로 추가할 객체를 만들기
        const newTodo={
            no: todos.length + 1, // 요소개수 + 1을 통해 번호를 부여
            content: content,
            isDone: false
        }
        // todos라는 state배열변수에 새로운 데이터를 추가!
        // 배열에 새로운 객체를 추가하는 기능함수 호출
        const newTodos= todos.concat(newTodo) // 콘켓(콘케트네이트) 사용... 업펜드 X
        // 새로운 todo 데이터들을 state 변수에 적용하기
        setTodos(newTodos)
    }

    // todos의 항목 중 전달받은 번호의 todo 요소를 삭제하는 기능함수
    const deleteTodo= (no) => {
        // 기존 state 배열에서 요소만 삭제하면 setState()할 때 배열객체의 변화가 없다고 생각..
        // 그래서 화면 갱신이 자동으로 안 됨..
        
        // [권장사항] .filter 기능함수 사용 : 배열의 요소를 삭제할 때 권장 기법
        // "삭제할 녀석(해당 no)만 빼고 나머지만 살아남아"
        const newTodos= todos.filter((todo, idx)=>{return todo.no!=no})
        setTodos(newTodos)
    }

    // todos의 항목 중 index번째의 todo 객체의 isDone 값을 변경하는 토글(toggle) 만들기
    const toggleDone= (index) => {
        // 원래 todos 배열의 요소값을 바꾸어도 화면은 새로 갱신되지 않음.
        // 원래 배열을 복제 완전 새로운 배열 만들기
        const newTodos=[ ...todos ] // ... 전개연산자(스프레드연산자) 사용 -- todos의 요소들을 전개시켜줌
        newTodos[index].isDone= !newTodos[index].isDone

        setTodos(newTodos)
    }

    // .concat()    .filter()     ...     =>    3가지 방법 알아두기!(위 함수)



    return(
        <div className="TodoContainer">
            {/* 1. 타이틀 영역 */}
            <div className="app-title">TOTO LIST</div>

            {/* 2. 사용자가 할일 목록을 입력하는 컴포넌트 */}
            {/* + 버튼 클릭했을 때 insertTodo()함수를 실행할 수 있도록 함수를 전달 */}
            <TodoInput insertTodo={insertTodo}></TodoInput>

            {/* 3. 할일 목록이 나열되는 컴포넌트 */}
            {/* 표시할 할일목록 데이터들 todos 배열을 속성으로 전달하기 */}
            {/* todos를 삭제/변경하는 기능함수도 속성으로 전달 */}
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone}></TodoList>
        </div>
    )
}
export default TodoContainer