import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import './src/Components/Firebase/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
