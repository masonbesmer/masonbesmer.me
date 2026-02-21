import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [
      ".next/**/*",
      "out/**/*",
      "node_modules/**/*",
      "*.log",
      ".env*",
    ],
  },
];

export default eslintConfig;
