const https = require('https');

function fetch_page(params) {
  return new Promise((res, rej) => {
    https.get(params, (https_res) => {
      https_res.on('data', res)
    }).on('error', rej)
  })
}

fetch_page("https://0x0.st")
  .then((res) => console.log(res.toString()))
  .catch((err) => console.log("Failed to fetch page", err))

