import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
	args: {
		variant: "solid",
		children: "Solid Button",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline Button",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Ghost Button",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		children: "Small Button",
	},
};

export const Medium: Story = {
	args: {
		size: "md",
		children: "Medium Button",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		children: "Large Button",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Disabled Button",
	},
};
