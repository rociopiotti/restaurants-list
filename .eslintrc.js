module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/prettier',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
	rules: {
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true,
			},
		],
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.tsx'],
			},
		],
		'react/button-has-type': ['off'],
		'import/extensions': ['off'],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/prefer-default-export': 'off',
		'react/prop-types': 'off',
		'prettier/prettier': `warn`,
		'@typescript-eslint/no-unused-vars': ['warn'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'import/no-unresolved': ['off'],
		'react/function-component-definition': [2, { namedComponents: ['arrow-function', 'function-expression'] }],
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src', '../core'],
				extensions: ['.ts', '.tsx', 'js', 'jsx'],
			},
		},
	},
};
