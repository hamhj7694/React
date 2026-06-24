import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// 처음 프로젝트 폴더 만드는 방법
// npm create vite@latest 제목

// 처음 만들 때 자동 실행되지만
// 만약 종료된 이후 다시 실행하려면?
// 해당 작업폴더에 cd 가서 npm run dev 명령어로 실행
// npm run dev -- --host : 같은 네트워크의 다른 컴퓨터에서 접속 가능

// 배포 해보기
// 프로젝트 파일들을 순수 html/css/js 형태로 만들어주는 명령어 실행.
// npm run build
// 정상적으로 수행되면.. 프로젝트 폴더에 dist 라는 이름의 폴더가 새로 생김!
// 그 dist 폴더 안 파일과 폴더들을 서버에 업로드하면 됨

// [주의!]
// 호스팅할때 index.html의 위치가..root폴더(dothome에서는 html폴더)가 아니고
// dothome.co.kr/vite 처럼 서브경로가 있다면 페이지가 렌더링 되지 않음.

// 서브경로를 vite.config.js 문서에 등록해야 함.

