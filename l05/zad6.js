const fs = require('fs');
const readline = require('readline');

function readLargeFile(name) {
  let acc = new Map()

  const rl = readline.createInterface({
    input: fs.createReadStream(name),
    crlfDelay: Infinity,
  })

  rl.on('line', (line) => {
    let e = line.split(/\s+/)[1]
    acc.set(e, (acc.get(e) || 0) + 1)
  })
  rl.on('close', () => {
    const sortedIPs = Array.from(acc.entries()).sort((a, b) => b[1] - a[1]).slice(0, 3);
    console.log("ip,count")
    console.log(sortedIPs.join("\n"))
  })
}

readLargeFile("./data/dummy.log")
