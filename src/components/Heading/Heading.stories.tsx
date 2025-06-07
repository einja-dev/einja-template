import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta = {
	title: "Components/Heading",
	component: Heading,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
	args: {
		level: "h1",
		children: "Heading Level 1",
	},
};

export const H2: Story = {
	args: {
		level: "h2",
		children: "Heading Level 2",
	},
};

export const H3: Story = {
	args: {
		level: "h3",
		children: "Heading Level 3",
	},
};

export const H4: Story = {
	args: {
		level: "h4",
		children: "Heading Level 4",
	},
};

export const H5: Story = {
	args: {
		level: "h5",
		children: "Heading Level 5",
	},
};

export const H6: Story = {
	args: {
		level: "h6",
		children: "Heading Level 6",
	},
};

export const WithAlignment: Story = {
	args: {
		level: "h1",
		align: "center",
		children: "Centered Heading",
	},
};
