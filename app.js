
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
// start();

var stop = function() {

    clearInterval(intervalId);
    clockRunning = false;
}

var recordLap = function() {

    let converted = timeConverter(time);

    $('#laps').append('<p>Lap ' + lap + " : " + converted + "</p>");

    lap++;
}

var count = function() {
    time++;

    let converted = timeConverter(time);

    $('#display').text(converted);
}

var timeConverter = function(i) {

    let minutes = Math.floor(i / 60);

    let seconds = i - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }


}

