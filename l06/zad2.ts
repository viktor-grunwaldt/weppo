
function fib(n: number): number {
  if (n < 0) {
    return NaN
  }
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

function memoize(fn: Function): Function {
  let cache: { [key: string]: any } = {}
  return function(...args: any): any {
    let n = JSON.stringify(args)
    if (n in cache) {
      console.log("cache hit", n)
      return cache[n]
    } else {
      var result = fn(...args);
      cache[n] = result;
      return result;
    }
  }
}

let mfib = memoize(fib)
mfib(30)
mfib(30)
