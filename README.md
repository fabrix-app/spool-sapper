# spool-sapper

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

:package: Sapper Spool


## Install
```sh
$ npm install --save @fabrix/spool-sapper
```

## Configure

```js
// config/main.ts
import { SapperSpool } from '@fabrix/spool-sapper'
export const main = {
  spools: [
    // ... other spools
    SapperSpool
  ]
}
```

## Configuration

```
// config/sapper.ts
export const sapper = {
  allowLocalFilesAccess: true,
    printDelay: 100,
    paperSize: {
      format: 'Letter',
      height: '11in',
      width: '8.5in'
    },
    format: {
      quality: 100
    }
}
```

For more information about store (type and configuration) please see the sapper documentation.

## Usage

```js
  this.app.sapper.htmlToSAPPER('<h1>Hello World</h1>')
  .then(sapper => {
    // Do something with your SAPPER
  })
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-sapper.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-sapper
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-sapper/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-sapper/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-sapper.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-sapper
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-sapper.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-sapper/coverage

