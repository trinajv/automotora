import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@images': path.resolve(__dirname, 'resources/images'), // 👈 alias para tus imágenes
            '@components': path.resolve(__dirname, 'resources/js/Components'), // opcional pero útil
            '@pages': path.resolve(__dirname, 'resources/js/Pages'), // opcional
        },
    },
});
