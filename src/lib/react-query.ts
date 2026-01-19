import type { DefaultOptions } from "@tanstack/react-query";

export const queryConfig: DefaultOptions = {
	queries: {
		refetchOnWindowFocus: false,
		// Retry network errors up to 2 times with exponential backoff
		retry: (failureCount, error) => {
			// Don't retry on 4xx errors (client errors)
			if (error instanceof Error && "status" in error) {
				const status = (error as Error & { status: number }).status;
				if (status >= 400 && status < 500) return false;
			}
			// Retry network errors up to 2 times
			return failureCount < 2;
		},
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
