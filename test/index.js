const test = require('tape')
const Trie = require('../')

test('trie', t => {
  const trie = Trie.create({})
  t.equal(Trie.size(trie), 0)

  trie.he = 'she'
  t.same(trie.he, ['she'])
  t.equal(Trie.size(trie), 1)

  trie.hello = 'world'
  t.same(trie.he, ['she', 'world'])
  t.equal(Trie.size(trie), 2)

  trie.hello = 'world1'
  t.same(trie.he, ['she', 'world1'])
  t.equal(Trie.size(trie), 2)

  trie.bob = 'cat'
  t.same(trie.bob, ['cat'])
  t.equal(Trie.size(trie), 3)
  t.same(trie.alice, [])

  delete trie.h
  t.same(trie.he, ['she', 'world1'])
  t.same(trie.hello, ['world1'])
  t.equal(Trie.size(trie), 3)

  delete trie.hello
  t.same(trie.he, ['she'])
  t.same(trie.hello, [])
  t.equal(Trie.size(trie), 2)

  t.end()
})
