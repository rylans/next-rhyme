# next-rhyme
Provides a rhyming word given the previous context. Powered by [Datamuse API](http://www.datamuse.com/api)

## Install

```
$ npm install next-rhyme
```

## Usage

```js
const nextRhyme = require('next-rhyme');
nextRhyme.of({prev: 'beans and rice', current: 'you on thin'}, (r) => console.log(r));
// ['ice', 'slice']
```

## License

MIT
