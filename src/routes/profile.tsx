import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { ProfilePage } from "@/features/profile/components/profile-page";
import { generateMeta } from "@/lib/seo";

export const Route = createFileRoute("/profile")({
	head: () => ({ meta: generateMeta({ title: "Profile" }) }),
	component: Profile,
});

function Profile() {
	return (
		<DashboardLayout>
			<ProfilePage />
		</DashboardLayout>
	);
}
