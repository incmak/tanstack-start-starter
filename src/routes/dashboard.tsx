import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { DashboardPage } from "@/features/dashboard/components/dashboard-page";
import { generateMeta } from "@/lib/seo";

export const Route = createFileRoute("/dashboard")({
	head: () => ({ meta: generateMeta({ title: "Dashboard" }) }),
	component: Dashboard,
});

function Dashboard() {
	return (
		<DashboardLayout>
			<DashboardPage />
		</DashboardLayout>
	);
}
