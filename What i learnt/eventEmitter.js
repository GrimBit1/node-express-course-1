const EventEmitter = require('events')
const customEmitter = new EventEmitter()
customEmitter.on('done', () => {
    console.log("Data Saved Sucessfully")
}) // add event listener on custom event 'done' and what to do in another parameter
customEmitter.emit('done') // emit the 'done' event