'use strict';
const timer = document.getElementById('timer');

let timeSpend = localStorage.getItem('timer') || 0;

timer.innerText = timeSpend;

setInterval(() => {
  timeSpend++;
  localStorage.setItem('timer', timeSpend);
  timer.innerText = timeSpend;
}, 1000);
