import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "@/features/auth/components/signup-form";

export const Route = createFileRoute("/_auth/signup")({
	component: SignupPage,
});

function SignupPage() {
	return (
		<div className="stagger-item animate-fade-in stagger-2 glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
			<div className="text-center mb-6">
				<h2 className="text-xl sm:text-2xl font-bold text-foreground">
					Create an account
				</h2>
				<p className="mt-2 text-sm sm:text-base text-muted-foreground">
					Get started with your free trial
				</p>
			</div>
			<SignupForm />
		</div>
	);
}
