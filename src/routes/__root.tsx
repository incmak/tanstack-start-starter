import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ErrorBoundary } from "@/components/error-boundary";
import { ProgressBarProvider } from "@/features/navigation/components/progress-bar-provider";
import { ThemeProvider } from "@/features/theme/components/theme-provider";
import { ToastProvider } from "@/features/toast/components/toast-provider";
import { QueryProvider } from "@/lib/query-provider";
import { generateMeta } from "@/lib/seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: generateMeta(),
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", href: "/favicon.ico" },
			{ rel: "manifest", href: "/manifest.json" },
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<ErrorBoundary>
				<QueryProvider>
					<ThemeProvider>
						<ToastProvider>
							<ProgressBarProvider>
								<Outlet />
							</ProgressBarProvider>
						</ToastProvider>
					</ThemeProvider>
				</QueryProvider>
			</ErrorBoundary>
		</RootDocument>
	);
}

// Static script to prevent flash of wrong theme (FOUC)
// This is safe as it contains no user input - it's a hardcoded initialization script
const themeInitScript = `
(function() {
	try {
		const theme = localStorage.getItem('theme') || 'system';
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const isDark = theme === 'dark' || (theme === 'system' && prefersDark);
		document.documentElement.classList.toggle('dark', isDark);
	} catch (e) {}
})();
`;

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
				{/* Prevent flash of wrong theme - static script, no XSS risk */}
				<script
					dangerouslySetInnerHTML={{
						__html: themeInitScript,
					}}
				/>
			</head>
			<body className="bg-background text-foreground antialiased">
				{children}
				{import.meta.env.DEV && <TanStackRouterDevtools />}
				<Scripts />
			</body>
		</html>
	);
}
