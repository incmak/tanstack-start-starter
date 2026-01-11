import { Input as InputPrimitive } from "@base-ui/react/input";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./label";

interface InputProps extends React.ComponentProps<"input"> {
	label?: string;
}

function Input({ className, type, label, ...props }: InputProps) {
	return (
		<div className="space-y-1.5">
			{label && <Label>{label}</Label>}
			<InputPrimitive
				type={type}
				data-slot="input"
				className={cn(
					"bg-input/20 dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border px-3 py-2 text-sm transition-colors file:h-6 file:text-xs/relaxed file:font-medium focus-visible:ring-[2px] aria-invalid:ring-[2px] md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				{...props}
			/>
		</div>
	);
}

export { Input };
