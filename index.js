
const LEAF = Symbol('leaf in trie')

const createTrie = () => {
  const trie = Object.create(null)
  const flatten = parent => {
    const values = []
    if (!parent) return values

    const nodes = [parent]

    let node
    let value
    while (nodes.length) {
      node = nodes.shift()
      value = node[LEAF]
      if (value != null) values.push(value)

      for (let char in node) {
        nodes.push(node[char])
      }
    }

    return values
  }

  const getNodeForKey = (obj, key) => {
    let parent = obj
    for (let i = 0; i < key.length; i++) {
      let char = key[i]
      parent = parent[char]
      if (!parent) break
    }

    return parent
  }

  return new Proxy(trie, {
    get: (obj, key) => flatten(getNodeForKey(obj, key)),
    set: (obj, key, value) => {
      let parent = obj
      for (let i = 0; i < key.length; i++) {
        let char = key[i]
        if (parent[char]) {
          parent = parent[char]
        } else {
          parent = parent[char] = Object.create(null)
        }
      }

      parent[LEAF] = value
    },
    deleteProperty: (obj, key) => {
      const node = getNodeForKey(obj, key)
      if (node && node[LEAF] != null) {
        delete node[LEAF]
        return true
      }

      return false
    }
  })
}

exports.create = createTrie
