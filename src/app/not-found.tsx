import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4">
			<div className="text-center">
				<Heading level="h1" className="mb-4">
					404 - Page Not Found
				</Heading>
				<Text as="p" className="mb-8 text-gray-600">
					申し訳ありません。お探しのページが見つかりませんでした。
				</Text>
				<Link
					href="/"
					className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
				>
					トップページへ戻る
				</Link>
			</div>
		</div>
	);
}
