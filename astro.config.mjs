import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NodeHive Headless CMS',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Developer Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/overview/introduction/' },
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
						{ label: 'Frontend starter', link: '/guides/build-frontend/' },
						{ label: 'Selfhost NodeHive', link: '/guides/selfhost-nodehive/' },
						{ label: 'Multilingual', link: '/guides/multilingual/' },
						{ label: 'Visual Editor', link: '/guides/visual-editor/' },
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
			],
		}),
	],
});
