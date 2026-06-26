import { Component } from "react";

class MyComponent2 extends Component{
    render(){
        return(
            // 컴포넌트 조각이 본인의 스타일을 알아서 해놓기...! -- 인라인 스타일
            // {{}} 밖{중괄호} = JS 영역으로 들어가는!, 안{중괄호}는 객체 덩어리!
            <div style={{margin:'16px'}}>
                <span style={{padding: '.5rem 1rem', color:'blue'}}>안녕하세요! 마이컴포넌트 2 입니다!</span>
                <button>여기는 버튼</button>
            </div>
        )
    }
}
export default MyComponent2