import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { LoginForm } from "@/features/auth/components/login-form";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
	return (
		<AuthLayout
			title="Welcome back"
			subtitle="Sign in to your account to continue"
		>
			<LoginForm />
		</AuthLayout>
	);
}
