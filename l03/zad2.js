
function myForEach(a, f) {
  for (let elem of a) {
    f(elem);
  }
}

function myMap(a, f) {
  let res = []
  for (let elem of a) {
    res.push(f(elem))
  }
  return res
}

function myFilter(a, f) {
  let res = []
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