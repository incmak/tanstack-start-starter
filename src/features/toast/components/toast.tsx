import {
	Alert02Icon,
	AlertCircleIcon,
	Cancel01Icon,
	CheckmarkCircle02Icon,
	InformationCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import type { Toast as ToastType, ToastVariant } from "../types";

const variantConfig: Record<
	ToastVariant,
	{ icon: typeof CheckmarkCircle02Icon; className: string }
> = {
	default: {
		icon: InformationCircleIcon,
		className: "bg-card border-border",
	},
	success: {
		icon: CheckmarkCircle02Icon,
		className:
			"bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800",
	},
	error: {
		icon: AlertCircleIcon,
		className:
			"bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800",
	},
	warning: {
		icon: Alert02Icon,
		className:
			"bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800",
	},
	info: {
		icon: InformationCircleIcon,
		className:
			"bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800",
	},
};

const iconColors: Record<ToastVariant, string> = {
	default: "text-foreground",
	success: "text-green-600 dark:text-green-400",
	error: "text-red-600 dark:text-red-400",
	warning: "text-yellow-600 dark:text-yellow-400",
	info: "text-blue-600 dark:text-blue-400",
};

interface ToastProps {
	toast: ToastType;
	onDismiss: (id: string) => void;
}

export function Toast({ toast, onDismiss }: ToastProps) {
	const { icon, className } = variantConfig[toast.variant];

	return (
		<div
			className={cn(
				"flex items-start gap-3 p-4 rounded-xl border shadow-lg",
				"animate-in slide-in-from-right-full fade-in duration-300",
				className,
			)}
			role="alert"
		>
			<HugeiconsIcon
				icon={icon}
				size={20}
				className={cn("shrink-0 mt-0.5", iconColors[toast.variant])}
			/>
			<div className="flex-1 min-w-0">
				<p className="font-medium text-sm text-foreground">{toast.title}</p>
				{toast.description && (
					<p className="mt-1 text-sm text-muted-foreground">
						{toast.description}
					</p>
				)}
			</div>
			<button
				onClick={() => onDismiss(toast.id)}
				className="shrink-0 p-1 rounded-md hover:bg-muted transition-colors"
				aria-label="Dismiss"
				type="button"
			>
				<HugeiconsIcon
					icon={Cancel01Icon}
					size={16}
					className="text-muted-foreground"
				/>
			</button>
		</div>
	);
}
