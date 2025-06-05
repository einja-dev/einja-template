import { text } from "@/styled-system/recipes";
import type { TextVariantProps } from "@/styled-system/recipes";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

type Props = TextVariantProps & ComponentPropsWithoutRef<"p">;

export const Text = forwardRef<HTMLParagraphElement, Props>(
	({ size, weight, align, transform, className, ...props }, ref) => {
		const textClasses = text({ size, weight, align, transform });

		return (
			<p
				ref={ref}
				className={className ? `${textClasses} ${className}` : textClasses}
				{...props}
			/>
		);
	},
);

Text.displayName = "Text";
