function createFs(n) { // tworzy tablicę n funkcji
  var fs = []; // i-ta funkcja z tablicy ma zwrócić i
  for (var i = 0; i < n; i++) {
    fs[i] =
      function() {
        return i;
      };
  };
  return fs;
}
function createFsLet(n) { // tworzy tablicę n funkcji
  var fs = []; // i-ta funkcja z tablicy ma zwrócić i
  for (let i = 0; i < n; i++) {
    fs[i] =
      function() {
        return i;
      };
  };
  return fs;
}
var myfs = createFs(10);
console.log("wersja z var")
console.log(myfs[0]()); // zerowa funkcja miała zwrócić 0
console.log(myfs[2]()); // druga miała zwrócić 2
console.log(myfs[7]());
// 10 10 10
// ale wszystkie zwracają 10!?
var myfs = createFsLet(10);
console.log("wersja z let")
console.log(myfs[0]()); // zerowa funkcja miała zwrócić 0
console.log(myfs[2]()); // druga miała zwrócić 2
console.log(myfs[7]());


// Zastapienie var na let w ciele petli for (dla i ) sprawia,
// ze kazda iteracja petli bedzie tworzyla nowy zmienna
// i w zasiegu petli zamiast wskazywać na tą samą wartość

function createFs_babel(n) {
  // tworzy tablicę n funkcji
  var fs = []; // i-ta funkcja z tablicy ma zwrócić i
  var _loop = function _loop(i) {
    fs[i] = function() {
      return i;
    };
  };
  for (var i = 0; i < n; i++) {
    _loop(i);
  }
  ;
  return fs;
}

var myfs = createFs_babel(10);
console.log("wersja z domknięciem")
console.log(myfs[0]()); // zerowa funkcja miała zwrócić 0
console.log(myfs[2]()); // druga miała zwrócić 2
console.log(myfs[7]());
