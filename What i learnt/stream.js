const fs = require('fs')
const { createReadStream } = require('fs')

// const stream = createReadStream(__dirname+'/bigfile.txt', "utf-8")
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })

const readfile = fs.readFileSync(__dirname + '/bigfile.txt', 'utf-8')
console.log(readfile)