import { useRouter } from "@tanstack/react-router";
import NProgress from "nprogress";
import { useEffect } from "react";
import "../styles/nprogress.css";

// Configure NProgress
NProgress.configure({
	showSpinner: false,
	trickleSpeed: 200,
	minimum: 0.08,
});

/**
 * Provider that shows a top progress bar during route transitions.
 * Listens to TanStack Router events to start/stop the progress bar.
 */
export function ProgressBarProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();

	useEffect(() => {
		// Subscribe to router state changes
		const unsubscribe = router.subscribe("onBeforeLoad", () => {
			NProgress.start();
		});

		const unsubscribeLoad = router.subscribe("onLoad", () => {
			NProgress.done();
		});

		// Cleanup on unmount
		return () => {
			unsubscribe();
			unsubscribeLoad();
			NProgress.done();
		};
	}, [router]);

	return <>{children}</>;
}
