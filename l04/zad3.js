var Person = function(name, surname) {
  this.name = name;
  this.surname = surname;
}
var Worker = function(name, surname, age) {
  // wywołanie bazowej funkcji konstruktorowej
  Person.call(this, name, surname);
  this.age = age;
}
Worker.prototype = Object.create(Person.prototype);



var Person1 = function(name, surname) {
  this.name = name;
  this.surname = surname;
}
var Worker1 = function(name, surname, age) {
  // wywołanie bazowej funkcji konstruktorowej
  Person1.call(this, name, surname);
  this.age = age;
}
Worker1.prototype = Person1.prototype
// To oznacza, że Worker1.prototype i Person1.prototype wskazują na ten sam obiekt.
// To jest problem, ponieważ zmiany wprowadzone w Worker.prototype będą wpływać
// na Person.prototype i na wszystkie obiekty utworzone przez Person.
// To jest niepożądane, ponieważ Person i Worker powinny mieć różne prototypy.


var Person2 = function(name, surname) {
  this.name = name;
  this.surname = surname;
}
var Worker2 = function(name, surname, age) {
  // wywołanie bazowej funkcji konstruktorowej
  Person2.call(this, name, surname);
  this.age = age;
}
Worker2.prototype = new Person()
// W tym wypadku prototypem Worker2 jest instancja Person, co również nie jest
// dobrą opcją. Zmiany w Person2 nie będą wpływać na Worker2

let w = new Worker("A", "b", 3)
let w1 = new Worker1("A", "b", 3)
let w2 = new Worker2("A", "b", 3)
console.log(Person.prototype, Worker.prototype)
console.log(Person1.prototype, Worker1.prototype)
console.log(Person2.prototype, Worker2.prototype)
console.log(w.name)
console.log(w1.name)
console.log(w2.name)
