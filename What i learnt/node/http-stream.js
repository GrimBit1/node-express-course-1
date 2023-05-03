const http = require('http')
const fs = require('fs')

const Server = http.createServer((req, res) => {
    // res.end('hi')ut
    // res.end(fs.readFileSync(__dirname + '/bigfile.txt', 'utf-8'))
    const stream = fs.createReadStream(__dirname + '/bigfile.txt', 'utf-8')
    stream.on('open',(chunk)=>{
        stream.pipe(res)
    })
    // stream.on('open', () => {
    //     stream.pipe()
    // })
    // stream.on('error', (err) => {
    //     res.end(err)
    // })
});

Server.listen(5000)