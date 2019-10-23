'use strict';
const timer = document.querySelector('#timer');
let timeCounter = localStorage.getItem('localTime') || 0;
timer.textContent = timeCounter;

setInterval(() => {
  timeCounter++;
  timer.textContent = timeCounter;
  localStorage.setItem('localTime', timeCounter);
}, 1000);
