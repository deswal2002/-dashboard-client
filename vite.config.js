import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    replace({
      __API_URL__: JSON.stringify(process.env.VITE_API_URL || 'https://dashboard-server-xijo.onrender.com/api/showALLFile'),
    }),
  ],
})
