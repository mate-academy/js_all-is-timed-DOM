'use strict';
const div = document.createElement('div');
let spendSeconds = localStorage.getItem('spendSeconds') || 0;

div.textContent = `You spend on this page ${spendSeconds} seconds.`;
document.body.appendChild(div);

setInterval(() => {
  localStorage.setItem('spendSeconds', ++spendSeconds);
  div.textContent = `You spend on this page ${spendSeconds} seconds.`;
}, 1000);
