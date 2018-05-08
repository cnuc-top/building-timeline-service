const fs = require('fs')

function readText(pathname) {
  var bin = fs.readFileSync(pathname)

  if (bin[0] === 0xef && bin[1] === 0xbb && bin[2] === 0xbf) {
    bin = bin.slice(3)
  }

  bin = bin.toString('utf-8')
  bin = JSON.parse(bin)

  return bin
}

module.exports = {
  readText
}
