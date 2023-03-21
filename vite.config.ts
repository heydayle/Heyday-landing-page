import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import type { UserConfig } from 'vite';
// import type { NodeJS } from 'node/types';
// type ProcessEnv = NodeJS.ProcessEnv;
import dotenv from 'dotenv'
import * as process from "process";

export default (): UserConfig => {
    // const {
    //     VITE_BASE_API_URL
    // } = process.env as ProcessEnv;
    return {
        server: {
            port: 3400,
        },
        define: {
            'process.env': process.env
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
dotenv.config();
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
