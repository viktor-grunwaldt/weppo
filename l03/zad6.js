function createGenerator() {
  var _state_a = 0;
  var _state_b = 1;
  return {
    next: () => {
      let result = {
        value: _state_a,
        done: false
      }
      _state_b += _state_a;
      _state_a = _state_b - _state_a
      return result
    }
  }
}

let foo = () => {
  return {
    [Symbol.iterator]: createGenerator
  }
};

function* fib() {
  var _state_a = 0;
  var _state_b = 1;
  while (true) {
    yield _state_a
    _state_b += _state_a;
    _state_a = _state_b - _state_a

  }
}

function* take(it, end) {
  for (let elem of it) {
    if (end-- > 0) {
      yield elem
    }
    else {
      return
    }
  }
}

const print = console.log
// Generator.forEach = function(f) {
//   for (let i of this)
//     f(i)
// }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/forEach
// take(foo, 10).forEach(console.log)
let works = fib()
for (let i of take(works, 10))
  console.log(i)
print(works)
let bar = foo();
print(bar)
for (let i of take(foo(), 10))
  console.log(i)

