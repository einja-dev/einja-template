module.exports = {
	// TypeScriptファイルの型チェック
	"**/*.{ts,tsx}": () => "npm run typecheck",

	// Biomeによるリントとフォーマット
	"**/*.{js,jsx,ts,tsx,json,md}": [
		"npx @biomejs/biome check --apply",
		"npx @biomejs/biome format --write",
	],
};
