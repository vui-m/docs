module.exports = {
	title: 'vui-m',
	description: '基于 vuejs 2.x UI 框架',
	head: [
		['link', { rel: 'icon', href: `/favicon.ico` }],
	],
	serviceWorker: true,
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
		],
		sidebar: [
			['../zh-CN/badge', 'badge']
		]
	}
}