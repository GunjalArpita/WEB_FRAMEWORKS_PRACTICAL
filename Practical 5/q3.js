const EventEmitter = require("events")
const event = new EventEmitter()

event.on("order",()=>{
    console.log("Order received");
    
})
event.on("order",()=>{
    console.log("processing order");
    
})

event.emit("order")