import { Component } from "react";

class MyInput extends Component{
    render(){
        // type, size, placeholder 속성값을 전달받는 input 요소
        // return  <input
        //         type={this.props.type}
        //         size={this.props.size}
        //         placeholder={this.props.placeholder}
        //         style={{padding:'.5rem', margin:4}}
        //         >
        //         </input>

        // [문제] 사용자가 어떤 속성들을 전달할지 모르니...
        // [개선] 그냥 그 속성들을 그대로 적용시키기!
        // [ 스프레드 연산자 (...) ] 객체의 멤버를 펼쳐주는 연산자
        return <input {...this.props} style={{padding:'.5rem', margin:4}} />
    }
}
export default MyInput