import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter({
			edge: false,
			split: false,
			pages: 'build',
			assets: 'build'
		})
	}
};

export default config;
