let readln = require("readline")
var cl = readln.createInterface(process.stdin, process.stdout)
var question = function(q) {
  return new Promise((res, _rej) => {
    cl.question(q, answer => {
      res(answer)
    })
  })
}

async function main() {
  let name = await question('Jakie masz imię?\n')
  console.log('Witaj, ' + name)
  cl.close();
}

main()
