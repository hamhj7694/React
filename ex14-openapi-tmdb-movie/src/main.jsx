import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageRouter from './Router/PageRouter'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageRouter></PageRouter>
  </StrictMode>,
)