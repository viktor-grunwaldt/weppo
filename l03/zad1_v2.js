function memoize(fn) {
  var cache = {};
  return function(n) {
    if (n in cache) {
      console.log("cache hit", n)
      return cache[n]
    } else {
      var result = fn(n);
      cache[n] = result;
      return result;
    }
  }
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
fibRec = memoize(fibRec)
// memoize_v2(fibRec)(30)
// memoize_v2(fibRec)(30)
console.log("done")
fibRec(30)
fibRec(30)
fibRec(29)
// myfib(29)


// myfib(30)
// myfib(29)
// function my_mem(n) {
//   let cache = {}
//   let f = (n) => {
//     if (n < 2) {
//       return n;
//     }
//     if (n in cache) {
//       return cache[n]
//     }
//     let res = f(n - 1) + f(n - 2)
//     cache[n] = res
//     return res
//   }
//   return f
// }
// function range(begin, end, step) {
//   let is_reverse_order = false;
//   if (typeof step === "undefined") {
//     var step = 1;
//   }
//   if (typeof end === "undefined") {
//     end = begin;
//     var begin = 0;
//   }
//   if (step === 0) {
//     throw Error("step cannot be 0");
//   }
//   if (step < 0) {
//     // throw Error("this part is flipping array, plz fix me");
//     let temp = begin;
//     begin = end;
//     end = temp;
//     step = -step;
//     is_reverse_order = true;
//   }
//   if (begin >= end) {
//     throw Error("invalid range size");
//   }
//   let res = new Array(Math.floor((end - begin) / step));
//   let i = 0;
//   if (is_reverse_order) {
//     for (let val = begin; val < end; val += step, i++) {
//       res[res.length - 1 - i] = val;
//     }

//   } else {
//     for (let val = begin; val < end; val += step, i++) {
//       res[i] = val;
//     }

//   }
//   return res;
// }

wrap_timer = (label, fn) => {
  console.time(label);
  fn();
  console.timeEnd(label);
};

// wrap_timer(memoized_fib(30))
// range(30, 32).forEach((i) => {
//   wrap_timer("fib nr " + i + ", memoized", () => memoized_fib(i));
//   wrap_timer("fib nr " + i + ", default", () => fibRec(i));
// })
