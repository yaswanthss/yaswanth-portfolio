import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base to '/yaswanth-portfolio/' if deploying to GitHub Pages
// Leave as '/' for Netlify or custom domain
export default defineConfig({
  plugins: [react()],
  base: '/',
})
