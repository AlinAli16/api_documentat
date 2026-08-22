// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	site: 'https://AlinAli16.github.io',
	base: '/api_documentat/',
	integrations: [
		starlight({
			title: 'My API Docs (demo)',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AlinAli16/api_documentat' }],
			plugins: [starlightOpenAPI([{ base: 'api', schema: './src/schemas/openapi.yaml' }]),],
			sidebar: [
				{
					label: 'My Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
						
				//...openAPISidebarGroups,

				// Создаем ОДИН общий родительский раздел
				{
					label: 'Документация API', // Название главного раздела в меню
					collapsed: false,          // Можно сделать true, чтобы он был свернут
					items: [
					// Все группы от плагина автоматически развернутся ВНУТРИ этого раздела
					{ label: 'Overview', slug: 'guides' }, 
					{ label: 'Auth', slug: 'guides/auth' }, 
					{ label: 'Quickstart', slug: 'guides/quickstart' }, 
						
					...openAPISidebarGroups,				
					
					],
				},				
			],
		}),
	],
});