import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/features/profile/components/profile-page";
import { generateMeta } from "@/lib/seo";

export const Route = createFileRoute("/_app/profile")({
	head: () => ({ meta: generateMeta({ title: "Profile" }) }),
	component: ProfilePage,
});
