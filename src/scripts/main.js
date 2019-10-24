'use strict';
const timerElement = document.querySelector('#timer');
let timer = localStorage.getItem('currentTime') || 0;

showTime();

function showTime() {
  timerElement.innerText = `Time you have spent ${timer}`;
}

function fun() {
  timer++;
  localStorage.setItem('currentTime', timer);
  showTime();
}

setInterval(fun, 1000);
