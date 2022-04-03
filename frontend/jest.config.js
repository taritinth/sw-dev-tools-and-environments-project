module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  setupFiles: ['<rootDir>/node_modules/core-js'],
  testEnvironment: 'jsdom',
  preset: '@nuxt/test-utils',
  testTimeout: 120000,
  reporters: [
    "default",
    [
      "<rootDir>/node_modules/jest-html-reporter",
      {
        pageTitle: "Unit Test Report",
        outputPath: "./coverage/report.html",
      },
    ],
  ]
}
