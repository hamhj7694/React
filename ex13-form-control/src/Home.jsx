import { useState, useRef } from "react"

function Home(){
    
    // 1)
    const [title, setTitle] = useState('')
    const [msg, setMsg] = useState('')

    const changeTitle = event => setTitle(event.target.value)
    const changeMsg = event => setMsg(event.target.value)

    const submitGet = (event) => {
        // form요소는 action 속성이 있든 없든.. 무조건 페이지를 갱신함. SPA에 맞지 않음
        // 때문에 기본기능을 막기
        event.preventDefault()

        // 인풋 요소의 값들을 가져와서 서버 백엔드에 전송 --- ajax - fetch()
        // alert(title+'\n'+msg)

        // 백엔드 언어(php)에 데이터들 전송하기
        // GET 방식 (aaa.php?totle=xxx&msg=xxx)
        // 경로.. 실제 웹앱을 서버에 배포할 때 일반적으로 frontend/backend 폴더를 분리 작업.
        
        const url = '../backend/aaa.php?title='+title+'&msg='+msg
        fetch(url).then(res => res.text()).then(text=> alert(text))

        // AJAX는 반드시 서버에 배포해야 실행 됨.
        // react 프로젝트는 npm run build로 dist 폴더를 배포함.
        // dist 폴더가 프론트앤드 역할이고, 그 안에 index.html이 모든 경로의 기준점!
        // [중요] 단, /vite 처럼 서브 경로가 있으면 vite 설정파일에 등록해야함!
    }

    // -------------------------------------------------------------

    // 2)
    // radio 버튼 선택 값 저장하는 변수
    const [gender, setGender] = useState('female') // 초기값 : 여성

    // checkbox 버튼 선택 값들을 저장하는 배열변수
    const [fruits, setFruits] = useState(['apple','orange']) // 초기값

    // 전달 받은 값이 fruist 배열에 있으면 제거. 없으면 추가하는 함수
    const changeCheckbox = (value)=>{
        if(fruits.includes(value)){
            // 배열요소의 제거는... 그 요소만 제외하고 필터링 된 새 배열 만들어야 함.
            const newFruits= fruits.filter(e => e!=value)
            setFruits(newFruits)
        }else{
            // 배열요소의 추가는... 원래 배열을 복제한 새 배열을 만들고 value 추가.
            const newFruits= [...fruits, value]
            setFruits(newFruits)
        }
    }

    // select 요소가 선택한 값 저장 변수
    const [brand, setBrand]= useState('기아')

    // textarea 요소에 써있는 글씨 저장 변수
    const [content, setContent] = useState('')

    const clickBtn = () => {
        // 선택값들을 저장하고 있는 변수들의 값을 경고창에 보여주기
        let s=''
        s += gender+'\n'
        s += fruits+'\n'
        s += brand+'\n'
        s += content+'\n'

        alert(s);
    }

    // -------------------------------------------------------------

    // json 문자열로 바꿔 전송해보기(권장)
    const submitPOST = () => {
        const data= {
            gender: gender, //식별자:값
            fruits: fruits,
            brand, // 식별자와 값 변수명이 같으면.. 변수명만 써도 됨!
            content,
        }
        // JS 객체형태로 데이터를 json 문자열로 변환
        const jsonData= JSON.stringify(data)
        // alert(jsonData)

        // json 데이터를 백엔드 php에 전송하고 응답 받기! -- ajax - fetch()
        const url = '../backend/bbb.php'
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: jsonData
        }).then(res=>res.text()).then(text=>alert(text))
    }
    
    // -------------------------------------------------------------

    // 사용자가 선택한 파일을 저장하는 state 변수
    const [file, setFile] = useState() // 초기값 없으면 null
    // 사용자가 input 요소의 파일선택을 변경했을 때 실행될 함수
    const changeFile= (event)=>{
        // 다른 input 요소와 다르게 value 값을 얻으면 가짜 경로로 옴...

        // 실제 파일데이터를 가져와야 함
        const files= event.target.files

        if(files.length === 0) return

        const filesname= files[0].name
        const filessize= files[0].size
        const filestype= files[0].type

        // alert(filesname+'\n'+filessize+'\n'+filestype)

        // 파일정보를 file state 변수에 저장
        setFile(files[0])
    }

    const submitFile= (event) =>{
        event.preventDefault()

        const data= new FormData()
        data.append('img', file)

        fetch('../backend/ccc.php', {
            method:'POST',
            body:data
        }).then(res=>res.text()).then(text=>alert(text))
    }

    // -------------------------------------------------------------

    //5)실습
    //nickname 입력요소와 파일 입력요소를 참조하는 참조변수 만들기 - HOOK
    const nicknameRef= useRef()
    const fileInputRef= useRef()

    //제출버튼 눌렀을때.. ----------
    const submitData= (event)=>{
        event.preventDefault()

        // ref 참조변수들을 참조하고 있는 input요소의 값들(닉네임, 파일들)을 가져오기
        const nickname= nicknameRef.current.value
        const files= fileInputRef.current.files

        // 사용자의 값들을 서버에 보내기 위해 택배상자(FormData) 만들기
        const data= new FormData() //택배상자
        data.append('nickname', nickname) //식별자:글씨데이터
        
        for(let i = 0; i < files.length; i++){
            data.append('img[]', files[i])
        }

        //fetch() 함수를 이용하여 데이터 전송(POST method)
        fetch('../backend/ddd.php', {method:'POST',body: data})
        .then(res=>res.text())
        .then(text=>alert(text))
        .catch(error=>alert(error.message))
    }

    const [imgUrls, setImgUrls] = useState([])
    // 다중 선택 가능한 파일선택이 완료되면..
    const changeFiles=(event)=>{
        // 선택 파일들 정보 가져오기
        const files= event.target.files

        // 파일정보를 가진객체를 그대로 img 요소에 표시될 수 없음
        // url 정보를 변경해야 함.
        const newImageUrls= []
        for(const file of files){
            const url = URL.createObjectURL(file)
            newImageUrls.push(url)
        }
        // 이 url을 state 변수에 저장하여 화면이 새로 그려지게 함.
        setImgUrls(newImageUrls)
    }

    // -------------------------------------------------------------

    return(
        <div>
            <h2>리액트에서 HTTP REQUEST 요청 수업</h2>
            <p>리액트에서 서버에 데이터를 전송해보기</p>

            <hr />

            {/* 리액트는 실제 페이지를 전환하지 않는 SPA 기반 */}
            {/* 서버와의 통신도 form요소를 사용하면 페이지전환이 발생... */}
            {/* JS의 AJAX기슬로 HTTP 요청작업을 수행해야 함. */}

            {/* 키보드 enter 눌러도 전송되게 하고 싶다면.. form 사용 */}

            {/* 1) GET 방식으로 간단하게 데이터 전송실습 */}
            <h4>GET method TEST</h4>
            <form onSubmit={submitGet}>
                <input type="text" placeholder="타이틀" onChange={changeTitle}/>
                <input type="text" placeholder="메시지" onChange={changeMsg}/>
                <input type="submit" />
            </form>
            <hr />

            {/* ---------------------------------------------------------------- */}
            {/* 2) 사용자의 다양한 입력형태의 데이터를 취득 */}
            <h4>다양한 input type 의 value 값을 state 변수에 저장하기 </h4>

            <h5>radio button ~ single choice</h5>
            <div>
                GENDER:
                <label><input type="radio" checked={gender=='male'} onChange={()=>{setGender('male')}}/>남성</label>
                <label><input type="radio" checked={gender=='female'} onChange={()=>{setGender('female')}} />여성</label>
                {/* 원래 name를 같게 했지만.. 리액트에서는 다름 */}
            </div>
            <br />

            <h5>checkbox button ~ multiple choice</h5>
            <div>
                FRUITS : {/* .includes -- 포함하고 있나요? 가지고 있나요? */}
                <label>사과<input type="checkbox" checked={fruits.includes('apple')} onChange={()=>changeCheckbox('apple')}/></label>
                <label>바나나<input type="checkbox"  checked={fruits.includes('banana')} onChange={()=>changeCheckbox('banana')}/></label>
                <label>오렌지<input type="checkbox"  checked={fruits.includes('orange')} onChange={()=>changeCheckbox('orange')}/></label>
            </div>

            <h5>select ~ </h5>
            <select value={brand} onChange={(event)=>{setBrand(event.target.value)}}>
                <option value="현대">현대</option>
                <option value="기아">기아</option>
                <option value="BMW">BMW</option>
            </select>

            <br />
            <h5> textarea 요소 ~ </h5>
            <div>
                CONTENT : <textarea placeholder="내용" value={content} onChange={event => setContent(event.target.value)}></textarea>
            </div>
            <hr />

            <button onClick={clickBtn}>위 4개 선택 및 입력값들 확인해보기</button>

            <hr />
            {/* 3) 입력값들을 서버에 전송(POST 방식으로) */}
            <button onClick={submitPOST}>POST 방식으로 데이터들 전송하기</button>

            <hr />
            <h4>파일 선택 및 전송</h4>
            <form onSubmit={submitFile}>
                {/* 모바일 브라우저에 이 버튼을 누르면 앱 선택(카메라, 갤러리) 바탐시트 나옴*/}
                <input type="file" onChange={changeFile}/>
                <input type="submit" />                
            </form>
            <hr /> 
            {/* ------------------------------------------------------------------- */}

            <h4>여러개의 파일 선택 및 미리보기 + 글씨 데이터까지 서버로 전송</h4>
            <form onSubmit={submitData}>
                {/* 글씨 데이터 */}
                <input type="text" placeholder="닉네임 입력" ref={nicknameRef}/>
                <br />
                {/* 파일 선택 */}
                <input type="file" multiple accept="image/*" ref={fileInputRef} onChange={changeFiles}/>

                {/* 선택된 파일의 미리보기 영역 */}
                <p>선택된 이미지의 수: {imgUrls.length}개</p>
                <div style={{borderTop:'2px solid black', borderBottom:'2px solid black', padding:8}}>
                    {
                        imgUrls.map((value,idx)=><img src={value} key={idx} style={{width:'20%', margin:4, border:'1px solid black', borderRadius:4}}></img>)
                    }
                </div>

                {/* 제출버튼 */}
                <button type="submit" style={{width:'100%', padding:10}}>닉네임과 파일을 서버에 전송</button>
            </form>
        </div>
    )
}
export default Home