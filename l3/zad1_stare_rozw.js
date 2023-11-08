
// don't do stupid stuff with this function,
// I haven't idiotproofed it (which includes me ofc)
function range(begin, end, step) {
  let is_reverse_order = false;
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
    // throw Error("this part is flipping array, plz fix me");
    let temp = begin;
    begin = end;
    end = temp;
    step = -step;
    is_reverse_order = true;
  }
  if (begin >= end) {
    throw Error("invalid range size");
  }
  let res = new Array(Math.floor((end - begin) / step));
  let i = 0;
  if (is_reverse_order) {
    for (let val = begin; val < end; val += step, i++) {
      res[res.length - 1 - i] = val;
    }

  } else {
    for (let val = begin; val < end; val += step, i++) {
      res[i] = val;
    }

  }
  return res;
}

function fibIter(n) {
  let a = 0, b = 1;
  if (n < 0) {
    throw Error("invalid argument");
  }
  for (; n--;) {
    b = a + b;
    a = b - a;
  }
  return a;
}

function fibRec(n) {
  switch (n) {
    case 0:
    case 1:
      return n;
    default:
      return fibRec(n - 1) + fibRec(n - 2);
  }
}

wrap_timer = (label, fn) => {
  console.time(label);
  fn();
  console.timeEnd(label);
};

range(40).forEach((i) => {
  wrap_timer("fib nr " + i + ", iter", () => fibIter(i));
  wrap_timer("fib nr " + i + ", rec", () => fibRec(i));
})
// console.log(range(40).map(fibIter));
console.log(range(40).map(fibRec));