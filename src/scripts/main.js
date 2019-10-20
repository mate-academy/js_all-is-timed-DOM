'use strict';

setInterval(() => {
  let spendSeconds = localStorage.getItem('spendSeconds');

  if (!spendSeconds) {
    localStorage.setItem('spendSeconds', 0);
  } else {
    localStorage.setItem('spendSeconds', ++spendSeconds);
  }

  console.log(`You spend on this page ${localStorage.getItem('spendSeconds')} seconds.`);
}, 1000);
