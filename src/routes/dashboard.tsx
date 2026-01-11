import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
	component: DashboardPage,
});

function DashboardPage() {
	return (
		<div className="min-h-screen p-4 sm:p-6 md:p-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-2xl sm:text-3xl font-bold text-foreground">
					Dashboard
				</h1>
				<p className="mt-2 text-muted-foreground">Welcome to BriskTag</p>
			</div>
		</div>
	);
}
