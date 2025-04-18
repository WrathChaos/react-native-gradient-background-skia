module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
    "react-native/react-native": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "react-native",
    "prettier",
    "react-hooks",
    "jest",
    "@typescript-eslint",
    "promise",
    "unused-imports",
    "import",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".d.ts",
          ".android.js",
          ".android.jsx",
          ".android.ts",
          ".android.tsx",
          ".ios.js",
          ".ios.jsx",
          ".ios.ts",
          ".ios.tsx",
          ".web.js",
          ".web.jsx",
          ".web.ts",
          ".web.tsx",
        ],
      },
    },
  },
  ignorePatterns: [
    "**/*/*.js",
    "*.js",
    "*.svg",
    "*.json",
    "*.png",
    "package.json",
    "package-lock.json",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "max-len": ["error", 120],
    "no-useless-catch": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "off",
    "react-native/no-color-literals": "off",
    "react-native/no-raw-text": "off",
    "import/extensions": [
      "error",
      "never",
      {
        svg: "always",
        model: "always",
        style: "always",
        png: "always",
        jpg: "always",
        json: "always",
        constant: "always",
      },
    ],
    "import/no-named-as-default-member": "error",
    "import/no-duplicates": "error",
    "import/no-useless-path-segments": "error",
    "import/no-cycle": "error",
    "import/prefer-default-export": "off",
    "import/no-anonymous-default-export": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default": "off",
    "import/no-unused-modules": "off",
    "import/no-deprecated": "off",
    "@typescript-eslint/indent": "off",
    "react-hooks/rules-of-hooks": "error",
    camelcase: "error",
    "prefer-destructuring": "error",
    "no-nested-ternary": "error",
  },
};
