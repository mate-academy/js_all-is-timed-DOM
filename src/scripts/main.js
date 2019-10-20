'use strict';
setInterval(() => {
  let timer = localStorage.getItem('timer');
  timer++;
  localStorage.setItem('timer', timer);
  document.querySelector('#timer').innerHTML
  = `You are here ${localStorage.getItem('timer')} seconds`;
}, 1000);
