import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmitClick);

function onSubmitClick(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;

  if (delay.value < 0 || step.value < 0 || amount.value < 0) {
    Notiflix.Notify.warning('Enter more then 0');
  }
  for (let s = 0; s < amount.value; s += 1) {
    let position = s + 1;
    const intervalDelay = Number(delay.value) + step.value * s;
    createPromise(position, intervalDelay)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      )
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  evt.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// if (shouldResolve) {
//
// } else {
//
// }
// }

// логіка
// 1. натискаємо на самбіт
// 1.2. дані з інпутів відправляються значеннями змінних
//

// 1.
