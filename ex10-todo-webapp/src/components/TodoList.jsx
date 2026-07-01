import './TodoList.scss'
import TodoItem from './TodoItem'

function TodoList(props){ //함수의 파라미터로 속성들 전달 받을 수 있음
    return(
        <div className='TodoList'>
            {/* 투두 아이템들이 나열됨..! */}
            {/* TodoItem들은 배열로 데이터가 있어야 하지만.. UI 제작단계에서는 일단 더미데이터로 구현 */}
            {/* <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem> */}

            {/* props로 전달 받은 todos 배열의 개수만큼 TodoItem 컴포넌트를 표시! */}
            {/* props로 전달 받은 todos 삭제/변경하는 기능함수를 TodoItem에 전달 */}
            {
                props.todos.map((todo,idx)=>{
                    return <TodoItem key={idx} todo={todo} deleteTodo={props.deleteTodo} toggleDone={props.toggleDone} index={idx} ></TodoItem>
                })
            }
        </div>
    )
}
export default TodoList