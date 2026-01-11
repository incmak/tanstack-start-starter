export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

export interface Toast {
	id: string;
	title: string;
	description?: string;
	variant: ToastVariant;
	duration?: number;
}

export interface ToastContextValue {
	toasts: Toast[];
	addToast: (toast: Omit<Toast, "id">) => string;
	removeToast: (id: string) => void;
	clearToasts: () => void;
}
