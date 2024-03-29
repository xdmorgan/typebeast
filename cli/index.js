#!/usr/bin/env node
'use strict'
const meow = require('meow')
const path = require('path')
const app = require('../src')

const cli = meow(
  `
    Usage
      $ typebeast
 
    Options
      --config, -C     Custom config file path (default: './typebeast.yml')
      --output, -O     Custom output folder path (default: './typebeast')
      --compression    Sass output style (default: compact)
      --no-sass        Disable production of Sass core
      --no-sourcemap   Disable production of Sass sourcemap
      --json           Produce a json version of the config
 
    Examples
      $ typebeast --config config.yml --output dist
      Specify an alternate path to config file (default: ./typebeast.yml)
`,
  {
    flags: {
      config: {
        type: 'string',
        alias: 'C',
        default: path.join(process.cwd(), 'typebeast.yml'),
      },
      output: {
        type: 'string',
        alias: 'O',
        default: path.join(process.cwd(), 'typebeast'),
      },
      compression: {
        type: 'string',
        default: 'compact',
      },
      sourcemap: {
        type: 'boolean',
        default: true,
      },
      sass: {
        type: 'boolean',
        default: true,
      },
      json: {
        type: 'boolean',
        default: false,
      },
    },
  }
)

app(cli.flags)
