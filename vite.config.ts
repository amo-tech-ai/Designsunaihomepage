
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'react-hook-form@7.55.0': 'react-hook-form',
        'figma:asset/f851eb49d9488a7fdcf4d178b6c2fbc8c2789f60.png': path.resolve(__dirname, './src/assets/f851eb49d9488a7fdcf4d178b6c2fbc8c2789f60.png'),
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