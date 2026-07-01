import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <h2>Home</h2>

            {/* SPA = 싱글 페이지 어플리케이션 */}

            {/* second 컴포넌트 페이지로 이동 */}
            {/* 1) <a> 요소 사용 -- [권장 안함] */}
            <a href="/second">(비추천 방식)a앵커를 사용해 두번째 페이지로 이동</a>
            <br />
            {/* 이 방식도 페이지 전환되지만... SPA가 아님! 진짜로 페이지가 바뀜.. 깜빡! 거리기도 함 */}

            {/* 2) react-router-dom 라이브러리에서 제공하는 페이지전환용 링크요소
            (a요소와 비슷한데.. 실제 페이지가 바뀌는 것은 아님 = SPA가 유지됨! 깜빡임 없음) */}
            <Link to='/second'>(Link요소 사용) 확인 두번째 페이지로 이동</Link>
            <br />

            {/* 3) 페이지 전환할 때 현재 페이지를 history에서 제거 replace() */}
            <Link to='/second' replace={true}>페이지 이동하면서 기존 페이지가 닫김(히스토리 삭제, 뒤로가기 안됨)</Link>
        
            {/* 4) 페이지 전환할 때.. 서브경로를 이용하여 데이터를 전달 [예: blog/10, blog/2] */}
            <p>
                <Link to='/third/1'>(서브경로) 세번째 페이지로 이동 - 특정 번호 데이터 전달</Link>
            </p>
            <p>
                <Link to='/third/2'>(서브경로) 세번째 페이지로 이동 - 특정 번호 데이터 전달</Link>
            </p>
            <p>
                <Link to='/third/3'>(서브경로) 세번째 페이지로 이동 - 특정 번호 데이터 전달</Link>
            </p>
            
            <hr />

            {/* 버튼 클릭 시 페이지 이동 */}
            <p>
                <Link to='/intro'>버튼 클릭으로 페이지 이동 연습 페이지로 이동</Link>
            </p>

            
        </div>
    )
}
export default Home