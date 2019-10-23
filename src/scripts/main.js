'use strict';
let secondsCounter = localStorage.getItem('seconds') || 0;
const seconds = document.getElementById('seconds');
seconds.innerHTML = secondsCounter;

function clock() {
  secondsCounter++;
  localStorage.setItem('seconds', secondsCounter);
  seconds.innerHTML = secondsCounter;
}

setInterval(clock, 1000);
