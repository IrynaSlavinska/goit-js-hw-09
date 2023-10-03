import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const submitBtn = document.querySelector('button');
let counter = 1;
let timerId = null;

submitBtn.addEventListener('submit', onSubmitClick);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
