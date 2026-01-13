import { createFileRoute } from "@tanstack/react-router";
import { ComponentExample } from "@/components/demo/component-example";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return <ComponentExample />;
}
