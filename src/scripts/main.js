'use strict';
let timerKey;
let timer = 0;
const timerSpan = document.querySelector('#seconds');

timerSpan.innerText = timer;
setInterval(() => {
  timer++;
  timerSpan.innerText = timer;
  localStorage.setItem(timerKey, timer);
}, 1000);
