'use strict';
const item = document.querySelector('#timer');
let timer = localStorage.getItem('timer');
item.textContent = `You are here ${timer} seconds`;

setInterval(() => {
  timer++;
  localStorage.setItem('timer', timer);
  item.innerHTML = `You are here ${timer} seconds`;
}, 1000);
