# Webpack-Template

## Getting Started

1. Create a new repo on Github and select this repo as a template.
2. After cloning the main branch to your IDE, run these npm commands to start your development:

```
npm i -D webpack webpack-cli
npm i -D gh-pages // use this if you want to deploy to gh-pages
```

3. Add this script to `package.json` if you want to deploy your code to gh-pages in the future:

```
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

4. Start developing!

## Adding tests with jest

### UPDATE [DEC 2023]

Now you can support ES6 and ESM (ECMAScript modules) natively.

It's a prerequisite to set `"type": "module"` to your `package.json`.

Here are the steps:

Step 1: Prevent Jest from trying to transform ESM code to CommonJS, updating your Jest config (package.json example below) with:
```
"jest": {
    ...
    "transform": {}
}
```

Step 2: To be able to parse ES modules without an external transformer (e.g., babel), start Node with the `--experimental-vm-modules` flag. This can be done by changing how Jest is started by the npm "test" script (again inside `package.json`):

```
"scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```
And that's it. :)

You can even uninstall your transformer packages if you were using them just for the tests.

### Note before installing jest

You will only need to install the npm packages, as the package.json file, and the other configuration files are already built for you here!

If you are using typescript to build this project, you will need to add another npm script and modify the jest.config.js file. (See below)

Inside the terminal

```
npm i -D ts-jest
```

Add this line inside jest.config.js

```
preset: 'ts-jest'
```

### Installing npm packages

1. Run this npm script in the terminal:

```
npm i -D jest babel-jest @babel/preset-env identity-obj-proxy
```

> Optionally, if you are using typescript to build projects, you'll also want to install `ts-jest`

### Adding a script to run the tests

1. Add this script to `package.json`:

```
"scripts": {
  "test": "jest"
}
```

When you want to run the tests at any time, type `npm test` in the terminal.

### Create a babel config file

1. Create a new file named `babel.config.js` in the project's root directory.

2. Inside this newly created file, add:

```
module.exports = {
  presets: ['@babel/preset-env'],
};
```

### Create a jest config file

1. Create a new file named `jest.config.js` in the project's root directory.

2. Inside the newly created fpile, add:

```
module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
```

> Optionally, if you are using typescript to build projects, you'll also want to add this as well: `preset: 'ts-jest'`

### Exporting/Importing functions to test

1. At the bottom of the file that has your code, add (for example):

```
module.exports = {
  sum: sumFunctionName,
  multiply: multiplyFunctionName
}
```

2. Create a test file, something like `functions.test.js`.
3. Import the exported functions from your code file in your newly created test file:

```
const myFuncs = require('./index.js');

myFuncs.sum(a, b);
myFuncs.multiply(a, b);
```

## Deploying to gh-pages

1. Run the npm script `npm run deploy-gh-pages`
