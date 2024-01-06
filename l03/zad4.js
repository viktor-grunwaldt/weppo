// node >=5.0.0
const sum = (...args) =>
  args.reduce((acc, x) => acc + x)


// era kamienia łupanego
function sum_old() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum;
}
