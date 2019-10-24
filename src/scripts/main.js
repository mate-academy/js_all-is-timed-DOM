'use strict';

let secondsTimer = localStorage.getItem('counter') || 0;
const counter = document.querySelector('#counter');
counter.innerHTML = secondsTimer;

setInterval(() => {
  secondsTimer++;
  localStorage.setItem('counter', secondsTimer);
  counter.innerHTML = secondsTimer;
}, 1000);
