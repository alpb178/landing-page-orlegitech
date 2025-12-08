const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^next-intl$": "<rootDir>/node_modules/next-intl",
    "^next-intl/(.*)$": "<rootDir>/node_modules/next-intl/$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(next-intl|use-intl)/)",
  ],
};

module.exports = createJestConfig(customJestConfig);





