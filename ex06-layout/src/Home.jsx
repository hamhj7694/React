import React, {Component, Fragment} from "react";
import styled from 'styled-components'
import logo_insta from './assets/instagram-logo.png'
import logo_facebook from './assets/facebook-logo.png'

import './Home.css'

class Home extends Component{
    render(){
        return(
            // <Fragment>
            //     <h2>Hello</h2>
            //     <p>nice</p>
            // </Fragment>

            // 여러개 리턴하기 위해 div 묶었더니.. 중첩이 깊어짐! 필요없을 수도 있음!
            // 그래서 등장한 그냥 묶어만 주고, 실제 요소가 되지 않는 컴포넌트(화면의 일부-파편) : Fragment
            // 단, 실제 요소가 아니기에 스타일 등.. 어떤 속성도 적용할 수 없음.
            // 실제 요소가 아니기에.. Fragment 라는 글씨조차 보이게 하기 싫다면?
        
            <>
                <h2>Hello</h2>
                <p>nice</p>

                {/* 레이아웃 연습 (3개의 요소를 배치 - flex 스타일) : styled-components */}
                <Root>
                    <div>Resion #1</div>
                    <div>Resion #2</div>
                    <div>Resion #3</div>
                </Root>
                    
                <Header>
                    <img src={logo_insta} alt="로고" />
                    <input type="text" placeholder="검색" />
                    <div>
                        <span>SAM</span>
                        {/* 이미지파일을 public 폴더에 넣어보기 */}
                        <img src="./우사기.jpg" alt="" />
                    </div>
                </Header>

                {/* 인스타그램 로그인 요청 화면 UI 만들어보기 - 일반 css 방식 */}
                <div className="container">
                    <img src={logo_insta} alt="로고" className="logo"/>

                    <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" className="login_input" />
                    <input type="password" placeholder="비밀번호" className="login_input" />

                    <input type="submit" value='로그인' className="login_btn"/>
                    
                    <div className="separator">
                        <span>또는</span>
                    </div>

                    <div className='login_facebook'>
                        <a href="">
                            <img src={logo_facebook} alt="로고" />
                            <p>페이스북으로 로그인</p>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}
export default Home

const Root= styled.div`
    display: flex;
    border: 1px solid black;
    padding: 1rem;
    justify-content: space-between;
`

const Header= styled.div`
    display: flex;
    padding: 1rem;

    justify-content: space-between;
    box-shadow: 0px 3px 3px black;

    >img{width: 6rem;}
    >input{
        padding: .5rem 1rem;
        text-align: center;
    }
    div{
        display: flex;
        img{
            width:2rem;
            height: 2rem;
            border-radius:50%;
            margin:4px;
            border: 1px solid black;
        }
        span{
            font-weight: bold;
            padding:8px;
        }
    }
`