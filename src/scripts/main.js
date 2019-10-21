'use strict';
document.addEventListener("DOMContentLoaded", initCounter);
let seconds = localStorage.getItem('seconds');

function clock() {
  seconds++;
  document.getElementById("seconds").innerHTML = seconds;
  localStorage.setItem('seconds', seconds);
}

function initCounter() {
  if(seconds === undefined) {
    seconds = 0;
  }

  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(clock, 1000);
