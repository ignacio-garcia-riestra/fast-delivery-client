module.exports = {
	parser: '@babel/eslint-parser',
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		es2021: true,
		node: true,
		commonjs: true,
		'cypress/globals': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:cypress/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		requireConfigFile: false,
	},
	plugins: ['react', 'cypress'],
	rules: {
		indent: ['warn', 'tab'],
		'linebreak-style': ['warn', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['warn', 'never'],
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react/react-in-jsx-scope': 'off'
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
			rules: {
				indent: ['off', 'tab'],
				'@typescript-eslint/indent': ['error', 'tab'],
				'@typescript-eslint/quotes': ['error', 'single'],
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/no-explicit-any': 'off',
				'jsdoc/require-param-type': 'off',
				'jsdoc/require-returns-type': 'off',
			},
		},
	],
}
