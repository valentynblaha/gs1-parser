import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.es2022,
        ...globals["shared-node-browser"],
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
  {
    files: ["test/**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.vitest,
      },
    },
    rules: {
      // Allow console.log in tests for debugging
      "no-console": "off",
      // Allow unused variables that are used for test organization
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
]);
