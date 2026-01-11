import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { SignupForm } from "@/features/auth/components/signup-form";

export const Route = createFileRoute("/signup")({ component: SignupPage });

function SignupPage() {
	return (
		<AuthLayout
			title="Create an account"
			subtitle="Get started with your free trial"
		>
			<SignupForm />
		</AuthLayout>
	);
}
