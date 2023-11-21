var n = 1;
console.log(typeof Object.getPrototypeOf(n))
// Kiedy wartość typu prostego jest używana w kontekście, który oczekuje obiektu,
// JavaScript automatycznie "opakowuje" wartość typu prostego w odpowiedni obiekt.
//  Na przykład, jeśli masz wartość typu string i próbujesz wywołać na niej metodę,
// JavaScript najpierw "opakuje" wartość typu string w obiekt typu String,
// a następnie wywołuje metodę na tym obiekcie.

try {
  n.foo = "foo";
  console.log("value of n.foo", n.foo)
} catch (e) {
  // typy proste nie są prawdziwymi obiektami,
  //  więc nie można im dodawać dodatkowych pól ani zmieniać ich wartości
  console.log("falied to assign or print value", e)
}
