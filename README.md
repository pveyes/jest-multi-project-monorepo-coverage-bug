# jest-multi-project-monorepo-coverage-bug

Repro for wrong coverage reporting using Jest multi project & monorepo multi project

1. Install and run tests `yarn test`
2. In coverage reports `packages/a/index.js` is shown as 0%, even though it's imported by `packages/b/index.js`
3. If you remove `projects` field from `jest.config.js` the coverage works as expected