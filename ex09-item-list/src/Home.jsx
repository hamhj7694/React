import { useState } from "react"
import ItemComponent from "./components/ItemComponent"
import ItemComponent2 from "./components/ItemComponent2"

function Home(){

    // 1) 글씨 데이터를 가진 state 변수와 setState 함수 만들기
    let [message, setMessage] = useState('Hello world')
    
    // 2) JSX 태그를 가진 state 변수&함수 만들기
    let [message2, setMessage2] = useState(<h2>nice to meet you</h2>)

    // 3) 여러개의 글씨를 가진 배열 변수
    let [datas, setDatas]= useState(['aaa', 'bbb', 'ccc', 'ddd']) // 초기값 배열로 주기

    // 4) 여러개의 <li> 리스트 요소를 가진 배열 변수 열거하기
    let [datas2, setDatas2]= useState([<li>aaa</li>, <li>bbb</li>, <li>ccc</li>, <li>ddd</li>])

    // 7) 실제 대량의 데이터를 가진 배열 변수
    const [items, setItems]= useState([ // []빈칸으로 많이 둠.. 원래 서버에서 받아와야해서
        {no:1, name: 'sam', message:'hello react'}, //게시글 하나
        {no:2, name: 'king', message:'i am a king'}, 
        {no:3, name: 'robin', message:'nice to meet you'},
        {no:4, name: 'hong', message:'nice AI'}, 
    ]) 
    
    // 숙제: 이미지가 있는 데이터를 목록으로 표시해보기
        const [items2, setItems2]= useState([ // []빈칸으로 많이 둠.. 원래 서버에서 받아와야해서
        {no:1, name: '고슴도치', message:'hello 나는 고슴도치야 고슴고슴', img: 'https://cdn.pixabay.com/photo/2014/10/01/10/44/animal-468228_1280.jpg'}, //게시글 하나
        {no:2, name: '북극여우', message:'나는 하얀 북극여우 어우~', img: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg'}, 
        {no:3, name: '고양이들과 강아지들', message:'예쁜 고양이와 멋진 강아지의 소개팅 현장', img: 'https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg'},
        {no:4, name: '라쿤', message:'나는 너구리가 아니고, 라쿤이야!', img: 'https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081_1280.jpg'}, 
    ]) 


    return(
        <>
            <h2>목록형 UI 구현하기</h2>
            
            {/* 1) 일반 글씨를 가진 변수를 그냥 출력해보기 */}
            {message}
            {/* 2) 요소를 가진 변수를 그냥 출력하면? */}
            {message2}
            <hr/>

            {/* 3) 글씨 여러개를 가진 배열을 출력해보기
            -- 원래 JS는 배열을 출력하면 콤마(,)로 요소들이 구분됨 aaa, bbb, ccc, ddd
            -- 근데, JSX에서는 콤마 없이 그냥 찍어줌! aaabbbcccddd */}
            {datas}

            {/* 4) 각 요소들의 구분을 쉽게 하기 위해 ul 요소로 표시하기 */}
            <ul>
                {datas2}
            </ul>

            {/* 5) 배열의 요소에 HTML 태그를 저장하는 방식은 좀 번거로움 */}
            {/* 실무 환경의 서버 DB에는 HTML 태그 요소가 아니라, 그냥 데이터 값들만 존재함 */}
            {/* 그래서 우리는 일반 데이터를 가진 배열의 요소를 하나씩 가져와서 html 요소로 감싸서 보여줘야 함 */}
            <ul>
                <li>{datas[0]}</li>
                <li>{datas[1]}</li>
                <li>{datas[2]}</li>
                <li>{datas[3]}</li>
            </ul>

            {/* 6) 배열의 요소 데이터를 하나씩 직접 쓰지말고.. 반복문 활용 */}
            <ul>
                {
                    // for(var i=0; i<3; i++){} // error -- 변수, 함수, 연산자, 값
                    // 배열 스스로 본인의 요소 개수만큼 반복하면서 특정 함수가 실행되도록 하는 메소드가 있었음
                    // datas.forEach(function(){}) // 각각에 대하여 이 함수를 실행하겠다! e, idx, array -- forEach는 자기 혼자 반복만하고... 출력은 안해줌...
                
                    // .map() -- .forEach 처럼 요소의 개수만큼 만복하며 함수를 실행하여 그 결과를 새로운 배열로 리턴해주는 기능
                    // 배열을 넣어서 --> map 시켜서 새 배열 만들기!
                    datas.map(function(e,idx,array){ // 요소, 인덱스번호, 배열
                        // 반복문으로 목록을 구현할때... 항목(item)마다 key 라는 속성을 줘야만 함. 값은 중복되지 않는 값
                        return <li key={idx}>{e}</li>
                    })
                }
            </ul>
            <hr />

            {/* 7) 대량의 데이터가 보통은 값여러개를 가진 객체들인 경우가 많음. */}
            {/* {items} 객체들은 나열될 수 없음... 화면 안 나옴 */}
            {
                items.map((item,idx)=>{
                    return(
                        <div key={idx} style={{border:'1px solid black', borderRadius:8, margin: 4, padding: 8, display:'flex', flexDirection:'column'}}>
                            <span>{item.no}</span>
                            <span>{item.name}</span>
                            <span>{item.message}</span>
                        </div>
                    )
                })
            }
            <hr />
            
            {/* 8) 아이템마다 화면 UI를 만드는 코드가 다 적혀있으니 코드가 길어지고 지저분함..
                    그래서 항목 한개의 UI를 별도의 커포넌트 조각으로 분리하여 제작하기 */}
            <div style={{border: '2px solid blue', padding: 8, margin: 8}}>
                {
                    items.map((item, idx)=>{
                        return <ItemComponent item={item} key={idx} onClick={()=>{alert('선택 항목의 이름 : '+item.name +'\n선택 항목의 메시지 : '+item.message)}}></ItemComponent>
                    })
                }
            </div>

            {/* 과제 */}
            <div style={{border: '1px solid red', padding: 8, margin: 8}}>
                {
                    items2.map((item, idx)=>{
                        return <ItemComponent2
                        item={item}
                        key={idx}
                        onClick={()=>{alert(item.name +'\n'+item.message)}}>
                        </ItemComponent2>
                    })
                }
            </div>
        </>
    )
}
export default Home