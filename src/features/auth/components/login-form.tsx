import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { useLogin } from "../api/login";
import { loginSchema } from "../schemas";
import { useLoginRedirect } from "../utils/login-redirect";
import { FormField } from "./form-field";
import { SubmitButton } from "./submit-button";

export function LoginForm() {
	const { handleRedirect } = useLoginRedirect();

	const login = useLogin({
		onSuccess: async (data) => {
			if (data.error) {
				return;
			}
			// Navigate to redirect URL or dashboard
			// Session query is already refetched in useLogin before this callback
			await handleRedirect();
		},
	});

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onSubmit: loginSchema,
		},
		onSubmit: async ({ value }) => {
			login.mutate(value);
		},
	});

	const serverError =
		login.data?.error?.message || (login.error?.message ?? null);

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="space-y-4 sm:space-y-5"
			>
				{serverError && (
					<div
						role="alert"
						aria-live="polite"
						className="p-3 sm:p-4 bg-destructive/10 border border-destructive/20 rounded-lg sm:rounded-xl text-destructive text-sm"
					>
						{serverError}
					</div>
				)}
				<form.Field name="email">
					{(field) => (
						<FormField
							label="Email"
							type="email"
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="you@example.com"
							autoComplete="email"
							error={field.state.meta.errors[0]?.message}
						/>
					)}
				</form.Field>
				<form.Field name="password">
					{(field) => (
						<FormField
							label="Password"
							type="password"
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="Enter your password"
							autoComplete="current-password"
							error={field.state.meta.errors[0]?.message}
						/>
					)}
				</form.Field>
				<SubmitButton
					type="submit"
					className="w-full group mt-6"
					isLoading={login.isPending}
				>
					Sign In
					<HugeiconsIcon
						icon={ArrowRight01Icon}
						size={16}
						className="ml-2 transition-transform group-hover:translate-x-1"
					/>
				</SubmitButton>
			</form>
			<p className="mt-6 text-center text-sm sm:text-base text-muted-foreground">
				Don't have an account?{" "}
				<Link
					to="/signup"
					className="font-medium text-primary transition-colors hover:text-accent"
				>
					Sign up
				</Link>
			</p>
		</>
	);
}
