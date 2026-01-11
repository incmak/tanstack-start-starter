/**
 * Central application configuration
 * Edit this file to customize your app's branding, SEO, and features
 */

export interface AppConfig {
	// Branding
	name: string;
	shortName: string;
	description: string;
	tagline: string;

	// URLs
	url: string;

	// Social/Links
	social: {
		twitter?: string;
		github?: string;
		linkedin?: string;
	};

	// SEO defaults
	seo: {
		titleTemplate: string;
		defaultTitle: string;
		defaultDescription: string;
		defaultImage: string;
		twitterCard: "summary" | "summary_large_image";
		locale: string;
	};

	// Theme
	theme: {
		defaultMode: "light" | "dark" | "system";
	};

	// Feature toggles
	features: {
		enableAnalytics: boolean;
		enablePWA: boolean;
	};
}

export const appConfig: AppConfig = {
	// ============================================
	// BRANDING - Update these for your project
	// ============================================
	name: "Starter",
	shortName: "Starter",
	description: "A modern full-stack starter template",
	tagline: "Build fast, ship faster",

	// Production URL (used for OG meta tags)
	url: "https://yourapp.com",

	// Social links (optional)
	social: {
		twitter: "@yourhandle",
		github: "https://github.com/yourorg/yourrepo",
	},

	// ============================================
	// SEO - Defaults for meta tags
	// ============================================
	seo: {
		titleTemplate: "%s | Starter",
		defaultTitle: "Starter",
		defaultDescription: "A modern full-stack starter template",
		defaultImage: "/og-image.png",
		twitterCard: "summary_large_image",
		locale: "en_US",
	},

	// ============================================
	// THEME
	// ============================================
	theme: {
		defaultMode: "system", // "light" | "dark" | "system"
	},

	// ============================================
	// FEATURE FLAGS
	// ============================================
	features: {
		enableAnalytics: false,
		enablePWA: true,
	},
};
