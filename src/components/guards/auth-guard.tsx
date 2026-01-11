import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { ROUTES } from "@/config/constants";
import { useAuth } from "@/features/auth/hooks/use-auth";

interface AuthGuardProps {
	children: React.ReactNode;
	fallback?: React.ReactNode;
}

export function AuthGuard({ children, fallback }: AuthGuardProps) {
	const router = useRouter();
	const { isAuthenticated, isLoading } = useAuth();

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			router.navigate({ to: ROUTES.LOGIN });
		}
	}, [isAuthenticated, isLoading, router]);

	if (isLoading) {
		return fallback ?? <AuthLoadingSkeleton />;
	}

	if (!isAuthenticated) {
		return null;
	}

	return <>{children}</>;
}

function AuthLoadingSkeleton() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
		</div>
	);
}
