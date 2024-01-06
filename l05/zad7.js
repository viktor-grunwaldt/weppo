const fs = require('fs')
const readFile_promisify = require("util").promisify(fs.readFile)

const file = "./zad8.js"

function readFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      data = undefined
    } else {
      err = null
    }
    callback(err, data)
  })
}
readFile(file, (err, data) => {
  if (err) {
    console.error('Err:', err)
  } else {
    console.log("callback", data)
  }
})

function rfp(...args) {
  return new Promise((res, rej) => {
    fs.readFile(...args, (err, data) => {
      if (err) {
        rej(err)
      } else {
        res(data)
      }
    })
  })
}
function handle_promise(p, msg) {
  p.then((d) => console.log(msg, d))
    .catch((e) => console.log("Error:", e))
}

handle_promise(rfp(file, "utf8"), "ręcznie")

handle_promise(readFile_promisify(file, "utf8"), "util.promisify")

handle_promise(fs.promises.readFile(file, "utf8"), "fs.promises");

(async function() {
  try {
    let result = await fs.promises.readFile(file, "utf8")
    console.log("await", result)
  } catch (err) {
    console.log("Err", err)
  }

})();
