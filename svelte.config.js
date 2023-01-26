import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
//import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	//preprocess: vitePreprocess(),
	preprocess: Preprocess(),

	kit: {
		adapter: adapter(),

		//Hydrate the <div id="svelte">element in src/app.html
		target: '#svelte',
		vite: {
			server: {
				hmr: {
					clientPort: process.env.HMR_HOST ? 443: 3000,
					host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost"
				}
			}
		}
	}
};

export default config;
