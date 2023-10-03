// function onSubmitClick(evt) {
//   evt.preventDefault();

//   const elements = evt.currentTarget.elements;
//   const delay = elements.delay.value;
//   const step = elements.step.value;
//   const amount = elements.amount.value;

//   setTimeout(() => {
//     logPromises();
//     timerId = setInterval(() => {
//       logPromises();
//     }, step);
//   }, delay);
//   logPromises();
// }
// function logPromises() {
//   const promise = createPromise(counter, delay);

//   counter += 1;

//   if (counter > Number(amount)) {
//     clearInterval(timerId);

//     counter = 1;
//   }

//   promise.then(reuslt => console.log(reuslt)).catch(err => console.log(err));
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;

//   const elements = formEl.elements;
//   const step = elements.step.value;

//   let delayNumber = Number(delay) + step * (counter + 1);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delayNumber}ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delayNumber}ms`);
//       }
//     }, delay);
//   });
// }
