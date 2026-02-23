
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
        'figma:asset/bdd4b2a6154b073876bf90a578dce7ff8c5530a6.png': path.resolve(__dirname, './src/assets/bdd4b2a6154b073876bf90a578dce7ff8c5530a6.png'),
        'figma:asset/a177f00b99671ca3b2d8960d25930b39cb4acbef.png': path.resolve(__dirname, './src/assets/a177f00b99671ca3b2d8960d25930b39cb4acbef.png'),
        'figma:asset/7d34efc5eb721679fa59d6194067e85320188d1f.png': path.resolve(__dirname, './src/assets/7d34efc5eb721679fa59d6194067e85320188d1f.png'),
        'figma:asset/5c33adbf711e6606a4a3682023e0cea76034068a.png': path.resolve(__dirname, './src/assets/5c33adbf711e6606a4a3682023e0cea76034068a.png'),
        'figma:asset/55bb65b8f1d5ae1e85b49eafd1f5e6b1e2d6dc6e.png': path.resolve(__dirname, './src/assets/55bb65b8f1d5ae1e85b49eafd1f5e6b1e2d6dc6e.png'),
        'figma:asset/3fe5efdbb1ca08a49fe60ad32328c8af6e37c23e.png': path.resolve(__dirname, './src/assets/3fe5efdbb1ca08a49fe60ad32328c8af6e37c23e.png'),
        'figma:asset/28a0b8b27dea51fd1b082bd974341714b4d74b22.png': path.resolve(__dirname, './src/assets/28a0b8b27dea51fd1b082bd974341714b4d74b22.png'),
        'figma:asset/2700990878192c26a605233f9254557c2f6ba981.png': path.resolve(__dirname, './src/assets/2700990878192c26a605233f9254557c2f6ba981.png'),
        'figma:asset/1673767e1bd348faf57bdbdfcbf0b9740304165e.png': path.resolve(__dirname, './src/assets/1673767e1bd348faf57bdbdfcbf0b9740304165e.png'),
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