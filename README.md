# Simple URI parser
> Utility merged URL with parameter and return URL parsed

## Install
``` shell
$ npm install --save simple-uriparser
```

## Use
``` JavaScript
const uriParser = require('simple-uriparser');

const params = {
  id: '1a2b3c4d5e6f',
  lang: 'es'
}

const urlParsed = uriParser.parser('http://url.test.com/:id?lang=:lang', params);

```

## Developers run test
``` shell
$ npm run test
```
