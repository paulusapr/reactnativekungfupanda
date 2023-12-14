module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/.*/**',
    '!**/*.config.*',
    '!**/coverage/**',
    '!next-env.d.ts',
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['html'],
};
