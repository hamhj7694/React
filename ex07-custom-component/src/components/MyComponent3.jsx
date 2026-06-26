import { Component } from "react";

{/* 속성으로 전달받은 값들은 이 컴포넌트 클래스 안에 props라는 이름의 아주 특별한 멤버변수에 전달됨 */}

class MyComponent3 extends Component{
    render(){
        return(
            <div style={{border: '1px solid gray', margin: 4, padding: '.5rem'}}>
                <h4>3번째 컴포넌트</h4>
                
                <p>hello {this.props.aaa}님</p>
                {/* 혹시 이름을 전달받지 않으면 안내문구 보여주기 */}
                {/* JSX 언어의 태그 안에서 JS를 사용하려면 {} 써야함 */}
                {/* 단, {}안에는 오직 값, 연산자, 변수, 함수호출만 가능함! */}
                {/* 그래서 조건문 if문을 쓸 수 없음! */}
                {/* {if(this.props.aaa==undefined){}} -- 이거 에러임! */}
                {/* 조건에 따라 다른 UI를 구성하려면!? 삼항연산자 사용!!!!!!!!!!!!!!*/}
                {/* 삼항연산자 -- 조건?A:B (참이면 A 거짓이면 B) */}
                { this.props.aaa==undefined ? <em>이름이 없어요</em> : <em>이름이 있어요.</em>}

                <p style={{color:this.props.color}}>age : {this.props.age}</p>
                
            </div>
        )
    }
}
export default MyComponent3