import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import type { UserConfig } from 'vite';
import dotenv from 'dotenv'
import * as process from "process";
import * as path from "path";

dotenv.config({
    path: path.join(__dirname, process.env.FILE_ENV as string)
})
console.log(process.env.FILE_ENV)
export default (): UserConfig => {
    return {
        server: {
            port: Number(process.env.VITE_PORT),
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
