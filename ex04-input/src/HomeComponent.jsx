import React, {Component} from "react"

class HomeComponent extends Component{
    
    state={
        text:'',
        text2:'',

    }
    
    // 일반 멤버 변수 -- 값을 변경해도 실시간 반영되지 않는 변수
    inputText=''

    // 요소를 참조할 수 있는 참조 변수 선언
    inputRef= React.createRef()
    pRef= React.createRef()

    render(){
        return(
            <div>
                <h2>리액트에서 배우는 INPUT</h2>
                <p>리액트에서 사용자 입력 받아보기</p>
                <hr />

                {/* 실습 1. onChange : 글씨가 바뀔 때 실행 */}
                <input type="text" onChange={ this.changeText } />
                <hr />

                {/* 실습 2. input 요소의 글씨가 변경될 때 마다 바로 아래 p요소에 표시하기! */}
                <input type="text" onChange={ this.changeText2 } />
                <p>입력된 글씨 : {this.state.text}</p>
                <hr />

                {/* 실습 3. 버튼 클릭 시 input 요소에 써 있는 글씨를 p요소에 보여주기 */}
                <input type="text" onChange={ this.changeText3 }/>
                <button onClick={ this.clickBtn }>입력완료</button>
                <p>입력이 완료된 글씨 : {this.state.text2} </p>

                {/* 실습 4. 요소를 참조하여 제어하는 방식을 react에서도 제공함 */}
                <input type="text" placeholder="이메일을 입력하세요." ref={this.inputRef} />
                <button onClick={this.clickBtn2}>확인</button>
                <p ref={this.pRef}>입력한 이메일 정보</p>
                
            </div>
        )
    } // render method ...............

    // 실습 4 함수
    clickBtn2 = () => {
        // inputRef 참조변수가 현재 참조하는 요소의 값을 가져와서
        let value= this.inputRef.current.value
        // pRef 참조변수가 현재 참조하는 요소에 쓰기
        this.pRef.current.innerHTML = value
    }

    // 실습 3 함수
    changeText3 = event => this.inputText = event.target.value
    clickBtn = () => this.setState({text2: this.inputText})

    // 실습 2 함수
    changeText2 = event => this.setState({text: event.target.value})

    // 실습 1 함수 : 글씨 변경 될 때마다 반응하는 함수
    changeText = (event) => { // event : 변경 이벤트 정보를 가진 객체가 자동으로 전달됨
        // alert(event.target.value) // 이벤트를 발생한 녀석(target)의 값 출력!
        // 브라우저 개발자모드(F12)의 콘솔에서 출력하기
        console.log('change text : ' + event.target.value)
    }

} // HomeComponent ...................
export default HomeComponent