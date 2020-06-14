# Typebeast

![npm version](https://img.shields.io/npm/v/typebeast)
![github tests](https://img.shields.io/github/workflow/status/xdmorgan/typebeast/Node.js%20CI)
![test coverage](https://img.shields.io/codecov/c/github/xdmorgan/typebeast)
[![Netlify Status](https://api.netlify.com/api/v1/badges/df7ba928-fa2e-42c0-8150-88bdc3ddb95e/deploy-status)](https://app.netlify.com/sites/typebeast-library/deploys)

A fully customizable library to generate resilient, utilitarian CSS type styles.

---

## Installation

```zsh
npm install typebeast --save-dev # using npm
yarn add typebeast --dev # using yarn
```

## CLI

```zsh
npm run typebeast # using npm
yarn typebeast # using yarn
```

### Options

- `--config`, `-C`: Custom config file path (default: `./typebeast.yml`)
- `--output`, `-O`: Custom output folder path (default: `./typebeast`)
- `--compression`: Sass output style (default: `compact`)
- `--no-sass`: Disable production of Sass core
- `--no-sourcemap`: Disable production of Sass sourcemaps
- `--json`: Produce a json version of the config

## Config format (yml)

See below for the full list of options or [see here](./typebeast.yml) for the full example used by [the demo site](https://typebeast-library.netlify.app)

### Minimum

The `format-version` is the only required property, it's used to ensure compatibility between the config file and the CLI.

```yml
# typebeast.yml

format-version: 1
```

### Options

```yml
# typebeast.yml

format-version: 1

breakpoints:
  [breakpoint-name]: [breakpoint-size]

settings:
  rem-base: [number, 16]
  calculate-rem-size: [boolean, false]
  include-utility-classes: [boolean, false]
  monospace-font-family: [string, null]
  wysiwyg-block-images: [boolean, false]

typography:
  [style-name]:
    default:
      family: [font-family]
      size: [font-size]
      line: [line-height]
      weight: [font-weight]
      letter: [letter-spacing]
    [breakpoint-name]:
      # define a subset of override properties
      # applied at the specified breakpoint
      size: [font-sze]

wysiwyg:
  scope: [class-name, 'wyswiyg']
  elements:
    [html-element]: [style-name]
  spacing:
    [group-name]:
      include: [selector(s)]
      breakpoints:
        default:
          block: [y-axis]
          block-start: [above]
          block-end: [below]
          inline: [x-axis]
          inline-start: [before]
          inline-end: [after]
        [breakpoint-name]:
          # define a subset of override properties
          # applied at the specified breakpoint
          block: [y-axis]

inline-elements:
  a:
    include: [selector(s)]
    settings:
      color: [color]
      hover: [color]
      active: [color]
      visited: [color]
      style: [text-decoration-style]
  code:
    include: [selector(s)]
    settings:
      color: [color]
      background: [color]
      radius: [size]
      size: [size]
      inset: [size]
  kbd:
    include: [selector(s)]
    settings:
      color: [color]
      border: [color]
      background: [color]
      radius: [size]
      size: [size]
      inset: [size]
```
