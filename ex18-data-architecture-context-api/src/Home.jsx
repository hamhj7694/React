import React, { useState } from "react"
import First from "./components/First"

// Home 아래 있는 모든 컴포넌트들이 공유하고 싶은 데이터가 있다면..
// 전역 저장소를 만들어 값을 저장해 놓고 자식 컴포넌트들이 언제든 저장소에 접근하여 데이터를 사용!
// 전역 저장소를 Context라고 부름(또는 store 라고 부름)
export const MyContext= React.createContext() // 다른 곳에서 쓰려면 export 해야함!

function Home(){

    const [msg, setMsg]= useState('hello react')

    return(
        <div style={{padding:16}}>
            <h1>HOME</h1>
            {/* MyContext의 데이터들을 자식들이 사용할 수 있도록 제공해주는 객체로 감싸야 함 */}
            <MyContext.Provider value={{msg:msg, setMsg:setMsg}}>
                {/* 이 영역 안에 있는 자손 컴포넌트들만 MyContext에 접근 가능*/}
                <First></First>
            </MyContext.Provider>
        </div>
    )
}
export default Home

// Context API : 앱 전체에서 참조할 수 있는 전역변수를 만들 수 있는 React 내장 기능 API
// 상태값을 최상위 컴포넌트에 넣고 작업해도 되지만..
// state 변수가 많아지면 관리가 어려움!

// 그래서 state 값과 이를 제어하는 함수들을 연관된 것끼리 별도의 파일로 나누어 관리하는 방법!
// 외부 라이브러리 esdux