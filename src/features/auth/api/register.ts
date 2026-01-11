import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { MutationConfig } from "@/lib/react-query";
import type { SignupCredentials } from "../types";
import { signUp } from "./auth-client";

export const registerWithCredentials = (credentials: SignupCredentials) => {
	return signUp.email({
		email: credentials.email,
		password: credentials.password,
		name: credentials.name,
	});
};

type UseRegisterOptions = MutationConfig<typeof registerWithCredentials>;

export const useRegister = (options?: UseRegisterOptions) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: registerWithCredentials,
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["session"] });
			options?.onSuccess?.(data);
		},
		onError: options?.onError,
		onSettled: options?.onSettled,
	});
};
