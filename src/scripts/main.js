'use strict';

let timer = localStorage.getItem('timer') || 0;
const timerSpan = document.querySelector('#seconds');

timerSpan.innerText = timer;
setInterval(() => {
  timer++;
  timerSpan.innerText = timer;
  localStorage.setItem('timer', timer);
}, 1000);
