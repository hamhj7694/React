// 체크박스 아이콘
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
// 쓰레기통 아이콘
import { MdDeleteForever } from "react-icons/md";

import './TodoItem.scss'

function TodoItem(props){ // 속성을 통해 todo 정보를 전달받음

    // Todo 항목데이터의 isDone 값이 true이면.. "TodoItem isDone" 으로 클래스명 지정
    const todoItemStyleName= props.todo.isDone? "TodoItem isDone" : "TodoItem"

    return (
        <div className={todoItemStyleName}>
            {/* 1. */}
            <div className="checkbox" onClick={()=>{props.toggleDone(props.index)}}>
                {/* 체크박스 색상이나 사이즈 지정위해 아이콘으로 구현 */}
                {/* <MdCheckBoxOutlineBlank /> */}

                {/* isDone 여부에 따라서 체크박스의 아이콘 모양을 다르게! 삼항연산자 조건문 사용! */}
                { props.todo.isDone ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
            </div>

            {/* 2. */}
            <div className="content">
                {props.todo.content}
            </div>

            {/* 3. */}
            <div className="delete" onClick={() => props.deleteTodo(props.todo.no)}>
                <MdDeleteForever />
            </div>

        </div>
    )
}
export default TodoItem