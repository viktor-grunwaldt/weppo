// import {range} from './zad2.js';
// what do you meeean I have to declare it as a module to import

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
        let temp = begin;
        begin = end;
        end = temp;
        step = -step;
    }
    if (begin>=end) {
        throw Error("invalid range size");
    }
    let res = new Array(Math.floor((end - begin)/step));
    let i = 0;
    for (let val = begin; val<end; val+=step, i++) {
        res[i] = val;
    }
    return res;
}

let n = 100000;

function genSieve(size) {
    size++;
    let sieve = new Array(size).fill(true);
    sieve[0] = false;
    sieve[1] = false;
    for (let i= 2;i*i<size;i++) {
        if (sieve[i] === true) {
            range(i*i, size, i).forEach(
                (j) => {sieve[j]=false;
                });
        }
    }
    return sieve
        .map((a,i) => [a,i])
        .filter(val => val[0])
        .map((a) => a[1]);
}
console.log(genSieve(1000));