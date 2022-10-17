module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/tools/'],
  reporters: ['default'],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 0,
      lines: 80,
      statements: 70,
    },
  },
  collectCoverage: true,
}
