# David Nuñez's Stylelint Config

This is my personal configuration for [stylelint](https://stylelint.io/) based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and extended with my own preferences.

## Install

Install Stylelint and this configuration as development dependencies:

```bash
npm install stylelint stylelint-config-dnunez24 --save-dev
```

## Extend

Create a `.stylelintrc` file in your project root and extend from `stylelint-config-dnunez24`. Override any of the default configuraiton settings as you please. Here's an example:

```json
{
  "extends": "stylelint-config-dnunez24",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null,
    "property-no-unknown": [ true, {
      "ignoreProperties": [
        "composes"
      ]
    }],
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## Lint

Make sure the `stylelint` executable is in your `PATH` and run it against your stylesheets to test compliance against the style preferences.

```bash
stylelint src/css/**/*.css
```

## Editor Config

TODO