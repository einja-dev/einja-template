import type { Meta, StoryObj } from "@storybook/react";
import ErrorPage from "./error";

const meta = {
	title: "Pages/Error",
	component: ErrorPage,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		error: new Error("テストエラーメッセージ"),
		reset: () => {
			console.log("Reset called");
		},
	},
};

export const WithLongErrorMessage: Story = {
	args: {
		error: new Error(
			"これは非常に長いエラーメッセージです。開発モードでエラーメッセージがどのように表示されるかを確認するためのテストケースです。",
		),
		reset: () => {
			console.log("Reset called");
		},
	},
};
