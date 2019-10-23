'use strict';

let counter = localStorage.getItem('spentTime') || 0;
const time = document.getElementById('timer');
time.innerHTML = counter;

setInterval(() => {
  counter++;
  localStorage.setItem('spentTime', counter);
  time.innerHTML = counter;
}, 1000);
