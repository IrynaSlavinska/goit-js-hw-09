// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення,
// використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена,
// кнопка «Start» була неактивною(disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startHandle);
stopBtn.addEventListener('click', stopHandle);
stopBtn.disabled = true;

function startHandle() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  const id = setInterval(() => {
    console.log(id);

    document.body.style.backgroundColor = getRandomHexColor();
    if (!startBtn.disabled) {
      clearInterval(id);
    }
  }, 1000);
}
function stopHandle() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
