'use strict';
let timer = document.getElementById('timer');

if (!localStorage.hasOwnProperty('timeInPage')) {
  localStorage.setItem('timeInPage', 0);
}

timer.innerText = `${localStorage.getItem('timeInPage')}s`;

let timerId = setInterval(() => {
  localStorage['timeInPage']++;
  timer.innerText = `${localStorage.getItem('timeInPage')}s`;
}, 1000);


