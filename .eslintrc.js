module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "vue-eslint-parser", // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  parserOptions: {
    "parser": "babel-eslint", // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
    "sourceType": "module", // Specifying a module sourcetype prevent eslint from marking import statements as errors
    "ecmaVersion": 2018,
  },
  extends: [
    "eslint:recommended", // Recommended rule set for plain javascript (https://eslint.org/)
    "plugin:vue/recommended", // Recommended rule set for vue (https://github.com/vuejs/eslint-plugin-vue)
  ],
  plugins: [
    "eslint-plugin-vue", // https://eslint.vuejs.org/
  ],
  rules: {
    // https://eslint.vuejs.org/rules/
    "vue/html-indent": ["error", 2],
    "vue/script-indent": ["error", 2, {
      "switchCase": 1,
      "ignores": []
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],

    // https://eslint.org/docs/rules/
    "semi": ["error", "never"],
    "quotes": ["error", "double"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "object-curly-newline": ["warn", {
      "multiline": true,
      "minProperties": 2,
    }],
    "object-property-newline": ["warn", { "allowAllPropertiesOnSameLine": false }],
    "object-curly-spacing": ["warn", "always"],
    "key-spacing": ["warn", {
      "beforeColon": false,
      "afterColon": true,
    }],
    "sort-imports": ["warn", { "ignoreCase": true, }],
    "no-console": "off",
    "no-debugger": (process.env.NODE_ENV === "production" ? "error" : "off"),

    // https://eslint.vuejs.org/rules/no-v-html.html
    "vue/no-v-html": "off",
  },
}