/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2021,
        parser: "@typescript-eslint/parser",
    },
    globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly",
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "@typescript-eslint/no-inferrable-types": "off",
        "vue/attribute-hyphenation": "off",
        "vue/html-self-closing": "off",
        "vue/max-attributes-per-line": "off",
        "vue/multi-word-component-names": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/v-on-event-hyphenation": "off",
        "vue/html-indent": [
            "warn",
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: ["VAttribute"],
            },
        ],
        "id-length": ["error", { exceptions: ["t", "n", "i"] }],
        "quote-props": ["error", "as-needed"],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: ["camelCase"],
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"],
            },
            {
                selector: "parameter",
                format: ["camelCase"],
                leadingUnderscore: "allow",
            },
            {
                selector: "memberLike",
                modifiers: ["private"],
                format: ["camelCase"],
                leadingUnderscore: "require",
            },
            {
                selector: "typeLike",
                format: ["PascalCase"],
            },
            {
                selector: ["classMethod", "classProperty"],
                format: ["camelCase"],
            },
            {
                selector: "enumMember",
                format: ["PascalCase"],
            },
            {
                selector: "objectLiteralProperty",
                format: ["PascalCase", "camelCase", "UPPER_CASE", "snake_case"],
            },
        ],
    },
};
