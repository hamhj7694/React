import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 함수를 마치 컴포넌트인 것처럼 태그문으로 사용! */}
    <Home></Home>
  </StrictMode>,
)
