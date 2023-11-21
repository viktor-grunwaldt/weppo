// from ES6
class Foo {
  constructor() {
    this.Bar = function() {
      this.#Qux()
    }
  }

  #Qux() {
    console.log("Hello from Qux!")
  }
}

var foo = new Foo()
foo.Bar() // Wypisze "Hello from Qux!"
// foo.#Qux() // Błąd: Private field '#Qux' must be declared in an enclosing class

// metoda kamienia łupanego

let Foo_factory = () => {
  function Qux() {
    console.log("Hello from Qux!")
  }
  function Bar() {
    Qux()
  }
  function Foo() { }
  Foo.prototype.Bar = Bar
  return Foo
}

var Foo2 = Foo_factory()
let foo2 = new Foo2()
foo2.Bar() // Wypisze "Hello from Qux!" 
// foo2.Qux() // Błąd: foo2.Qux is not a function
