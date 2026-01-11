import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { requireAuth } from "@/features/auth/utils/auth-guards";

export const Route = createFileRoute("/_app")({
	beforeLoad: async ({ location }) => {
		// Block navigation if not authenticated
		// Redirects to /login?redirect=<current-path>
		await requireAuth({ currentPath: location.pathname });
	},
	component: AppLayout,
});

function AppLayout() {
	return (
		<DashboardLayout>
			<Outlet />
		</DashboardLayout>
	);
}
