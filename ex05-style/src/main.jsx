import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <Home/>

    {/* 위에서 import Home을 하면서 적용된 css가 아래에도 같이 적용 됨 */}
    {/* 실제 웹으로 배포될 때는 모든 .jsx 파일들이 하나의 .js로 만들어짐! 그래서 css 모두 병합됨! */}
    <h2>여긴 main.jsx의 h2입니다!</h2>
    <p className='aa'>이건 main.jsx의 p 인데요!</p>
    <p className='bb'>main.jsx의 p!</p>
  </div>
)
