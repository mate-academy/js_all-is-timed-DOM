'use strict';

let timer = localStorage.getItem('timer') || 0;

document.body.innerText = `You are ${timer} seconds of website`;
setInterval(() => {
  timer++;
  document.body
    .innerText = `You are ${localStorage
      .getItem('timer') || 0} seconds of website`;
  localStorage.setItem('timer', timer);
}, 1000);
