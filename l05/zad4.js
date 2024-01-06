const fs = require('node:fs/promises')

async function main() {
  try {
    const data = await fs.readFile('./zad4.js', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

main()
