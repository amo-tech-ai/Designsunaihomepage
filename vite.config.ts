
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'react-hook-form@7.55.0': 'react-hook-form',
        'figma:asset/bebfc543b5a4a848cfc04477ed1e523d0d7443a1.png': path.resolve(__dirname, './src/assets/bebfc543b5a4a848cfc04477ed1e523d0d7443a1.png'),
        'figma:asset/55bb65b8f1d5ae1e85b49eafd1f5e6b1e2d6dc6e.png': path.resolve(__dirname, './src/assets/55bb65b8f1d5ae1e85b49eafd1f5e6b1e2d6dc6e.png'),
        'figma:asset/3fe5efdbb1ca08a49fe60ad32328c8af6e37c23e.png': path.resolve(__dirname, './src/assets/3fe5efdbb1ca08a49fe60ad32328c8af6e37c23e.png'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });