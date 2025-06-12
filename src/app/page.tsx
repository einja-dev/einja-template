import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main>
			<section>
				<Heading level="h2">Buttons</Heading>
				<div>
					<Button>Click me</Button>
					<Button variant="outline">Click me</Button>
					<Button variant="ghost">Click me</Button>
					<Button variant="outline">Click me</Button>
					<Button variant="ghost">Click me</Button>
				</div>
			</section>

			<section>
				<Heading level="h2">Text</Heading>
				<Text>This is a text component</Text>
			</section>
		</main>
	);
}
