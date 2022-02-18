const EventEmitter = require('events')
const customeEmitter = new EventEmitter()
customeEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} id is ${id}`);
})
customeEmitter.on('response', () => {
    console.log(`some other logic here`);
})
customeEmitter.emit('response', 'huy', 23)