"use client";

import { Button } from "@/components/Button/Button";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";

type ErrorPageProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
	const handleHomeClick = () => {
		window.location.href = "/";
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4">
			<div className="text-center">
				<Heading level="h1" className="mb-4">
					エラーが発生しました
				</Heading>
				<Text as="p" className="mb-8 text-gray-600">
					申し訳ありません。予期せぬエラーが発生しました。
				</Text>
				<div className="flex gap-4 justify-center">
					<Button onClick={reset} variant="solid">
						もう一度試す
					</Button>
					<Button onClick={handleHomeClick} variant="outline">
						トップページへ戻る
					</Button>
				</div>
				{process.env.NODE_ENV === "development" && (
					<Text
						as="pre"
						className="mt-8 p-4 bg-gray-100 rounded-md text-left overflow-auto"
					>
						{error.message}
					</Text>
				)}
			</div>
		</div>
	);
}
