import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
    if (command === 'build') {
        return {
            plugins: [
                laravel({
                    input: 'resources/js/app.jsx',
                    refresh: true,
                }),
                react(),
            ],
            resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'], 
            },
            build: {
                outDir: 'public_html/build', 
                assetsDir: 'assets',
            },
        };
    } else {
        return {
            plugins: [
                laravel({
                    input: 'resources/js/app.jsx',
                    refresh: true,
                }),
                react(),
            ],
            server: {
                port: 3000,
            },
        };
    }
});
