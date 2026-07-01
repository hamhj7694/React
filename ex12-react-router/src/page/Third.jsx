import { useParams } from "react-router-dom"

function Third(){

    // 라우터에 등록된 서브경로 :no를 받기 위한 HOOK 기술 (useParams)
    const params= useParams()
    
    return(
        <div>
            <h2>Third</h2>
            <p>hello 전달 받은 번호 : <strong>{params.no}</strong></p>
        </div>
    )
}
export default Third