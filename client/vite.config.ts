
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cleanup from 'rollup-plugin-cleanup';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		cleanup({comments: 'istanbul'})
	]
})
