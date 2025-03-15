interface RouteItem {
	title: string;
	href: string;
}

interface Route {
	title: string;
	href: string;
	items: RouteItem[];
}

export const ROUTES: Route[] = [
	{
		title: "Intro",
		href: "intro",
		items: [
			{title: "💡 Get Started", href: "/get-started"},
		],
	},
];

export const page_routes = ROUTES.map(({href, items}) => {
	return items.map((link) => {
		return {
			title: link.title,
			href: href + link.href,
		};
	});
}).flat();
