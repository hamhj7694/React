import React, {Component} from "react";
import MyComponent2 from "./components/MyComponent";
import MyComponent3 from "./components/MyComponent3";
import MyInput from "./components/MyInput";
import MyButton from './components/MyButton'

import ComponentA from './components/componentA'
import ComponentB from './components/componentB'

import MyContainer from './components/MyContainer'

class Home extends Component{

    // 컴포넌트 A가 보여주는 글씨 데이터(값이 변경되면 자동으로 화면갱신)
    state= {
        'nickname':'opps',
    }

    // 컴포넌트 B가 클릭됐을 때 실행될 함수
    changeNickname=()=> this.setState({'nickname':'MBCA'})

    render(){
        return(
            <>
                <h2>Custom Component</h2>

                {/* 리액트는 화면의 일부 영역을 별도의 컴포넌트로 분리하여 조립하여 구성하는 것이 가능 */}
                {/* 1) 별도의 컴포넌트 조각 만들기. Home.jsx 안에 또 다른 컴포넌트를 제작해보기 */}
                <MyComponent />
                <MyComponent />
                <hr />

                {/* 2) 다른 문서에서도 재사용하고 싶다면 별도 .jsx 로 화면 조각내기 추천! */}
                <MyComponent2 />
                <MyComponent2 />

                {/* 3) 컴포넌트 재사용 시.. 같은 글씨만 보이는 것 효용성 X */}
                {/* 그래서 컴포넌트를 재사용할 때 데이터를 속성 property로 전달해보기  */}
                <MyComponent3 aaa='sam' age='20' color='red' />
                <MyComponent3 aaa='robin' age='26' color='green' />
                {/* 혹시 속성들을 안 주면? */}
                <MyComponent3></MyComponent3>

                {/* 4) 컴포넌트에 전달할 값들이 여러개일때... 컴포넌트 안에서 속성들을 한번에 알아서 사용하기! */}
                <MyInput type='text' size='10' placeholder='닉네임 입력!' readOnly ></MyInput>
                <MyInput type='password' size='20' placeholder='비밀번호 입력!' autoFocus ></MyInput>
                {/* [ 스프레드 연산자 (...) ] 활용! */}

                <hr />

                {/* 5) 컴포넌트의 props로 함수를 전달할 수도 있음 */}
                <MyButton label='A의 라벨 -- 전화 걸기' aaa={this.actionA} ></MyButton>
                <MyButton label='B의 라벨 -- 지도 열기' aaa={this.actionB} ></MyButton>

                {/* 6) 컴포넌트들 간의 데이터 처리 */}
                <ComponentA nickname={this.state.nickname}></ComponentA>
                <ComponentB onClick={this.changeNickname}></ComponentB>

                {/* 7) 컴포넍트의 속성이 아니라 자식을 전달 */}
                <MyContainer>
                    <h5>타이틀</h5>
                    <p>this is 컴포넌트의 자식</p>
                </MyContainer>
            </>
        )
    } // render.............
    actionA=()=> alert('전화를 겁니다')
    actionB=()=> alert('지도가 나옵니다!')

} // Home..............
export default Home

// 나만의 UI 조각 만들기
// export class MyComponent extends Component{ // 다른 곳에서도 쓰려만 export
class MyComponent extends Component{W
    render(){
        return(
            <div>
                <p>This is my component</p>
                <button>Button</button>
            </div>
        )
    }
}