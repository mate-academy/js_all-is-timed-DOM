'use strict';

let seconds = localStorage.getItem('seconds');
const element = document.body.querySelector('#timer');

function incrementSeconds() {
  seconds++;
  element.innerHTML = `You have been there for ${seconds} seconds`;
  localStorage.setItem('seconds', seconds);
}

const startTimer = () => {
  setInterval(incrementSeconds, 1000);
};

startTimer();
