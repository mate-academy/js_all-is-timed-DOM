'use strict';

let timer = localStorage.getItem('timer') || 0;
const secondsSpan = document.querySelector('#seconds');

secondsSpan.innerText = timer;
setInterval(() => {
  timer++;
  secondsSpan.innerText = timer;
  localStorage.setItem('timer', timer);
}, 1000);
