'use strict';

const timerItem = 'timer';
let seconds = localStorage.getItem(timerItem) || 0;
const secondsTimer = document.getElementById(timerItem)

setInterval(() => {
  localStorage.setItem(timerItem, ++seconds)
  secondsTimer.textContent = `You spent ${localStorage.timer} seconds on this website`;
}, 1000);
