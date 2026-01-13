import type { Button as ButtonPrimitive } from "@base-ui/react/button";
import { Loading03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";
import { Button, type buttonVariants } from "@/components/ui/button";

type SubmitButtonProps = PropsWithChildren<
	ButtonPrimitive.Props &
		VariantProps<typeof buttonVariants> & {
			isLoading?: boolean;
		}
>;

export function SubmitButton({
	isLoading,
	disabled,
	children,
	...props
}: SubmitButtonProps) {
	return (
		<Button disabled={disabled || isLoading} {...props}>
			{isLoading && (
				<HugeiconsIcon
					icon={Loading03Icon}
					size={16}
					className="animate-spin"
				/>
			)}
			{children}
		</Button>
	);
}
