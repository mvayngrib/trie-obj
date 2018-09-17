# trie-obj

a fun to use implementation of the trie data structure

## Usage

```js
const Trie = require('trie-obj')
const trie = Trie.create()
// set key->value mappings as you would on a regular object
trie.hello = 'world'
trie.helicon = 'another world'
// lookup by prefix
console.log(trie.he)
// ['world', 'another world']

console.log(trie.hello)
// ['world']

// delete as you would from a regular object
delete trie.helicon
console.log(trie.he)
// ['world']
```
