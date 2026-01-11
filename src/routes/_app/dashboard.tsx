import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/features/dashboard/components/dashboard-page";
import { generateMeta } from "@/lib/seo";

export const Route = createFileRoute("/_app/dashboard")({
	head: () => ({ meta: generateMeta({ title: "Dashboard" }) }),
	component: DashboardPage,
});
