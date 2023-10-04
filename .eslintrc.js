module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["warn", "single"],
        "indent": ["error", 4, { "MemberExpression": 0 }],
        "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
        "space-infix-ops": ["error"],
        "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
        "no-console": "warn",
        "strict": ["error", "global"],
    },
    "plugins": [ "editorconfig" ],
    "ignorePatterns": [
        '.eslintrc.js',
        'webpack.config.js',
        '**/vendor/*.js',
        'node_modules/',
        'app/',
        '**/node_modules/',
        '/**/node_modules/*',
    ],
}
