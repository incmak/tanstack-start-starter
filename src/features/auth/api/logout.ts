import { useMutation, useQueryClient } from "@tanstack/react-query";
import { env } from "@/config/env";
import type { MutationConfig } from "@/lib/react-query";
import { signOut } from "./auth-client";

export const logoutUser = async () => {
	// Mock mode - simulate logout
	if (env.AUTH_MODE === "mock") {
		await new Promise((resolve) => setTimeout(resolve, 300));

		// Clear mock auth cookie
		document.cookie = "mock_auth=; path=/; max-age=0";

		return { data: null, error: null };
	}

	// Production mode - call real backend
	return signOut();
};

type UseLogoutOptions = MutationConfig<typeof logoutUser>;

export const useLogout = (options?: UseLogoutOptions) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: logoutUser,
		onSuccess: (data) => {
			queryClient.clear();
			options?.onSuccess?.(data);
		},
		onError: options?.onError,
		onSettled: options?.onSettled,
	});
};
