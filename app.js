
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