/**
 * @type {import('@jest/types').Config.GlobalConfig}
 */
module.exports = {
  projects: [
    {
      displayName: 'a',
      rootDir: '<rootDir>/packages/a',
    },
    {
      displayName: 'b',
      rootDir: '<rootDir>/packages/b',
    }
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
  ]
}