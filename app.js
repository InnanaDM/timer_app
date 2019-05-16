
console.log("connected");

window.onload = function() {
    $('#start').on('click', start);
    $('#stop').on('click', stop);
    $('#reset').on('click', reset);
    $('#lap').on('click', recordLap);
};

let intervalId;

let clockRunning = false;
let time = 0;
var lap = 1;

var reset = function() {
    time = 0;
    lap =1;

    $("#display").text("00:00");

    $('#laps').text("");
}


var start = function() {
    console.log("funct 'start' connected");

    if(!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning =  true;
    }
}