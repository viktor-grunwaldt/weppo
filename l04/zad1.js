

const getLastProto = (o) => {
  let p = o
  do {
    o = p;
    p = Object.getPrototypeOf(o);
  } while (p);
  return o;
}

console.log(getLastProto("hello"))
console.log(getLastProto(getLastProto))
console.log(getLastProto(Object))

console.log(getLastProto(getLastProto) === getLastProto("hello"))
console.log(getLastProto(Object) === getLastProto("hello"))
