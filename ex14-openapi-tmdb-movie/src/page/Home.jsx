import { useState, useEffect } from 'react'
import MovieList from '../components/MovieList'
import './Home.css'

function Home(){

    // TMDB 인기순 영화 open API url 주소
    const apiUrl='https://api.themoviedb.org/3/movie/popular?api_key=4704d6d917590acc0fdea33c3505baa7&language=ko-KR&page=1'

    // 영화 정보 리스트 저장할 배열 state 변수
    const [movies, setMovies] = useState(null)

    // [중요] 이 컴포넌트가 화면에 처음 랜더링 된 후 자동으로 발동하는 라이프사이클함수를 사용하는 HOOK 기술 -- useEffect
    // 랜더링이 된 후에 그려내는 함수
    useEffect(function(){
        // TMDB에서 유명한 영화 목록 데이터 불러오기
        // fetch(apiUrl).then(res=>res.text()).then(text=>alert(text)).catch(e=>e.msg)
        // 받아온 영화 리스트 json 형식을 분석할 JS객체로 받아서 movies라는 state 변수에 대입
        fetch(apiUrl).then(res=>res.json()).then(json=>setMovies(json.results)).catch(e=>e.message)
    },[])
    // 두번째 파라미터 배열 -- 특정 state 변수를 등록해 놓으면 그 값이 변경되었을 때 갱신
    // 빈 [] 배열을 사용하면.. 처음 한번만 발동함!
    // 빈 [] 배열이 없으면 state 변경 있을 때 마다 갱신됨..
    // [] 안에 변수 적으면, state 변수 변경 있을 때만 갱신됨..

    return(
        <div className="Root">
            <header>
                <h1>TMDB 영화정보 OPEN API 수업</h1>
            </header>
            
            <main>
                {/* 영화 리스트를 보여주는 컴포넌트 조각 배치 */}
                {/* useEffect사용해서 영화정보 데이터를 더 늦게 불러오고...
                그 전에 HTML이 그리면 movies 가 uall인 상태일 수 있기 때문에 */}
                {
                    // 조건 ? A : B --- 데이터가 있으면 참, 없으면 거짓
                    movies?
                    // fatch로 받아온 영화목록 데이터들을 컴포넌트에 속성으로 전달
                    <MovieList movies={movies}></MovieList>
                    :
                    <p>Loading</p>
                }
                
            </main>
        </div>
    )
}
export default Home