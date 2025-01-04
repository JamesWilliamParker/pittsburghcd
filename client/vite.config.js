import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
    headers: {
      'Content-Security-Policy':
        "frame-src 'self' https://www.google.com/maps/embed/v1/ https://api.emailjs.com https://www.youtube.com/ https://www.youtube.com/embed/;",
    },
  },
});
