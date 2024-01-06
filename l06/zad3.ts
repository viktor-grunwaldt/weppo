








function myForEach<T>(a: T[], f: (t: T) => void) {
  for (let elem of a) {
    f(elem);
  }
}

function myMap<T, S>(a: T[], f: (t: T) => S): S[] {
  let res: S[] = []
  for (let elem of a) {
    res.push(f(elem))
  }
  return res
}

function myFilter<T>(a: T[], f: (t: T) => boolean): T[] {
  let res: T[] = []
  for (let elem of a) {
    if (f(elem)) {
      res.push(elem)
    }
  }
  return res
}


var a = [1, 2, 3, 4];
myForEach(a, _ => { console.log(_); });
// [1,2,3,4]
console.log(myFilter(a, _ => _ < 3))
// [1,2]
console.log(myMap(a, _ => _ * 2))
// [2,4,6,8]
