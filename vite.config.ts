import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import type { UserConfig } from 'vite';

export default (): UserConfig => {
    return {
        build: {
            target: 'es2015',
            lib: {
                entry: 'src/main.ts',
                formats: ['es']
            }
        },
        server: {
            port: 3400,
        },
        plugins: [
            vue(),
            WindiCSS()
        ],
        resolve: {
            alias: {
              '@': fileURLToPath(new URL('./src', import.meta.url))
            }
          }
    };
};

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     WindiCSS()
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })
