module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  plugins: ["@typescript-eslint", "import"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  root: true,
  env: {
    node: true,
    jest: true
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/order": [
      "warn",
      {
        "alphabetize": {
          "caseInsensitive": true,
          "order": "asc"
        },
        "newlines-between": "always"
      }
    ]
  }
};
