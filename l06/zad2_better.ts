
function fib(n: number): number {
  if (n < 0) {
    return NaN
  }
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}



function memoize<T, S>(fn: (t: T) => S): (t: T) => S {
  let cache: { [key: string]: S } = {}
  return function(arg: T): S {
    let n = JSON.stringify(arg)
    if (n in cache) {
      console.log("cache hit", n)
      return cache[n]
    } else {
      var result = fn(arg);
      cache[n] = result;
      return result;
    }
  }
}

let myfib = memoize(fib)
console.log(myfib(30))
console.log(myfib(30))
