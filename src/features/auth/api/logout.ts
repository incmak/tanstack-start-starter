import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { MutationConfig } from "@/lib/react-query";
import { signOut } from "./auth-client";

export const logoutUser = () => {
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
