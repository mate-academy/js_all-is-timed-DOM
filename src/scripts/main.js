'use strict';

const timer = document.getElementById('timer');
let timeSpent = localStorage.getItem('time') || 0;
timer.textContent = timeSpent;

setInterval(() => {
  timeSpent++;
  localStorage.setItem('time', timeSpent);
  timer.textContent = timeSpent;
}, 1000);
