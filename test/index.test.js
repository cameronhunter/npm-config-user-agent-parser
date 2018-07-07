const parse = require('../src');

test("Parses yarn's process.env.npm_config_user_agent", () => {
  const actual = parse('yarn/1.7.0 npm/? node/v8.9.4 darwin x64');
  expect(actual).toMatchSnapshot();
});

test("Parses npm's process.env.npm_config_user_agent", () => {
  const actual = parse('npm/6.1.0 node/v8.9.4 darwin x64');
  expect(actual).toMatchSnapshot();
});

