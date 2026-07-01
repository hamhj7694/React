import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './Home'

// todo webapp mini projext...
// [제작 순서]
// 1. 필요한 라이브러리 추가 : scss(스타일 라이브러리), react-icons아이콘 SVG 라이브러리 [ npm install sass react-icons ]
// 2. Home component 제작
// 3. UI 구성요소는 컴포넌트로 영역 구분해 제작 [ 4개의 컴포넌트 ]
// 3.1 TodoContainer : 화면 가운데 위치, 할일 목록 웹앱의 Root 컴포넌트
// 3.2 TodoInput     : 사용자가 할일을 입력할 수 있도록 스타일 된 입력 컴포넌트
// 3.3 TodoList      : 할일 항목(TodoItem)들이 놓여질 컴포넌트
// 3.4 TodoItem      : 할일 글씨와 아이콘들을 보여주는 UI로 스타일된 컴포넌트

// 위 UI 작업 완료! 다음 기능 구현!
// 할일 데이터들을 가진 배열(todos)을 만들어야 함... 어디에??
// TodoInput 컴포넌트에서 입력한 글씨를 Todolist에서 보여줘야 함!
//  ㄴ 위 2개의 컴포넌트를 가지는 부모 컴포넌트(TodoContainer)에서 todos 데이터배열이 있어야함!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
