/** @type {import('jest').Config} */
module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'jsdom',
   roots: ['<rootDir>/../../src'],
   setupFilesAfterEnv: ['<rootDir>/../../jest.setup.ts'],

   moduleNameMapper: {
      '\\.(scss|css)$': 'identity-obj-proxy',
      '^app/(.*)$': '<rootDir>/src/app/$1',
      '^entities/(.*)$': '<rootDir>/src/entities/$1',
      '^features/(.*)$': '<rootDir>/src/features/$1',
      '^shared/(.*)$': '<rootDir>/src/shared/$1',
      '^widgets/(.*)$': '<rootDir>/src/widgets/$1',
      '^pages/(.*)$': '<rootDir>/src/pages/$1',
   },
   transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
   },
   collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.{ts,tsx}'],
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
   clearMocks: true,
};
