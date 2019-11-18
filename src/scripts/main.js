'use strict';

let counter = localStorage.getItem('timer') || 0;
const title = document.querySelector('#timer');
title.innerHTML = `You spend ${counter} seconds`;

setInterval(() => {
  counter++;
  title.innerHTML = `You spend ${counter} seconds`;
  localStorage.setItem('timer', counter);
}, 1000);
