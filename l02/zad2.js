/*

Dot Notation only accepts static keys

*/

const obj = {
  name: "deeecode",
  age: 80,
  language: "javascript",
  "0": "zero",
}

const myKey = "language"

const target = obj.myKey
console.log(obj);
// undefined

// however

const target_bracket = obj[myKey]
console.log(obj);
// javascript

const num = obj[0]
console.log(num)
let obj1 = {};
obj1[1337] = "cześć";

// pod stringiem 1337 znajdziemy cześć
console.log(obj1);
obj1[obj] = "programowanie obiektowe";
console.log(obj1);
// jak użyjemy obiektu jako arg, to nasz obiekt "przekonwertuje" się na
// [object Object]
// i to stanie się kluczem


// ------------------------------------------------------------

let arr = Array(256).fill(0)
arr["a"] = 69
console.log(arr)
// Jak widać, argumentem operatora może być napis. 
// W takim przypadku JavaScript traktuje tablicę jak obiekt,
// a napis jako klucz do tego obiektu. Jest to możliwe,
// ponieważ w JavaScript tablice są specjalnym typem obiektów
arr[obj] = obj
console.log(arr["[object Object]"])
// jeśli używamy tablicy jako słownika, to nasza długość się nie zwiększa
console.log(arr.length)
// jeśli zmienimy długość ręcznie to jak zmniejszymy, to utniemy dodatkowe elementy
arr.length = 3
console.log(arr)
// a jak zwiększymy, to rozszerzymymy ją dodając undefined

