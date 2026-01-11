import { useToastContext } from "../components/toast-provider";
import type { ToastVariant } from "../types";

export function useToast() {
	const { addToast, removeToast, clearToasts } = useToastContext();

	return {
		toast: (
			title: string,
			options?: {
				description?: string;
				variant?: ToastVariant;
				duration?: number;
			},
		) => {
			return addToast({
				title,
				description: options?.description,
				variant: options?.variant ?? "default",
				duration: options?.duration,
			});
		},
		success: (title: string, description?: string) =>
			addToast({ title, description, variant: "success" }),
		error: (title: string, description?: string) =>
			addToast({ title, description, variant: "error" }),
		warning: (title: string, description?: string) =>
			addToast({ title, description, variant: "warning" }),
		info: (title: string, description?: string) =>
			addToast({ title, description, variant: "info" }),
		dismiss: removeToast,
		clearAll: clearToasts,
	};
}
