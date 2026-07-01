import './Pagination.css'

function Pagination(props){
    
    // props의 멤버를 편히 쓰기 위해 구조분해할당
    const {total, number, page, setPage}= props
    
    // 전달 받은 정보(총 개수, 페이지 번호, 페이지당 번호)를 기반으로 만들 버튼의 개수를 계산
    const buttonCount= Math.ceil(total/number)

    // 위 버튼 개수만큼 요소를 가지는 배열만들기(값은 1,2,3,4...) -- 버튼에 표시될 페이지번호
    const numbers= Array(buttonCount).fill().map((v,i)=>i+1)

    return(
        <div className="page-button-container">
            {
                numbers.map((num,idx)=> <button key={idx} className='page-button' now={num==page?'now':null} onClick={()=>setPage(num)}>{num}</button>)
            }
        </div>
    )
}
export default Pagination