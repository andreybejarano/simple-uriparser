const test = require('ava');
const uriParser = require('../index');

test('Uri parser', t => {
  const url = 'http://test.url.com/:id?lang=:lang&local=:local';
  const urlFinal = 'http://test.url.com/12345678?lang=es&local=Argentina';
  const params = {
    id: 12345678,
    lang: 'es',
    local: 'Argentina'
  };
  const urlParsed = uriParser.parser(url, params);
  t.deepEqual(urlFinal, urlParsed);
});
