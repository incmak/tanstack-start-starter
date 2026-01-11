import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useState,
} from "react";
import type { Toast, ToastContextValue } from "../types";
import { ToastContainer } from "./toast-container";

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const addToast = useCallback((toast: Omit<Toast, "id">) => {
		const id = crypto.randomUUID();
		const newToast: Toast = { ...toast, id };
		setToasts((prev) => [...prev, newToast]);

		// Auto-dismiss
		const duration = toast.duration ?? 5000;
		if (duration > 0) {
			setTimeout(() => {
				setToasts((prev) => prev.filter((t) => t.id !== id));
			}, duration);
		}

		return id;
	}, []);

	const removeToast = useCallback((id: string) => {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	}, []);

	const clearToasts = useCallback(() => {
		setToasts([]);
	}, []);

	return (
		<ToastContext.Provider
			value={{ toasts, addToast, removeToast, clearToasts }}
		>
			{children}
			<ToastContainer toasts={toasts} onDismiss={removeToast} />
		</ToastContext.Provider>
	);
}

export function useToastContext() {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToastContext must be used within ToastProvider");
	}
	return context;
}
