const EventEmitter = require('events');
const event = new EventEmitter()

event.on("greet",()=>{
    console.log("Hello , Welcome to Node.js events");
    
})

event.emit("greet")