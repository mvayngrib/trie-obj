const test = require('tape')
const Trie = require('../')

test('trie', t => {
  const trie = Trie.create({})

  trie.he = 'she'
  t.same(trie.he, ['she'])
  t.same(trie.hE, ['she'])

  trie.heLLo = 'world'
  t.same(trie.he, ['she', 'world'])
  t.same(trie.HELLo, ['world'])

  trie.hello = 'world1'
  t.same(trie.he, ['she', 'world1'])

  trie.bob = 'cat'
  t.same(trie.bob, ['cat'])
  t.same(trie.alice, [])

  delete trie.h
  t.same(trie.he, ['she', 'world1'])
  t.same(trie.hello, ['world1'])

  delete trie.hello
  t.same(trie.he, ['she'])
  t.same(trie.hello, [])

  t.end()
})
