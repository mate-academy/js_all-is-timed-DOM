'use strict';
const timer = document.getElementById('timer');

const timerInPage = 'timerInPage';
if (!localStorage.getItem(timerInPage)) {
  localStorage.setItem(timerInPage, 0);
}

timer.innerText = `${localStorage.getItem(timerInPage)}s`;

setInterval(() => {
  localStorage.timerInPage++;
  timer.innerText = `${localStorage.getItem(timerInPage)}s`;
}, 1000);
