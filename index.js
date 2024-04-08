const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  env: {
    jest: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "prettier",
    "standard",
    "@react-native",
    "eslint:recommended",
    "eslint-config-prettier",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-shadow": OFF,
    "no-duplicate-imports": ERROR,
    "react/jsx-boolean-value": ERROR,
    "jest/no-disabled-tests": WARNING,
    "@typescript-eslint/no-shadow": ERROR,
    "react-native/no-unused-styles": ERROR,
    "react/jsx-curly-brace-presence": ERROR,
    "react/jsx-max-depth": [ERROR, { max: 5 }],
    "react/jsx-pascal-case": [ERROR, { allowAllCaps: false }],
    "react/jsx-no-duplicate-props": [ERROR, { ignoreCase: true }],
    "react/jsx-one-expression-per-line": [ERROR, { allow: "single-child" }],
    "react/jsx-filename-extension": [ERROR, { extensions: [".js", ".tsx"] }],
    "react/jsx-handler-names": [
      ERROR,
      {
        eventHandlerPrefix: "on",
        eventHandlerPropPrefix: "on",
      },
    ],
    "import/order": [
      ERROR,
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            group: "external",
            position: "before",
            pattern: "@(react|react-native)",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react/jsx-sort-props": [
      ERROR,
      {
        ignoreCase: true,
        callbacksLast: true,
        reservedFirst: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
      },
    ],
    "react/jsx-wrap-multilines": [
      ERROR,
      {
        arrow: "parens",
        return: "parens",
        assignment: "parens",
        declaration: "parens",
        prop: "parens-new-line",
        logical: "parens-new-line",
        condition: "parens-new-line",
      },
    ],
  },
}
