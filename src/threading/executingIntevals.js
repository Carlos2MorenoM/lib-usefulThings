//Executes every minute
var d = new Date();
var epoch = d.getTime() / 1000;

var secondsSinceLastTimerTrigger = epoch % 600; // 600 seconds (10 minutes)
var secondsUntilNextTimerTrigger = 600 - secondsSinceLastTimerTrigger;

setTimeout(function() {
    setInterval(orders.getOrders, 600*1000);
    console.log("This is being executed every minute (:");
}, secondsUntilNextTimerTrigger*1000);
