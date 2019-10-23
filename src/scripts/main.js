'use strict';
const time = 'timer';
const item = document.querySelector('#timer');
let timer = localStorage.getItem(time) || 0;
item.textContent = `You are here ${timer} seconds`;

setInterval(() => {
  timer++;
  localStorage.setItem(time, timer);
  item.innerHTML = `You are here ${timer} seconds`;
}, 1000);
