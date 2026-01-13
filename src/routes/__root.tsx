import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ErrorBoundary } from "@/components/core/error-boundary";
import { RootDocument } from "@/components/core/root-document";
import { RootError } from "@/components/core/root-error";
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
	errorComponent: RootError,
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
