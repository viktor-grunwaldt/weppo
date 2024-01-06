

function memoize<T extends string | number, U>(fn: (p: T) => U): (p: T) => U {
  const cache: Record<T, U> = {};
  return (p: T) => {
    if (p in cache) {
      return cache[p]
    }
    const res: T = fn(p)
    cache[p]
  }
}
