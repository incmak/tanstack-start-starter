import type { DefaultOptions } from "@tanstack/react-query";

export const queryConfig: DefaultOptions = {
	queries: {
		refetchOnWindowFocus: false,
		retry: false,
		staleTime: 1000 * 60, // 60 seconds
	},
};

// biome-ignore lint/suspicious/noExplicitAny: Generic utility type requires any
export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
	Awaited<ReturnType<FnType>>;

// biome-ignore lint/suspicious/noExplicitAny: Generic utility type requires any
export type MutationConfig<
	MutationFnType extends (...args: any) => Promise<any>,
> = {
	onMutate?: () => void;
	onSuccess?: (data: ApiFnReturnType<MutationFnType>) => void;
	onError?: (error: Error) => void;
	onSettled?: () => void;
};
