// Component라는 클래스는 react.js 라는 라이브러리에 설계 되어 있음.
// 이 파일에서 사용하려면.. import 해야함!
import { Component } from "react";

// 별도의 css 문서 연결
import './MyApp.css'

// src 폴더 안 이미지 파일을 불러와서 변수로 만들기
import usagi from './assets/우사기.jpg'

// 리액트에서 화면 구성요소가 되려면.. Component라는 클래스를 상속해야함.
class MyApp extends Component{ //상속을 통해 Component아ㅣ 멤버들을 가지게 됨

    // MyApp 컴포넌트가 보여줄 화면을 그리는 기능함수(이름이 정해져 있음)
    render(){
        // 브라우저가 보여줄 글씨를 리턴해주면 표시됨
        // return "Hello My Webapp";

        // 태그문 글씨를 출력해보면? -- 따옴표 사용하면 그냥 문자열데이터... 태그문 인식 못함
        // return "<h2> Hello </h2>"

        // 따옴표 없이 태그문<> 사용하면 React가 알아서 DOM 객체로 만들어 화면을 구성함
        // return <h2>Hello Webapp</h2>
        // 이렇게 .js 안에 html 태그문을 같이 사용 가능한 언어 : JSX 언어 (JS + XML[html])

        // 요소 여러개 표시하기 -- return은 하나의 요소만 가능
        // return <h2>Hello</h2> <p>에러</p>

        // 그래서 여러 요소를 감사는 큰 요소 하나를 만들고, 그 안에 여러 요소를 배치
        // jsx 언어의 특징은 js안에 <> 태그문을 사용하듯이..
        // <> 태그 안에서 js의 변수 사용이나 함수 호출을 수행할 수 있음
        let name= '우사기'
        let type= 'checkbox' //input 요소의 타입

        // 스타일 적용해보기 -- 별도의 .css 문서 만들어 적용
        return (
            // 속성명 class 명 대신 .. className 사용을 권장 -- JS에서 class를 설계도를 만드는 키워드랑 오해할까봐!
            <div className="wrap">
                <h2>Hello React JSX</h2>
                <p>This is paragraph element</p>
                // 주석 안됨
                <p>Hello name</p>
                <p>Hello {name}</p>
                {/* XML 영역안에서 JS를 사용하는 {} 쓰고,
                JS의 주석 문법으로 이렇게 주석 하세요~ */}
                {/* 컨트롤 + / 누르면 알아서 주석 해줌! */}
                
                <input type="text" />
                {/* 속성값도 JS 변수로 설정 가능 */}
                <input type={type} />

                {/* JSX언어는 반드시 end tag 있어야 함. closing tag 사용해야함 */}
                <hr />

                {/* 이미지 보여주기 -- 별도 수업 예정 - 맛보기 */}
                {/* src 폴더에서 작업하는 component 이미지들은 src 폴더 안에 위치하는 것을 선호함 */}
                {/* 이미지를 사용하려면 import 해야 사용 가능 */}
                <img src={usagi} alt="우사기" />
            </div>
        )
    }

} // MyApp 클래스................................

// 다른 문서(main.jsx)에서 MyApp 클래스 사용하려면.. export 해야 함.
export default MyApp;