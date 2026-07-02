// number 상태값을 관리하는 리듀서 만드는 파일

// 이 리듀서가 처음 배치될 때, 이전 state 작업이 없기에 초기값을 파라미터 디폴트값으로 지정
function numberReducer(state={number:0}, action){ // 이 리듀서의 파라미터로 이전 state 값과 action 객체를 받음
    switch(action.type){
        case 'increase':
            // 기존 state의 number 변수의 값을 1 증가한 새로운 state 리턴(setState()작업)
            return {...state, number: state.number+1} // 새로운 state 객체 {}
        case 'decrease':
            return {...state, number: state.number-1} // 새로운 state 객체 {}
        case 'reset':
            return {number: action.payload} // 액션 객체에 전달된 payload 값으로 설정

        default:
            return state // 원래 state를 그대로 리턴하면 화면 갱신 X
    }
}
export default numberReducer