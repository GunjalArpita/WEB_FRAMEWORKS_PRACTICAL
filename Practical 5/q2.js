const EventEmitter = require("events")
const event = new EventEmitter()
event.on("introduce",(name)=>{
    console.log("Hello "+name+",nice to meet you")
})

event.emit("introduce","Arpita")