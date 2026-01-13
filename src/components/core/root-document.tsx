import { HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

/**
 * Static script to prevent flash of wrong theme (FOUC)
 * SECURITY: This is a hardcoded string constant with no user input.
 * It only reads from localStorage and toggles a CSS class - no XSS risk.
 */
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme')||'system';var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',t==='dark'||(t==='system'&&d));}catch(e){}})();`;

interface RootDocumentProps {
	children: React.ReactNode;
}

export function RootDocument({ children }: RootDocumentProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
				<script
					// Safe: THEME_INIT_SCRIPT is a static constant, not user input
					dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
				/>
			</head>
			<body className="bg-background text-foreground antialiased">
				{children}
				{import.meta.env.DEV && (
					<TanStackRouterDevtools position="bottom-right" />
				)}
				<Scripts />
			</body>
		</html>
	);
}
