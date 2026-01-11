import { createPortal } from "react-dom";
import type { Toast as ToastType } from "../types";
import { Toast } from "./toast";

interface ToastContainerProps {
	toasts: ToastType[];
	onDismiss: (id: string) => void;
}

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
	if (typeof document === "undefined") return null;

	return createPortal(
		<div
			className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
			aria-live="polite"
		>
			{toasts.map((toast) => (
				<div key={toast.id} className="pointer-events-auto">
					<Toast toast={toast} onDismiss={onDismiss} />
				</div>
			))}
		</div>,
		document.body,
	);
}
