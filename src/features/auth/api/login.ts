import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { MutationConfig } from "@/lib/react-query";
import type { LoginCredentials } from "../types";
import { signIn } from "./auth-client";

export const loginWithCredentials = (credentials: LoginCredentials) => {
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
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["session"] });
			options?.onSuccess?.(data);
		},
		onError: options?.onError,
		onSettled: options?.onSettled,
	});
};
