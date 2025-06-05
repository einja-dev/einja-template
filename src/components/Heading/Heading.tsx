import { heading } from "@/styled-system/recipes";
import type { HeadingVariantProps } from "@/styled-system/recipes";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Props = HeadingVariantProps &
	Omit<ComponentPropsWithoutRef<HeadingLevel>, keyof HeadingVariantProps>;

export const Heading = forwardRef<HTMLHeadingElement, Props>(
	({ level, align, className, ...props }, ref) => {
		const headingClasses = className ? `${heading({ level, align })} ${className}` : heading({ level, align });

		switch (level) {
			case "h1":
				return (
					<h1
						ref={ref}
						className={headingClasses}
						{...props}
					/>
				);
			case "h2":
				return (
					<h2
						ref={ref}
						className={headingClasses}
						{...props}
					/>
				);
			case "h3":
				return (
					<h3
						ref={ref}
						className={headingClasses}
						{...props}
					/>
				);
			case "h4":
				return (
					<h4
						ref={ref}
						className={headingClasses}
						{...props}
					/>
				);
			case "h5":
				return (
					<h5
						ref={ref}
						className={headingClasses}
						{...props}
					/>
				);
			case "h6":
				return (
					<h6
						ref={ref}
						className={headingClasses}
						{...props}
					/>
				);
		}
	},
);

Heading.displayName = "Heading";
