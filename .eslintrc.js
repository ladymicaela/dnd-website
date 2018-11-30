module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'react-app'],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['@dynamicsignal/dysi'],
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        quotes: [
            'warn',
            'single',
            {
                avoidEscape: true,
            },
        ],
        'no-unused-vars': [
            'warn',
            {
                args: 'none',
            },
        ],
        '@dynamicsignal/dysi/if-else-braces': 'warn',
        'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
        'no-console': 'warn',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'warn',
        'react/prop-types': 'warn',
        'react/no-unused-prop-types': 'warn',
        'react/no-unescaped-entities': 'off',
        'import/first': 'off',
        'react-app/import/first': 'off',
        'jsx-a11y/href-no-hash': 'off',
        'react/jsx-equals-spacing': 'error',
        'no-restricted-globals': ['warn', 'location'],
        'react/jsx-indent-props': ['warn', 'tab'],
        // 'react/jsx-closing-bracket-location': 'warn',
        // 'comma-dangle': ['error', 'always-multiline'],
        'keyword-spacing': ['warn'],
        'no-empty': ['error', { allowEmptyCatch: true }],
    },
}