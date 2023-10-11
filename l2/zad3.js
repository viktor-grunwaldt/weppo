console.log((![] + [])[+[]] + (![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]]);
// https://jsfuck.com/

// elem 1: ![] = false
// elem 2: +[] == toString
// ![] + [] == "false"
console.log((![] + []));
// "false"[0]
console.log("litera 1:", (![] + [])[+[]]);
// +!+[] = 1
console.log("litera 2:", (![] + [])[+!+[]]);
console.log(([![]]))
// [![]] == [false], [][[]] == undefined, + == concat
console.log(([![]] + [][[]]));
// "falseundefined"[10]
console.log("litera 3:", ([![]] + [][[]])[+!+[] + [+[]]]);
// "false"[2]
console.log("litera 4:", (![] + [])[!+[] + !+[]]);

// ## zad 4

// Operator typeof jest używany głównie do określania typu wartości
// prymitywnych takich jak liczby, łańcuchy znaków, symbole,
// wartości logiczne, bigint i niezdefiniowane wartości. Na przykład:

console.log(typeof 1); // 'number'
let foo = 1;
console.log(typeof foo); // 'number'

// xd
console.log(typeof null); // 'object'

// Operator instanceof jest operatorem binarnym, 
// który przyjmuje obiekt i konstruktor. Zwraca wartość boolean określającą,
// czy dany obiekt ma dany konstruktor w swoim łańcuchu prototypów.
// Przykładowo:

const a = "I'm a string primitive";
const b = new String("I'm a String Object");
console.log(a instanceof String); // false
console.log(b instanceof String); // true

// ------------------------------------------------------------------

var obj = {
  field: 5,
  method() { return this.field },
  get fieldVal() { return this.field },
  set fieldVal(x) { this.field = x }
}

// Uzycie gettera i settera:
console.log(obj.fieldVal)
obj.fieldVal = 100
console.log(obj.fieldVal)

// Nowe pole i metoda w istniejacym juz obiekcie:
obj.field2 = 'some text'
obj.method2 = function() { return 'some other text' }

console.log(obj.field2)
console.log(obj.method2())

// Dodawanie z Object.defineProperty:
Object.defineProperty(obj, 'getter2', { get: function() { return this.field2; } });
Object.defineProperty(obj, 'setter2', { set: function(x) { this.field2 = x; } });
console.log(obj.getter2)
obj.setter2 = 'another text'
console.log(obj.getter2)

// W "normalny" sposob nie zdefniujemy gettera i settera:
obj.getter3 = { get: function() { return this.field2; } };
console.log(obj.getter3) // zwraca { get: [Function: get] }
obj.getter4 = function() { return this.field2; };
console.log(obj.getter4) // zwraca [Function]


// -----------------------------------------------------------------


let obj = {};

// Dodanie pola
Object.defineProperty(obj, 'field', {
  value: 'value',
  writable: true,
  enumerable: true,
  configurable: true
});

// Dodanie metody
Object.defineProperty(obj, 'method', {
  value: function() { return 'Hello, World!'; },
  enumerable: true,
  configurable: true
});

// Dodanie właściwości z akcesorami get i set
let _property = 'default';
Object.defineProperty(obj, 'property', {
  get: function() { return _property; },
  set: function(value) { _property = value; },
  enumerable: true,
  configurable: true
});

// W przypadku pola i metody, można je również dodać do obiektu bezpośrednio,
//  np. obj.field = 'value'; lub obj.method = function() { ... };. 
// Jednak, właściwości z akcesorami get 
// i set muszą być dodawane za pomocą metody Object.defineProperty,
//  ponieważ inaczej nie jest możliwe ich dodanie do obiektu

