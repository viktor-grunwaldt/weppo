/*
  Within the math function, return the value obtained from multiplying the
  second and third arguments and adding that result to the first argument.

  After that, inside the parentheses of console.log(), call the math()
  function with the number 53 as first argument, the number 61 as second and
  the number 67 as third argument.
*/

const math = (a, b, c) => a + b * c;
console.log(math(53, 61, 67))
