'use strict';

let counter = localStorage.getItem('spentTime') || 0;
const time = document.getElementById('timer');
time.textContent = counter;

setInterval(() => {
  counter++;
  localStorage.setItem('spentTime', counter);
  time.textContent = counter;
}, 1000);
