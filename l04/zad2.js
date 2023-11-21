
dad = { surname: "Wolf" }
kid = { name: "Nemo" }
Object.setPrototypeOf(kid, dad)
console.log("is name a property of kid?", Object.hasOwn(kid, "name"))
console.log("is surname a property of kid?", Object.hasOwn(kid, "surname"))
const my_hasOwn = (o, k) => {
  let desc = Object.getPrototypeOf(o)
  return (typeof desc[k]) === "undefined"
}
console.log("is name a property of kid?", my_hasOwn(kid, "name"))
console.log("is surname a property of kid?", my_hasOwn(kid, "surname"))

function enumKeys(o, onlyBase) {
  console.log("enumerating over", o)
  for (let key in o) {
    if (typeof onlyBase === "undefined" || Object.hasOwn(o, key)) {
      console.log(key, ":", o[key])
    }
  }
}
enumKeys(kid)
console.log("done enumerating all")
enumKeys(kid, true)
console.log("done enumerating base")
Object.getOwnPropertyNames(kid).forEach(e => console.log(e, ":", kid[e]))
