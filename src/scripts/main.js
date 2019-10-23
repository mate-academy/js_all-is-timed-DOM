'use strict';
let secondsCounter = localStorage.getItem('seconds') || -1;
const seconds = document.getElementById('seconds');

function clock() {
  secondsCounter++;
  seconds.innerHTML = secondsCounter;
  localStorage.setItem('seconds', secondsCounter);
}

setInterval(clock, 1000);
document.addEventListener("DOMContentLoaded", clock);
