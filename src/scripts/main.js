'use strict';

localStorage.timer = localStorage.timer || 0; // fdg

setInterval(() => {
  localStorage.timer++;
  document.getElementById('timer')
    .textContent = `You spent ${localStorage.timer}
    seconds on this website`;
}, 1000);
