import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repository name for GitHub Pages deployment.
// Set to '' if deploying to username.github.io root.
const REPO_NAME = 'portfolio'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : `/${REPO_NAME}/`,
}))
