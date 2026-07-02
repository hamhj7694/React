import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './Home.jsx'

// 리덕스 라이브러리 : 전역 state 상태 관리를 용이하게 해줌
// 리덕스 라이브러리 2개 설치(redux, react-redux) npm install redux react-redux

// 리덕스 주요 용어
// 1. store      : 전역 저장소(상태값과 리듀서를 가지고 있음~ 코드적으로 보면.. 리듀서 함수가 state를 가지고 있는 것처럼 보임)
// 2. reducer    : 이전 state 값과 action 객체를 파라미터로 받는 함수.. 액션의 타입에 따라 state의 변경작업을 하여 새로운 state를 만들어 리턴 해주는 함수(원하는 작업으로 setState()를 해주는 함수)
// 3. action     : 사용자가 리듀서에게 보내는 객체로서 어떤 작업을 원하는지를 지칭하는 type과 변경값 payload를 멤버로 가지는 객체
// 4. dispatcher : 사용자가 원하는 action을 store에 있는 리듀서reducer에게 보내주는 기능함수

// [제목, 메시지, 이름, 나이, 아이템들,...등]의 앱에서 사용하는 state들을
// 각각 별도의 .js 파일로 나누어 작업하는 방식이 요즘 선호됨 -- 덕스패턴
// 보통 이렇게 redux에 관련된 코드가 작성된 파일들은 redux라는 이름의 폴더에 위치함.

// 전역저장소 store를 만들기
// import { createStore } from 'redux' // 이제는 Redux Toolkit 사용(추가 필요) -- 기존 모든 코드들을 뒤집어야 할 수 있기에... 아래 꼼수를 사용함
import { legacy_createStore as createStore } from 'redux'
import rootReducer from './redux/RootReducer.js'
import { Provider } from "react-redux"

const store= createStore(rootReducer) // store 안에 리듀서를 배치

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 최상위 요소로 store를 제공함으로서 모든 컴포넌트들이 store의 값을 사용할 수 있도록 */}
    <Provider store={store}>
      {/* 이 영역 안에 있는 컴포넌트만 store 사용 가능 */}
      <Home></Home>
    </Provider>
  </StrictMode>,
)
