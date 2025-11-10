import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NodeHive Headless CMS',
			logo: {
				light: './src/assets/nodehive_logo_black.svg',
				dark: './src/assets/nodehive_logo_white.svg',
				replacesTitle: true,
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/NETNODEAG/nodehive-headless-cms-ce',
			},
			editLink: {
				baseUrl: 'https://github.com/NETNODEAG/docs.nodehive.com',
			},
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Developer Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Quickstart', link: '/overview/quickstart/' },
						{ label: 'NodeHive SaaS', link: '/overview/nodehive-saas/' },
						{ label: 'FAQ', link: '/overview/faq/' },
						{ label: 'Videos', link: '/overview/videos/' },
						{ label: 'About', link: '/overview/about/' },

					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Content Modelling', link: '/guides/content-modelling/' },
						{ label: 'API Reference', link: '/guides/intro-api/' },
						{ label: 'Demo frontend', link: '/guides/build-demo-frontend/' },
						{ label: 'Selfhost NodeHive', link: '/guides/selfhost-nodehive/' },
						{ label: 'Multilingual', link: '/guides/multilingual/' },
						{ label: 'Visual Editor', link: '/guides/visual-editor/' },
						{ label: 'Content Planner', link: '/guides/content-planner/' },
						{ label: 'Maintenance', link: '/guides/maintenance/' },
						{ label: 'Presets & Beekeper', link: '/guides/presets/' },
					],
				},
				{
					label: 'nodehive-js',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/reference/introduction/' },
						{ label: 'Routing', link: '/reference/routing/' },
						{ label: 'Fetching Nodes', link: '/reference/fetching-nodes/' },
						{ label: 'Fetching Menus', link: '/reference/fetching-menus/' },
						{ label: 'Fetching Fragments & Areas', link: '/reference/fetching-fragments-areas/' },
						{ label: 'Fetching translated paths', link: '/reference/fetching-translated-paths/' },
					],

				},
				{
					label: 'nodehive-js v2 (beta)',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/referencev2/introduction/' },					],

				},
			],
		}),
	],
});
