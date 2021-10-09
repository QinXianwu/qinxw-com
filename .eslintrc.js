module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "babel-eslint",
  },
  rules: {
    "prettier/prettier": "error",
    eqeqeq: ["error", "always"], // 要求使用 === 和 !==
    "no-empty-function": "error", // 禁止出现空函数
    "no-empty": "error", // 禁止空块语句
    "no-unused-vars": "error", // 禁止未使用过的变量
  },
};
