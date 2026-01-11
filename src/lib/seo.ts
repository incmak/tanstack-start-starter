import { appConfig } from "@/config/app.config";

interface MetaOptions {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	type?: "website" | "article";
	noIndex?: boolean;
}

/**
 * Generate meta tags for a page with sensible defaults from app.config
 *
 * @example
 * // In a route file:
 * export const Route = createFileRoute("/about")({
 *   head: () => ({ meta: generateMeta({ title: "About Us" }) }),
 *   component: AboutPage,
 * });
 */
export function generateMeta(options: MetaOptions = {}) {
	const {
		title,
		description = appConfig.seo.defaultDescription,
		image = appConfig.seo.defaultImage,
		url = appConfig.url,
		type = "website",
		noIndex = false,
	} = options;

	const fullTitle = title
		? appConfig.seo.titleTemplate.replace("%s", title)
		: appConfig.seo.defaultTitle;

	const meta: Array<
		| { charSet: "utf-8" }
		| { name: string; content: string }
		| { property: string; content: string }
		| { title: string }
	> = [
		{ charSet: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ title: fullTitle },
		{ name: "description", content: description },

		// Open Graph
		{ property: "og:type", content: type },
		{ property: "og:title", content: fullTitle },
		{ property: "og:description", content: description },
		{ property: "og:image", content: image },
		{ property: "og:url", content: url },
		{ property: "og:locale", content: appConfig.seo.locale },
		{ property: "og:site_name", content: appConfig.name },

		// Twitter
		{ name: "twitter:card", content: appConfig.seo.twitterCard },
		{ name: "twitter:title", content: fullTitle },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
	];

	if (appConfig.social.twitter) {
		meta.push({ name: "twitter:site", content: appConfig.social.twitter });
	}

	if (noIndex) {
		meta.push({ name: "robots", content: "noindex, nofollow" });
	}

	return meta;
}
