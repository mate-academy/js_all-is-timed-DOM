'use strict';
const timer = document.getElementById('timer');
let seconds = localStorage.getItem('howManySeconds') || 0;
timer.textContent = seconds;

setInterval(() => {
  seconds++;
  timer.textContent = seconds;
  localStorage.setItem('howManySeconds', seconds);
}, 1000);
