import React, {Component} from "react";

// 리액트에서 스타일 적용하는 방법 매우 다양함...
// 리액트에서 기본으로 제공하는 방식이 3가지
// 추가로 외부 라이브러리로 스타일 적용 방식 2가지

// 외부 css 파일 가져오기
import './Home.css'
// 모듈로 된 css 파일 가져오는 방법
import homeStyle from './Home.module.css'

// scss 가져오기
import './Home.scss'

// styled 된 컴포넌트를 만들어주는 객체 가져오기
import styled from 'styled-components'

class Home extends Component{
    render(){
        return(
            <div>
                {/* 1. 인라인 스타일 : style 속성으로 지정 [다른 점: 스타일을 문자열이 아닌 JS 객체로 만들어 줘야 함] */}
                <h2 style={titleStyle}>리액트 스타일 배우기</h2>
                <p style={textSytle}>나이스튜 미튜</p>
                <p style={textSytle}>안녕</p>
                <p style={{color:'green', margin:16}}>좋은 하루 되세요!</p>

                <hr />
                {/* 2. 외부 css : 별도 css 파일을 만들고 적용하기 ~~ [주의!] 다른 화면에도 영향 줄 수 있음!*/}
                <p className="aa">클래스 선택자 연습</p>

                <hr />
                {/* 3. 모듈 css : 클래스 선택자를 특정 요소에만 적용되도록 하는 Home.module.css 파일 [인기 없음] */}
                <p className="bb">모듈 클래스 선택자 연습</p> {/* 이렇게 쓰면 모듈 css 적용 안 됨 */}
                <p className={homeStyle.bb}>모듈 클래스 선택자 실습</p>

                <hr /> {/* ------------ 외부 라이브러리 적용 방식  ------------*/}

                {/* 4. 외부 스타일 라이브러리 : sass/scss -- sass만 install 해도 scss 받음 */}
                <nav className="menu">
                    <ul>
                        <li><a href="">네이버</a></li>
                        <li><a href="">카카오</a></li>
                        <li><a href="">구글</a></li>
                    </ul>
                </nav>

                {/* 5. 외부 스타일 라이브러리 : styled-components  */}
                {/* sass랑은 다르게 사용하려면 import 해야함 */}
                {/* 스타일이 적용된 버튼을 제작하고 사용 */}
                <StyledBtn>스타일이 된 버튼</StyledBtn>
                <StyledBtn>나만의 또 다fms 버튼</StyledBtn>

                {/* 사용자 입력박스.. 스타일 적용된 input 요소 */}
                <MyInput></MyInput>

                {/* 자식요소들의 스타일을 가진 요소도 만들 수 있음 */}
                <MyContainer>
                    <span>Good</span>
                    <p>Hello <span>Hi</span></p>
                </MyContainer>
                <span>나이스튜미튜</span>

                {/* 형제 선택자 사용 + ~  */}
                <TextInput placeholder="보고 싶은 사람은?"></TextInput>
                <TextInput placeholder="그 사람에게 하고 싶은 말은?"></TextInput>
                <div>잠시 다른 요소</div>
                <TextInput placeholder="그 사람이 있는 곳은?"></TextInput>
                <hr />

                {/* 요소의 속성에 다르게 스타일을 적용(동적 스타일링) [속성명은 마음대로 정해도 됨] */}
                <WebBtn bg='green'>로그인</WebBtn>
                <WebBtn bg='blue'>회원가입</WebBtn>


                {/* [별외] 요즘 유행하는 외부 스타일 라이브러리 : bootstrap css, tailwind css */}

                {/* [라이브러리 설치 필요] npm install 이름 */}
                {/* 라이브러리를 설치하면, 파일들은 node_modules 폴더에 다운로드되며. package.json 파일의 dependencies에 등록됨 */}
                {/* [라이브러리는 따로 다운 받아야하는데.. 일괄 다운 받는 방법 --> ] npm install */}

            </div>
        )
    } // render...........................
} // Home.................................
export default Home

// 1번 실습 : 인라인 스타일용 JS 객체 - 제목 글씨 스타일
const titleStyle = {color:'blue'}
// 일반 글씨 스타일
const textSytle = {
    color:'red',
    fontSize: 20, // 스네이크 표기법 X 카멜 표기법으로 바뀜 기본 단위는 px
    fontStyle: 'italic',
    margin: '16px', //단위 사용하려면 문자열로!
}

// styled-components 를 이용하여 스타일링이 된 버튼 컴포넌트 만들어 놓기
// 스타일 작성 방법은 빽틱(`)영역 사용 -- vs코드에서 속성명 자동완성되게 하는 확장프로그램 [vscode-styled-components]
const StyledBtn = styled.button`
    font-size: 1rem;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    padding: .25rem 1rem;
    border-radius: 4px;

    &:hover{
        background-color:#fff;
        color: #000;
    }
`

const MyInput = styled.input`
    padding: .25rem;
    width: 10%;
    margin: 16px;
`

const MyContainer= styled.div`
    margin : 1rem;
    padding: 1rem;
    box-shadow: 0px 5px 3px gray;

    /* 본인을 지칭하고, hover되었을 때! */
    &:hover{
        background-color: yellow;
    }

    /* 자식 선택 가능 [본인을 지칭하는 & 생략가능] */
    >span{
        color: blue;
        font-weight: bold;
    }

    /* 자손도 선택 가능 */
    & span{ /* &랑 띄어쓰기 생략 가능 --> span{} 바로 작성 가능! */
        font-style: italic;
    }
`

const TextInput= styled.input`
    padding: .5rem 1rem;
    display: block;

    /* 바로 다음 형제 선택자 + */
    & + &{
        margin-top: .5rem;
    }

    & + div{
        margin-top: .5rem;
    }

    /* 다음으로 오는 모든 형제 선택자 ~ */
    & ~ &{
        border: 1px solid red; 
    }
`

let textColor= 'white'

const WebBtn= styled.button`
    display: block;
    width: 100%;
    margin: .5rem 0;
    padding: .5rem 0;
    color: #fff;
    font-weight: bold;

    /* 스타일이 된 버튼에 지정된 속성(property)을 받아서 특정 기능으로 처리할 수 있음 */
    /* background-color: ${ function(props){return props.bg} }; */
    background-color: ${ props=>props.bg };

    //JS의 변수값 사용
    color: ${textColor};
`