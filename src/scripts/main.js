'use strict';
const timer = document.getElementById('timer');

if (!localStorage.hasOwnProperty('timeInPage')) {
  localStorage.setItem('timeInPage', 0);
}

timer.innerText = `${localStorage.getItem('timeInPage')}s`;

setInterval(() => {
  localStorage['timeInPage']++;
  timer.innerText = `${localStorage.getItem('timeInPage')}s`;
}, 1000);
