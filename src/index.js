const semver = require('semver');

const partition = (array, predicate) => array.reduce(
  ([left, right], item) => predicate(item) ? [[...left, item], right] : [left, [...right, item]],
  [[], []]
);

module.exports = (useragent) => {
  const parts = useragent.split(' ');
  const [engines, os] = partition(parts, (part) => part.includes('/'));

  const [platform, arch] = os;
  const parsedEngines = engines.map(
    (engine) => engine.split('/')
  ).reduce(
    (state, [name, version]) => ({ ...state, [name]: semver.coerce(version) }),
    {}
  );

  return {
    ...parsedEngines,
    platform,
    arch,
    raw: useragent
  };
};
