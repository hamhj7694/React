import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // vite 웹앱을 호스팅/서브경로에 배포해야 한다면.. base 기본 설정 해야함 //빌드 다시 해야함
  base:'/vite/',
})
