import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({

  logLevel: 'info',

  plugins: [reactRefresh()],
  server: {
    host: process.env.VITE_HOST || null,
    port: process.env.VITE_PORT || null,
    hmr: {
      clientPort: process.env.VITE_CLIENT_PORT || null
    },
    proxy: {
      '^/api': {
        target: 'http://avatares-devops-pj1-backend-svc.bootcamp-prj-1.svc.cluster.local',
        changeOrigin: true
      }
    }
  }
})
