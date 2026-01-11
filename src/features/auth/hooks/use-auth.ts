import { signIn, signOut, signUp, useSession } from "../api/auth-client";
import type { LoginCredentials, SignupCredentials } from "../types";

export function useAuth() {
	const { data: session, isPending, error, refetch } = useSession();

	const login = async (credentials: LoginCredentials) => {
		const result = await signIn.email({
			email: credentials.email,
			password: credentials.password,
		});
		return result;
	};

	const register = async (credentials: SignupCredentials) => {
		const result = await signUp.email({
			email: credentials.email,
			password: credentials.password,
			name: credentials.name,
		});
		return result;
	};

	const logout = async () => {
		await signOut();
	};

	return {
		user: session?.user ?? null,
		session: session?.session ?? null,
		isAuthenticated: !!session?.user,
		isLoading: isPending,
		error,
		login,
		register,
		logout,
		refetch,
	};
}
