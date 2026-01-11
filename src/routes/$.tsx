import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
	component: NotFoundPage,
});

function NotFoundPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background">
			<h1 className="text-8xl font-bold tracking-tighter text-foreground/10">
				404
			</h1>
			<p className="mt-4 text-lg text-muted-foreground">
				This page doesn't exist.
			</p>
			<a
				href="/"
				className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				Go Home
			</a>
		</div>
	);
}
