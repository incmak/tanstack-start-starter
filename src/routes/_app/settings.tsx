import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/features/settings/components/settings-page";
import { generateMeta } from "@/lib/seo";

export const Route = createFileRoute("/_app/settings")({
	head: () => ({ meta: generateMeta({ title: "Settings" }) }),
	component: SettingsPage,
});
