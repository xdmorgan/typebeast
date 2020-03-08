# API Design & Config Structure

Webpack converts YML to JSON, merge with defaults, validate resulting JSON config, write Sass dynamically, compile Sass.

- Dynamically create the Sass files based on properties and fonts used across the config file settings
- This allows dynamic generation of mixins which can't be defined at runtime (also a solution to a current Skeletor limitation)

## CLI

```zsh
yarn typebeast
```

```zsh
yarn typebeast --help
```

```zsh
yarn typebeast --config "custom.yml" --verbose
```

## `typebeast.yml`

```yml
outputs: # optional, 1.0
  sass-mixins: true
  sass-tokens: true
  css-variables: true

prefix: # optional, 1.0
  typography: text
  custom-properties: typebeast
  sass-mixins: typebeast
  sass-tokens: typebeast

breakpoints: # required, mvp
  # [default] - no need
  large: 768px

typography: # required, mvp
  heading-1:
    default: # required
      font-size: 2rem
      line-height: 1.4
      font-weight: bold
    large: # optional
      # subset of override properties
      font-size: 2.5rem
      line-height: 1.2

wysiwyg: # optional, 1.0
  scope: "wysiwyg"
  elements:
    h1: heading-1
    h2: heading-2
    p: paragraph
    small: small-paragraph

custom-fonts: # optional (backlog)
  helvetica:
    url: path
    weight: str
    style: str
```
