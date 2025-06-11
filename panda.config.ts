import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			recipes: {
				button: {
					className: "button",
					description: "Button styles",
					base: {
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						whiteSpace: "nowrap",
						borderRadius: "md",
						fontWeight: "semibold",
						cursor: "pointer",
						transition: "all 0.2s",
						_disabled: {
							cursor: "not-allowed",
							opacity: 0.5,
						},
					},
					variants: {
						variant: {
							solid: {
								bg: "blue.500",
								color: "white",
								_hover: { bg: "blue.600" },
								_active: { bg: "blue.700" },
							},
							outline: {
								border: "1px solid",
								borderColor: "blue.500",
								color: "blue.500",
								_hover: { bg: "blue.50" },
								_active: { bg: "blue.100" },
							},
							ghost: {
								color: "blue.500",
								_hover: { bg: "blue.50" },
								_active: { bg: "blue.100" },
							},
						},
						size: {
							sm: { px: "3", py: "2", fontSize: "sm" },
							md: { px: "4", py: "2", fontSize: "md" },
							lg: { px: "5", py: "3", fontSize: "lg" },
						},
					},
					defaultVariants: {
						variant: "solid",
						size: "md",
					},
				},
				text: {
					className: "text",
					description: "Text styles",
					base: {
						margin: 0,
						lineHeight: "normal",
						minWidth: 0,
						fontWeight: "normal",
					},
					variants: {
						size: {
							xs: { fontSize: "xs" },
							sm: { fontSize: "sm" },
							md: { fontSize: "md" },
							lg: { fontSize: "lg" },
							xl: { fontSize: "xl" },
							"2xl": { fontSize: "2xl" },
							"3xl": { fontSize: "3xl" },
						},
						weight: {
							normal: { fontWeight: "normal" },
							medium: { fontWeight: "medium" },
							semibold: { fontWeight: "semibold" },
							bold: { fontWeight: "bold" },
						},
						align: {
							left: { textAlign: "left" },
							center: { textAlign: "center" },
							right: { textAlign: "right" },
						},
						transform: {
							uppercase: { textTransform: "uppercase" },
							lowercase: { textTransform: "lowercase" },
							capitalize: { textTransform: "capitalize" },
						},
					},
					defaultVariants: {
						size: "md",
						weight: "normal",
						align: "left",
					},
				},
				heading: {
					className: "heading",
					description: "Heading styles",
					base: {
						lineHeight: "1.2",
						fontWeight: "bold",
						letterSpacing: "-0.02em",
					},
					jsx: ["h1", "h2", "h3", "h4", "h5", "h6"],
					variants: {
						level: {
							h1: {
								fontSize: "4xl",
								fontWeight: "extrabold",
							},
							h2: {
								fontSize: "3xl",
								fontWeight: "bold",
							},
							h3: {
								fontSize: "2xl",
								fontWeight: "semibold",
							},
							h4: {
								fontSize: "xl",
								fontWeight: "semibold",
							},
							h5: {
								fontSize: "lg",
								fontWeight: "medium",
							},
							h6: {
								fontSize: "md",
								fontWeight: "medium",
							},
						},
						align: {
							left: { textAlign: "left" },
							center: { textAlign: "center" },
							right: { textAlign: "right" },
						},
					},
					defaultVariants: {
						align: "left",
					},
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",

	jsxFramework: "react",
});
