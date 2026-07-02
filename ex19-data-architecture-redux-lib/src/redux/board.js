const initState={
    boards:[
        {no:1, name: 'sam', age:20},
        {no:2, name: 'robin', age:30},
        {no:3, name: 'moana', age:25},
    ]
}

function boardReducer(state = initState, action){
    switch(action.type){
        case 'changeName' :
            return {...state, boards:[...state.boards, action.payload]}

        default:
            return state
    }
}
export default boardReducer