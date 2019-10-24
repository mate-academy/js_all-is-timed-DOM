'use strict';

let timer = document.querySelector('#timer');
let count = localStorage.getItem('count') || 0;

timer.innerText = `I stay ${count} seconds in this page`;

setInterval(function() {
  count++;
  localStorage.setItem(`count`, count);
  timer.innerText = `I stay ${count} seconds in this page`;
}, 1000);
