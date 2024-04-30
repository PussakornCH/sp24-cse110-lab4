function curTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
// print out everysecond
let id = setInterval(curTime, 1000);

// Print out everysecond for 10 seconds
setTimeout(function() {
    clearInterval(id);
}, 11000);