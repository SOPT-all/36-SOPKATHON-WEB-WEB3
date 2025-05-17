import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@apis', replacement: '/src/shared/apis' },
      { find: '@assets', replacement: '/src/shared/assets' },
      { find: '@components', replacement: '/src/shared/components' },
      { find: '@constants', replacement: '/src/shared/constants' },
      { find: '@hooks', replacement: '/src/shared/hooks' },
      { find: '@routes', replacement: '/src/shared/routes' },
      { find: '@styles', replacement: '/src/shared/styles' },
      { find: '@utils', replacement: '/src/shared/utils' },
    ],
  },
});
