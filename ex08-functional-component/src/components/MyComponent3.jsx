function MyComponent3(props){ // 태그에 작성한 속성들이 파라미터로 전달됨!

    // 전달될 props에서 address만 뽑아내기
    let {address, age}= props //구조분해할당 

    return(
        <div>
            {/* Component를 상속 받지 않았기에.. props가 없음! */}
            {/* 그럼 속성은 어디서 받지? --> 파라미터로 받는다! */}
            <span> 안녕하신가? {props.aaa}님.</span>
            <p style={{color:props.color}}> 나이는 {props.age}살 입니다!</p>
            <p>나라: {props.address.nation} || 도시: {props.address.city}</p>

            {/* 위 props.을 매번 쓰면 길어지고 번거로움...! */}
            {/* [구조분해할당] 하자! */}
            <p>{age}, {address.nation}, {address.city}</p>
            <br />
        </div>
    )
}
export default MyComponent3