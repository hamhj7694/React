import { useRef } from "react"

function Home(){

    // 요소 참조변수 만들기 - HOOK
    const videoRef = useRef()

    const startVideo= () => {
        // BOM 객체들 중에 navigator의 하위멤버로.. 웹캠을 제어하는 객체를 사용할 수 있음.
        navigator.mediaDevices.getUserMedia({audio:true, video:{facingMode:'user'}}) // 모바일에서는 앞/뒤 facingMode:{exact:'enciromen)}
        .then(stream=>videoRef.current.srcObject= stream)
        .catch(e=>alert(e.message))
    }

    const stopVideo= () => {
        videoRef.current.srcObject.getTracks().forEach(track=>track.stop())
    }

    return(
        <div>
            <h1>리액트 웹캠</h1>

            {/* 웹캠이 촬영한 비디오를 재생할 요소. / src속성에 적용할 비디오데이터를 설정했을때 바로 재생되게 하려면 무조건 autoplay속성이 있어야만 함 */}
            <video autoPlay ref={videoRef} style={{width:'100%',maxWidth:'600px', border:'solid', backgroundColor:'black', borderRadius:18}}></video>
            <br />
            <button onClick={startVideo}>시작</button>
            &nbsp;
            <button onClick={stopVideo}>정지</button>
        </div>
    )
}
export default Home