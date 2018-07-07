# npm user agent parser

`npm` and `yarn` have a user agent string that contains version information.
This npm module parses the string into an object that is easily consumed on the
command-line or in JavaScript using the Node API.

An example of `npm`'s user agent on a Macbook Pro:

```
npm/6.1.0 node/v8.9.4 darwin x64
```

and an example of `yarn`'s on the same machine:

```
yarn/1.7.0 npm/? node/v8.9.4 darwin x64
```

## Installation

```bash
$ npm install npm-config-user-agent-parser
```

## Usage

```bash
$ npm-config-user-agent-parser 'yarn/1.7.0 npm/? node/v8.9.4 darwin x64'
yarn    1.7.0
node    8.9.4
platform        darwin
arch    x64
raw     yarn/1.7.0 npm/? node/v8.9.4 darwin x64
```

### Node API

```javascript
const parser = require('npm-config-user-agent-parser');

const parsed = parser(process.env.npm_config_user_agent);

console.log(parsed);
```

Outputs:

```json
{
  "yarn": {
    "raw": "1.7.0",
    "major": 1,
    "minor": 7,
    "patch": 0,
    "prerelease": [],
    "build": [],
    "version": "1.7.0"
  },
  "npm": null,
  "node": {
    "raw": "8.9.4",
    "major": 8,
    "minor": 9,
    "patch": 4,
    "prerelease": [],
    "build": [],
    "version": "8.9.4"
  },
  "platform": "darwin",
  "arch": "x64",
  "raw": "yarn/1.7.0 npm/? node/v8.9.4 darwin x64"
}
```
