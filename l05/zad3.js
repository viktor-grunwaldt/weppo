let readln = require("readline")
var cl = readln.createInterface(process.stdin, process.stdout)
var question = function(q) {
  return new Promise((res, _rej) => {
    cl.question(q, answer => {
      res(answer)
    })
  })
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

async function main() {
  let solution = getRandomInt(101)
  let answer = null
  while (true) {
    answer = parseInt(await question("podaj liczbę (od 0 do 100): "))

    let msg = isNaN(answer) ? "hmm to chyba nie jest liczba"
      : answer > solution ? "moja liczba jest mniejsza"
        : answer < solution ? "moja liczba jest większa"
          : "to jest właśnie ta liczba"
    console.log(msg)
    if (answer === solution) {
      break
    }
  }
  cl.close()
}

main()
