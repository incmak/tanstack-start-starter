import { useMutation, useQueryClient } from "@tanstack/react-query";
import { env } from "@/config/env";
import type { MutationConfig } from "@/lib/react-query";
import type { LoginCredentials } from "../types";
import { signIn } from "./auth-client";

export const loginWithCredentials = async (credentials: LoginCredentials) => {
	// Mock mode - simulate successful login
	if (env.AUTH_MODE === "mock") {
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Set mock auth cookie (expires in 7 days)
		// biome-ignore lint/suspicious/noDocumentCookie: Mock mode requires direct cookie manipulation
		document.cookie = "mock_auth=true; path=/; max-age=604800; SameSite=Lax";

		return { data: null, error: null };
	}

	// Production mode - call real backend
	return signIn.email({
		email: credentials.email,
		password: credentials.password,
	});
};

type UseLoginOptions = MutationConfig<typeof loginWithCredentials>;

export const useLogin = (options?: UseLoginOptions) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: loginWithCredentials,
		onSuccess: async (data) => {
			// Await session refetch to ensure auth state is updated before navigation
			await queryClient.refetchQueries({ queryKey: ["session"] });
			options?.onSuccess?.(data);
		},
		onError: options?.onError,
		onSettled: options?.onSettled,
	});
};
