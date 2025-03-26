import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
      fileName: 'web-components'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        paths: {
          react: 'https://esm.sh/react@18.2.0',
          'react-dom': 'https://esm.sh/react-dom@18.2.0'
        }
      }
    }
  }
}); 