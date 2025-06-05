import { button } from "@/styled-system/recipes";
import type { ButtonVariantProps } from "@/styled-system/recipes";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

type ButtonProps = ButtonVariantProps & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant, size, className, ...props }, ref) => {
		const buttonClasses = button({ variant, size });
		return (
			<button
				ref={ref}
				className={className ? `${buttonClasses} ${className}` : buttonClasses}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";
