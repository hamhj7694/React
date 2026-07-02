import KaoMap from "./components/KaoMap"

function Home(){
    return (
        <div>
            <h1>KAKAO MAP TEST</h1>

            {/* 지도를 보여주는 화면은 여러 페이지에서 보여줄 수 있으니, 컴포넌트로 만들기! */}
            <KaoMap position={{lat: 37.484170, lng: 126.929720}}></KaoMap>
        </div>
    )
}
export default Home