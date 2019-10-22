'use strict';
const timer = document.getElementById('timer');
let userTimer = localStorage.getItem('userTimer') || 0;
timer.textContent = userTimer;

setInterval(() => {
  localStorage.setItem('userTimer', ++userTimer);
  timer.textContent = userTimer;
}, 1000);
