import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
} from "react";
import type { Toast, ToastContextValue } from "../types";
import { ToastContainer } from "./toast-container";

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
	const [toasts, setToasts] = useState<Toast[]>([]);
	const timeoutsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

	const addToast = useCallback((toast: Omit<Toast, "id">) => {
		const id = crypto.randomUUID();
		const newToast: Toast = { ...toast, id };
		setToasts((prev) => [...prev, newToast]);

		// Auto-dismiss with tracked timeout
		const duration = toast.duration ?? 5000;
		if (duration > 0) {
			const timeout = setTimeout(() => {
				timeoutsRef.current.delete(id);
				setToasts((prev) => prev.filter((t) => t.id !== id));
			}, duration);
			timeoutsRef.current.set(id, timeout);
		}

		return id;
	}, []);

	const removeToast = useCallback((id: string) => {
		// Clear timeout to prevent memory leak
		const timeout = timeoutsRef.current.get(id);
		if (timeout) {
			clearTimeout(timeout);
			timeoutsRef.current.delete(id);
		}
		setToasts((prev) => prev.filter((t) => t.id !== id));
	}, []);

	const clearToasts = useCallback(() => {
		// Clear all pending timeouts
		for (const timeout of timeoutsRef.current.values()) {
			clearTimeout(timeout);
		}
		timeoutsRef.current.clear();
		setToasts([]);
	}, []);

	// Memoize context value to prevent unnecessary re-renders
	const contextValue = useMemo(
		() => ({ toasts, addToast, removeToast, clearToasts }),
		[toasts, addToast, removeToast, clearToasts],
	);

	return (
		<ToastContext.Provider value={contextValue}>
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
