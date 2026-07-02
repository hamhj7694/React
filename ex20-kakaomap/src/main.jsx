import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'

// 카카오지도 라이브러리 적용방법 (외부 스크립트로 포함시켜야 하는 라이브러리. npm install 아님)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
