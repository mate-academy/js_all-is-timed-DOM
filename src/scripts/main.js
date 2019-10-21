'use strict';

setInterval(() => {
  localStorage.timer++;
  document.getElementById('timer')
    .textContent = `You spent ${localStorage.timer}
    seconds on this website`;
}, 1000);
