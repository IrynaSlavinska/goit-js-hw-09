import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    startBtn.disabled = false;
    // if (selectedDates < defaultDate) {
    //   alert('Please choose a date in the future');
    // } else {
    // }
  },
};
console.log(options);

// Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
// Такий таймер може використовуватися у блогах та інтернет - магазинах, сторінках реєстрації подій,
// під час технічного обслуговування тощо.Подивися демо - відео роботи таймера.

const chooseInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

startBtn.disabled = true;
flatpickr(chooseInput, options);

startBtn.addEventListener('click', startHandle);

function startHandle() {}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let seconds = 350000000;
const unixTime = convertMs(seconds);
console.log(unixTime);

daysSpan.textContent = unixTime.days;
hoursSpan.textContent = unixTime.hours;
minutesSpan.textContent = unixTime.minutes;
secondsSpan.textContent = unixTime.seconds;

// в seconds має записувати результат віднімання таргетДати і каррентДати
// тоді ці секунди будуть йти аргуметом у виклик convertMs, який буде
// конвертувати їх в unixTime
//  вже з unixTime витягувати значення і записувати їх в спани

// розібратись з тим, що має відбуватись в onClose(), каррент і таргет датами
