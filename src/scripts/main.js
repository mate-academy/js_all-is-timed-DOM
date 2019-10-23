'use strict';
const timer = document.getElementById('timer');

let allTimeOnPage = localStorage.getItem('allTimeOnPage') || 0;
timer.innerText = allTimeOnPage;

setInterval(() => {
  allTimeOnPage++;
  localStorage.setItem('allTimeOnPage', allTimeOnPage);
  timer.innerText = allTimeOnPage;
}, 1000);
