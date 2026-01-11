import { useSession } from "../api/auth-client";

/**
 * Hook for accessing session state only.
 * For auth actions (login, register, logout), use the dedicated mutation hooks:
 * - useLogin from "@/features/auth/api/login"
 * - useRegister from "@/features/auth/api/register"
 * - useLogout from "@/features/auth/api/logout"
 */
export function useAuth() {
	const { data: session, isPending, error, refetch } = useSession();

	return {
		user: session?.user ?? null,
		session: session?.session ?? null,
		isAuthenticated: !!session?.user,
		isLoading: isPending,
		error,
		refetch,
	};
}
