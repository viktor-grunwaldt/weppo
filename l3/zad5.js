function createGenerator() {
  let _state = 0;
  return {
    next: function() {
      return {
        value: _state,
        done: _state++ >= 10
      }
    }
  }
}

let foo = {
  [Symbol.iterator]: createGenerator
};
console.log("iterating foo")
for (let f of foo)
  console.log(f)

const myGen
  = (end) =>
    () => {
      let _state = 0
      return {
        next: () => { return { value: _state, done: _state++ >= end } }
      };
    }

const myGenWrap =
  (...args) => { return { [Symbol.iterator]: myGen(...args) } }

let foo1 = myGenWrap(10)
let foo2 = myGenWrap(5)
console.log("iterating foo1")

for (let i of foo1)
  console.log(i)
console.log("iterating foo2")

for (let i of foo2)
  console.log(i)