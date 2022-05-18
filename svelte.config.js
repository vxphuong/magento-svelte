//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';
import createAdapter from '@layer0/sveltekit/adapter.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: 'build' }),
		files: {
			serviceWorker: './src/service-worker.js'
		},

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},

	preprocess: sveltePreprocess({ postcss: true })
};

const _oldExport = config;
_oldExport.kit.adapter = createAdapter();
export default _oldExport;
