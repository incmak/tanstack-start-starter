import type { DefaultOptions } from "@tanstack/react-query";

export const queryConfig: DefaultOptions = {
	queries: {
		refetchOnWindowFocus: false,
		retry: false,
		staleTime: 1000 * 60, // 60 seconds
	},
};

export type ApiFnReturnType<
	// biome-ignore lint/suspicious/noExplicitAny: Generic constraint requires any
	FnType extends (...args: any) => Promise<any>,
> = Awaited<ReturnType<FnType>>;

export type MutationConfig<
	// biome-ignore lint/suspicious/noExplicitAny: Generic constraint requires any
	MutationFnType extends (...args: any) => Promise<any>,
> = {
	onMutate?: () => void;
	onSuccess?: (data: ApiFnReturnType<MutationFnType>) => void;
	onError?: (error: Error) => void;
	onSettled?: () => void;
};
