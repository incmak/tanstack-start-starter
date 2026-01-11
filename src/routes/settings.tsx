import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { SettingsPage } from "@/features/settings/components/settings-page";
import { generateMeta } from "@/lib/seo";

export const Route = createFileRoute("/settings")({
	head: () => ({ meta: generateMeta({ title: "Settings" }) }),
	component: Settings,
});

function Settings() {
	return (
		<DashboardLayout>
			<SettingsPage />
		</DashboardLayout>
	);
}
