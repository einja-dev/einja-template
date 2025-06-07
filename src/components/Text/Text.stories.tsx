import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
	title: "Components/Text",
	component: Text,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Default Text",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		children: "Small Text",
	},
};

export const Medium: Story = {
	args: {
		size: "md",
		children: "Medium Text",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		children: "Large Text",
	},
};

export const Bold: Story = {
	args: {
		weight: "bold",
		children: "Bold Text",
	},
};

export const Centered: Story = {
	args: {
		align: "center",
		children: "Centered Text",
	},
};

export const Uppercase: Story = {
	args: {
		transform: "uppercase",
		children: "Uppercase Text",
	},
};

export const LongText: Story = {
	args: {
		children:
			"これは長いテキストのサンプルです。テキストコンポーネントが長い文章でどのように表示されるかを確認するためのものです。複数行にわたる場合の行間やレイアウトを確認できます。",
	},
};
