import { useEffect } from "react"

function KaoMap(props){

    // 아래 div가 그려진 후 자동으로 그려지게 하는 HOOK
    let map=undefined
    useEffect(()=>{
        // 지도를 불러오는 코드 작성
        if(map==undefined){
            const container= document.getElementById('map')

            // 지도 표시할 때 위치, 줌 레벨 등 옵션 객체 설정
            const options= {
                center: new window.kakao.maps.LatLng(props.position.lat, props.position.lng),
                level: 3, //지도의 레벨
            }

            // npm install로 설치한게 아니라서, 이 jsx는 import로 가져올 수 없고... kakao 클래스를 인식 못함!
            // index.html에 <script> 외부 스크립트로 추가한 라이브러리
            // BOM 중 최상위객체 window의 멤버로 추가됨!
            map = new window.kakao.maps.Map(container, options)
        }
    },[])

    return(
        <div style={{border:"2px solid black", margin:8}}>
            {/* 지도 표시되는 영역 사이즈 필수 */}
            <div id="map" style={{width:'100%', height:'400px'}}></div>
        </div>
    )
}
export default KaoMap