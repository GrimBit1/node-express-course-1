const { writeFileSync } = require('fs')
for (let i = 0; i < 100000; i++) {
  writeFileSync(__dirname+'/content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}
