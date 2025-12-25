// eslint.config.js
module.exports = [
  {
    files: ["src/scripts/**/*.js"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
    },
  },
];
