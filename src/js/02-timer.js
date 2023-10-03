import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const chooseInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
let targetDate;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    targetDate = selectedDates[0];
    startBtn.disabled = false;
  },
};

startBtn.disabled = true;
startBtn.addEventListener('click', startHandle);
chooseInput.addEventListener('input', inputDates);
flatpickr(chooseInput, options);

function inputDates() {
  targetDate = chooseInput.value;
  // console.log(targetDate);
}
inputDates();

function startHandle() {
  if (targetDate < options.defaultDate) {
    alert('Please choose a date in the future');
  }
  timerId = setInterval(() => {
    const currentDate = new Date();

    const diffDates = targetDate - currentDate;
    // console.log(diffDates);
    const unixTime = convertMs(diffDates);

    daysSpan.textContent = unixTime.days.toString().padStart(2, '0');
    hoursSpan.textContent = unixTime.hours.toString().padStart(2, '0');
    minutesSpan.textContent = unixTime.minutes.toString().padStart(2, '0');
    secondsSpan.textContent = unixTime.seconds.toString().padStart(2, '0');

    if (diffDates <= 100) {
      clearInterval(timerId);
      alert('Oooooooooooops!');
      daysSpan.textContent = '00';
      hoursSpan.textContent = '00';
      minutesSpan.textContent = '00';
      secondsSpan.textContent = '00';
      
    }
  }, 1000);
}

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
