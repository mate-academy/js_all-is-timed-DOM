'use strict';
document.addEventListener("DOMContentLoaded", initCounter);

function clock() {
  localStorage.seconds = Number(localStorage.seconds) + 1;
  document.getElementById("seconds").innerHTML = localStorage.seconds;
}

function initCounter() {
  if(localStorage.seconds === undefined) {
    localStorage.seconds = 0;
  }

  document.getElementById("seconds").innerHTML = localStorage.seconds;
}

setInterval(clock, 1000);
