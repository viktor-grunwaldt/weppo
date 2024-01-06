let n = 100000;
const add = (a, b) => a + b;
const and = (a, b) => a && b;

int_to_digit_array = (x) =>
  (x).toString()
    .split('')
    .map((d) => parseInt(d, 10));

console.log(int_to_digit_array(420));
is_divisible_by_digits = (x) =>
  int_to_digit_array(x)
    .map((d) => x % d === 0) // js special sauce:  x % 0 === NaN
    .reduce(and, true);// however 0 != NaN so we gucci
is_divisible_by_sum = (x) =>
  x % (int_to_digit_array(x).reduce(add, 0)) === 0;

// don't do stupid stuff with this function,
// I haven't idiotproofed it (which includes me ofc)
function range(begin, end, step) {
  if (typeof step === "undefined") {
    var step = 1;
  }
  if (typeof end === "undefined") {
    end = begin;
    var begin = 0;
  }
  if (step === 0) {
    throw Error("step cannot be 0");
  }
  if (step < 0) {
    throw Error("this part is flipping array, plz fix me");
    // let temp = begin;
    // begin = end;
    // end = temp;
    // step = -step;
  }
  if (begin >= end) {
    throw Error("invalid range size");
  }
  let res = new Array(Math.floor((end - begin) / step));
  let i = 0;
  for (let val = begin; val < end; val += step, i++) {
    res[i] = val;
  }
  return res;
}
// tests
// console.log(range(0,10, 3));
// console.log(range(10));
// console.log(range(10, 0 ,-1));

let divisible = range(n)
  .filter((x) => is_divisible_by_digits(x) && is_divisible_by_sum(x));
console.log(divisible);