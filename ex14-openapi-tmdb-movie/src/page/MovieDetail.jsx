import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BeatLoader } from "react-spinners"

function MovieDetail(props){

    // 라우터의 서브경로로 전달된 :id의 값 가져오기
    const params=useParams()

    // 이 컴포넌트가 화면 보여지면 자동 발동 등록 HOOK
    useEffect(()=>{
        //TMDB 영화상세화면 open api  - url params로 전달받은 영화 id 정보를 요청파라미터로 지정. image와 출연자 정보도 같이 요청가능.
        const api_url= `https://api.themoviedb.org/3/movie/${params.id}?api_key=4704d6d917590acc0fdea33c3505baa7&language=ko-KR`
        fetch(api_url).then(res=>res.json()).then(json=>setMovie(json))
    },[]) //한번만 실행

    const [movie, setMovie]= useState()

    return(
        <div>
            <h2>영화 상세 정보</h2>
            <p>영화 고유 식별자 id : {params.id}</p>

            {/* 영화의 상세 정보들을 표시 */}
            {/* 서버에서 가져오는 시간이 걸려서.. 로딩중 데이터 표시 불가능 */}
            {
                movie
                ?
                <h3>영화 제목 : {movie.title}</h3>
                :
                <BeatLoader color="blue" style={{margin:10}}></BeatLoader>
            }
            
        </div>
    )
}
export default MovieDetail