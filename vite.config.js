import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'src', replacement: '/src' },
      { find: 'store', replacement: '/src/store' },
      { find: 'slice', replacement: '/src/slice' },
      { find: 'components', replacement: '/src/components' },
    ],
  }
})
