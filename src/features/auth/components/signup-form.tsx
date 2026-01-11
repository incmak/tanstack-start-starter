import { ArrowRight01Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "../hooks/use-auth";

export function SignupForm() {
	const router = useRouter();
	const { register } = useAuth();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		if (password.length < 8) {
			setError("Password must be at least 8 characters");
			return;
		}

		setIsLoading(true);

		try {
			const result = await register({ name, email, password });

			if (result.error) {
				setError(result.error.message || "Failed to create account");
			} else {
				router.navigate({ to: "/dashboard" });
			}
		} catch {
			setError("An error occurred. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
				{error && (
					<div className="p-3 sm:p-4 bg-destructive/10 border border-destructive/20 rounded-lg sm:rounded-xl text-destructive text-sm">
						{error}
					</div>
				)}
				<Input
					label="Full Name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="John Doe"
					required
					autoComplete="name"
				/>
				<Input
					label="Email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="you@example.com"
					required
					autoComplete="email"
				/>
				<Input
					label="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Create a password"
					required
					autoComplete="new-password"
				/>
				<Input
					label="Confirm Password"
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					placeholder="Confirm your password"
					required
					autoComplete="new-password"
				/>
				<Button
					type="submit"
					className="w-full group mt-6"
					isLoading={isLoading}
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
