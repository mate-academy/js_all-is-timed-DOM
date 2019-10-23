'use strict';

const counterBlock = document.querySelector('#timer');
let counter = localStorage.getItem('timer') || 0;

counterBlock.innerText = counter;

setInterval(() => {
  counter++;
  counterBlock.textContent = counter;
  localStorage.setItem('timer', counter);
}, 1000);
