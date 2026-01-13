import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormFieldProps extends React.ComponentProps<"input"> {
	label: string;
	error?: string;
}

export function FormField({
	label,
	error,
	id,
	className,
	...props
}: FormFieldProps) {
	const fieldId = id || React.useId();

	return (
		<div className="space-y-1.5">
			<Label htmlFor={fieldId}>{label}</Label>
			<Input
				id={fieldId}
				aria-invalid={!!error}
				className={className}
				{...props}
			/>
			{error && <p className="text-sm text-destructive">{error}</p>}
		</div>
	);
}
