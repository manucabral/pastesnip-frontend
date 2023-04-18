import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()))
    return defineConfig({
        plugins: [react()],
        base: `/${process.env.VITE_BASE_URL}/` || "pastesnip-frontend",
        server: {
            port: 3000,
        },
    });
}
