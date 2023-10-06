const EventEmitter= require('events')
const myEventEmitter=new EventEmitter()
myEventEmitter.on('click',(msg)=> console.log(`Event Fired!!! with msg ${msg}`))
myEventEmitter.emit('click','sup')

