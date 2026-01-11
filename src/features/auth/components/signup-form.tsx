import { ArrowRight01Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "@tanstack/react-form";
import { Link, useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRegister } from "../api/register";
import { signupSchema } from "../schemas";

export function SignupForm() {
	const router = useRouter();

	const register = useRegister({
		onSuccess: (data) => {
			if (data.error) {
				return;
			}
			router.navigate({ to: "/dashboard" });
		},
	});

	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validators: {
			onSubmit: signupSchema,
		},
		onSubmit: async ({ value }) => {
			register.mutate({
				name: value.name,
				email: value.email,
				password: value.password,
			});
		},
	});

	const serverError =
		register.data?.error?.message || (register.error?.message ?? null);

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
					<div className="p-3 sm:p-4 bg-destructive/10 border border-destructive/20 rounded-lg sm:rounded-xl text-destructive text-sm">
						{serverError}
					</div>
				)}
				<form.Field name="name">
					{(field) => (
						<Input
							label="Full Name"
							type="text"
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="John Doe"
							autoComplete="name"
							error={field.state.meta.errors[0]?.message}
						/>
					)}
				</form.Field>
				<form.Field name="email">
					{(field) => (
						<Input
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
						<Input
							label="Password"
							type="password"
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="Create a password"
							autoComplete="new-password"
							error={field.state.meta.errors[0]?.message}
						/>
					)}
				</form.Field>
				<form.Field name="confirmPassword">
					{(field) => (
						<Input
							label="Confirm Password"
							type="password"
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="Confirm your password"
							autoComplete="new-password"
							error={field.state.meta.errors[0]?.message}
						/>
					)}
				</form.Field>
				<Button
					type="submit"
					className="w-full group mt-6"
					isLoading={register.isPending}
				>
					<HugeiconsIcon icon={SparklesIcon} size={16} className="mr-2" />
					Create Account
					<HugeiconsIcon
						icon={ArrowRight01Icon}
						size={16}
						className="ml-2 transition-transform group-hover:translate-x-1"
					/>
				</Button>
			</form>
			<p className="mt-6 text-center text-sm sm:text-base text-muted-foreground">
				Already have an account?{" "}
				<Link
					to="/login"
					className="font-medium text-primary transition-colors hover:text-accent"
				>
					Sign in
				</Link>
			</p>
		</>
	);
}
