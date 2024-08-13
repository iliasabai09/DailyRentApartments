export default {
	root: true,
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:prettier/recommended'
	],
	plugins: ['@typescript-eslint', 'import'],
	rules: {
	}
}
