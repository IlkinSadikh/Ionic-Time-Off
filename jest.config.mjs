/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/tests'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],

  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true, tsconfig: '<rootDir>/tsconfig.json' }],
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  // allow transforming Ionic *and* Stencil packages
  transformIgnorePatterns: [
    '/node_modules/(?!(?:@ionic/react|@ionic/core|ionicons|@stencil/core)/)'
  ],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: ['**/?(*.)+(test).(ts|tsx)'],
  verbose: false,
};
