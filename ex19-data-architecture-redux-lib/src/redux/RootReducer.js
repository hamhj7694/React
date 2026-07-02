// 전역공간 store는 리듀서를 1개만 설치할 수 있음.
// state별로 리듀서를 나누어 만들면 관리가 용함.
// 그래서 이 리듀서들을 하나로 묶어주는 CombineReduers 기능을 사용

import { combineReducers } from 'redux'
import numberReducer from './number'
import boardReducer from './board'

const rootReducer= combineReducers({numberReducer, boardReducer,})
export default rootReducer