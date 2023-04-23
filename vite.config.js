import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
    return defineConfig({
        plugins: [react()],
        base: '/pastesnip-frontend/',
        server: {
            port: 3000,
        },
    });
}
