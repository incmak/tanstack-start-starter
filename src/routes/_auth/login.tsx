import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/features/auth/components/login-form";

export const Route = createFileRoute("/_auth/login")({
	component: LoginPage,
});

function LoginPage() {
	return (
		<div className="stagger-item animate-fade-in stagger-2 glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
			<div className="text-center mb-6">
				<h2 className="text-xl sm:text-2xl font-bold text-foreground">
					Welcome back
				</h2>
				<p className="mt-2 text-sm sm:text-base text-muted-foreground">
					Sign in to your account to continue
				</p>
			</div>
			<LoginForm />
		</div>
	);
}
