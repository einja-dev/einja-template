import type { Meta, StoryObj } from "@storybook/react";
import GlobalError from "./global-error";

const meta = {
	title: "Pages/GlobalError",
	component: GlobalError,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof GlobalError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		error: new Error("システムエラーが発生しました"),
		reset: () => {
			console.log("Reset called");
		},
	},
};

export const WithLongErrorMessage: Story = {
	args: {
		error: new Error(
			"これは非常に長いシステムエラーメッセージです。開発モードでエラーメッセージがどのように表示されるかを確認するためのテストケースです。",
		),
		reset: () => {
			console.log("Reset called");
		},
	},
};
