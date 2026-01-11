import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "../api/login";

export function LoginForm() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = useLogin({
		onSuccess: (data) => {
			if (data.error) {
				return;
			}
			router.navigate({ to: "/dashboard" });
		},
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		login.mutate({ email, password });
	};

	const error = login.data?.error?.message || (login.error?.message ?? null);

	return (
		<>
			<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
				{error && (
					<div className="p-3 sm:p-4 bg-destructive/10 border border-destructive/20 rounded-lg sm:rounded-xl text-destructive text-sm">
						{error}
					</div>
				)}
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
					placeholder="Enter your password"
					required
					autoComplete="current-password"
				/>
				<Button
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
				</Button>
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
