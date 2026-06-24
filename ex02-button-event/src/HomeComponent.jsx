//React 기능과 Component 클래스 사용하기 위해 .. import
import React, {Component} from "react"

// React는 Component 능력을 가진 녀석이 화면의 구성요소가 될 수 있음.
class HomeComponent extends Component{

    // 일반 멤버 변수 -- 바꿀 이름 'name'는 멤버 변수로 만들어야 한다!
    name = 'sam'

    // 값이 변경되면 react가 자동으로 화면을 갱신해주는 Component 클래스의 아주 특별한 멤버변수
    // state로 관리될 변수가 여러개일 수 있으니... 객체로 저장!!!
    state= {
        name: 'park',
        age: 20
    }
    
    // 컴포넌트가 보여줄 화면 구성을 리턴해주는 기능함수
    render(){
        return (
            <div>
                <h2>리액트 버튼 클릭 이벤트</h2>

                {/* 버튼 클릭 이벤트 처리 (html과 약간 다름) */}
                {/* 주의: 함수명() 괄호까지 호출 하면 바로 실행됨... */}
                {/* <button onClick={ aaa() }>눌러주세요</button> */}

                {/* 그래서 (괄호) 안쓰고 함수명만 써라! */}
                <button onClick={ aaa }>눌러주세요</button>
                {/* 위처럼 클릭 이벤트에 반응하는 함수를 HomeComponent 클래스 밖에 놓는 것은 안 좋음! */}
                {/* 그래서 반응하는 함수도 가급적.. 클래스 영역 {} 안에 멤버함수로 만들어 등로 권장! */}
                {/* 멤버를 지칭할 때는 this 키워드 필요!!! */}
                <button onClick={ this.bbb }>메소드</button>
                <button onClick={ this.ccc }>익명</button>
                <button onClick={ this.ddd }>화살표(무조건 추천! 권장!)</button>
                {/* 화살표 함수로 실행할 코드가 길지 않다면,, 별도로 만들지말고.. 이 자리에서 바로 적용<!DOCTYPE html> */}
                <button onClick={ ()=> alert('나는야 화살표 arrow 랍니다~') }>다시 눌러줘잉~</button>
                <hr />

                {/* 버튼 눌러서 다른 요소의 글씨 변경해보기 */}
                <p>이름 : {this.name}</p>
                <button onClick={ this.changeName }>우사기 소환! -- 이거는 에러남!</button>
                <button onClick={ this.changeName2 }>우사기 진짜 소환!</button>
                <hr />

                {/* state 변수 활용해 데이터 변경해보기 */}
                <p>이름 : {this.state.name}</p>
                <button onClick={ this.changeName3 }>이름 변경!</button>

                {/* state.age 정보 표시 및 변경하기! */}
                <p>나이 : {this.state.age}</p>
                <button onClick={ this.changeAge }>나이 바꾸기</button>
                <button onClick={ this.increaseAge }>나이 +1 증가</button>
            </div>
        )
    } //render ...............

    increaseAge= () => {
        this.setState({age: this.state.age + 1})
    }
    changeAge= () => {
        this.setState({age: 30})
    }
    changeName3= () => {
        // state 변수의 값을 변경하려면, 무조건 setState()라는 함수를 이용해야만 갱신됨
        this.setState({name:'hong'})
    }



    // react에서 이벤트 처리용 함수는 무조건 '화살표 함수'로 만들기!
    changeName2= () => {
        this.name= '우사기'
        // 변수는 정상적으로 바뀜! 하지만 화면에서는 다시 그리지 않음...
        // 화면을 다시 그리라고 명령해야한다!
        this.forceUpdate()
        // 이렇게 갱신하라고 명령 일일히 해야하면... 짜증!!!!!!!!!! 알아서 자동으로 갱신되길 원한다면?
        // 값이 변경되엇을 때 자동으로 화면이 갱신되는 아주 특별한 변수 state (상태값) 활용하자!
    };

    // '우사기 소환' 버튼 클릭 시 실행될 멤버함수
    changeName= function(){
        // [데이터 바인딩 사용!] 기존 방식과 완전 다른 방식으로 요소의 글씨를 변경
        // 요소가 변수 값을 보여주고.. 클릭 되었을 때, 요소를 찾지 않고.. 변수값만 변경하면
        // 그 변수를 보여주는 요소의 글씨가 변경되도록 하는 기법(데이터 바인딩)
        this.name= '우사기' //에러!
        // [이유] 익명함수도 객체가 될 수 있기에.. this.name를
        // HomeComponent가 아닌 본인 changeName의 멤버인줄 오해함!
        // 그래서.. this 키워드의 영향을 받지 않으려면
        // [화살표 함수]를 써야함! -- 화살표 함수는 객체가 되지 않는 함수임
    }

    // es6 도입된 다른 함수 : 화살표함수 -- React에서 권장함! [무조건 이 함수 사용할 것!]
    ddd=()=>{alert('화살표 함수')}

    // 함수 정의하는 도 다른 방법 : 익명함수
    ccc= function(){
        alert('익명함수입니다')
    }

    // 멤버 영역 -- 클릭 이벤트에 반응하는 메소드 함수 만들기 (function 키워드 X)
    bbb(){ 
        alert('bbb function 입니다');
    }

} // HomeComponent ..............

export default HomeComponent

// 1번 실습) 버튼 클릭시 반응하는 함수
function aaa() {
    alert('click!')
}