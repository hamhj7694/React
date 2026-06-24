function show(){
    // alert('show');
    // 모듈 js 쪽에서는 html의 dom을 직접 출력하는 기능 불가.
    // DOM 객체를 생성해서 출력해야 함
    const div= document.createElement('div');
    div.textContent= 'Show!';
    document.body.appendChild(div);
}

// 다른 js에서 show함수를 import해서 사용하게 하려면 ..export(수출) 해야함
export default show; // 이 문서안에서 적어도 1개는 export default 있어야함!

export function output(){
    const div= document.createElement('div');
    div.textContent= '아웃풋!!!!!!!!!!!!!';
    document.body.appendChild(div);
}

// 다른 js에서 사용하려면 export 꼭 해야함!
// export output; // default는 js에서 1개만 가능!
// default가 아니면, 만들면서 export 해야함

// 변수도 export 가능
export let name= '함';
export const age= 20;