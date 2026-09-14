const EventEmitter = require("events")
const event = new EventEmitter()

event.on("calculate",(a,b)=>{
    console.log("sum => ",a+b);
    
})

event.emit("calculate",10,12)
