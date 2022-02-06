/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    "**/__tests__/**/*.ts",
    "!**/__tests__/e2e.test.ts",
    "!**/fixtures/**",
  ],
};
