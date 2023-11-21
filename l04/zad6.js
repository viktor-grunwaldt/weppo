const print = console.log
const newNode = (val) => {
  return {
    left: {},
    value: val,
    right: {}
  }
}

class Tree {
  constructor(v, l, r) {
    this.left = l;
    this.value = v;
    this.right = r;
  }
}

Tree.prototype.changeDefaultIterator = (f) => {
  Tree.prototype[Symbol.iterator] = f
}
Tree.prototype[Symbol.iterator] = function*() {
  yield this.value
  if (this.left) yield* this.left;
  if (this.right) yield* this.right;
}

function* helper(root) {
  let queue = [root]
  while (queue.length > 0) {
    let cur = queue.shift()
    yield cur.value
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }
}

var example = new Tree(1,
  new Tree(2, new Tree(3)), new Tree(4));
console.log("inorder traversal")
for (let e of example) {
  console.log(e)
}
console.log("level-order traversal")
for (let e of helper(example)) {
  console.log(e)
}
