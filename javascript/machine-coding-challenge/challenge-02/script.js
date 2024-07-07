const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

let time = JSON.parse(localStorage.getItem("countdown"));

let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;

if (time) {
  if (time.hr !== 0 || time.min !== 0 || time.sec !== 0) {
    hoursInput.value = time.hr;
    minutesInput.value = time.min;
    secondsInput.value = time.sec;

    countdown();
  }
}

startBtn.addEventListener("click", () => countdown());

resetBtn.addEventListener("click", () => {
  stopCountDown();
  localStorage.setItem("countdown", null);
});

pauseBtn.addEventListener("click", () => {
  hoursInput.value = formatDisplayValue(hours);
  minutesInput.value = formatDisplayValue(minutes);
  secondsInput.value = formatDisplayValue(seconds);

  clearInterval(timerInterval);
  pauseBtn.classList.remove("show--pause");
});

function countdown() {
  hours = parseInt(hoursInput.value) || 0;
  minutes = parseInt(minutesInput.value) || 0;
  seconds = parseInt(secondsInput.value) || 0;

  // format the input before starting and compute the time based on any given input
  // 85 secons should become 01 min 25 secs
  formatInputTime(hours, minutes, seconds);
  hoursInput.value = formatDisplayValue(hours);
  minutesInput.value = formatDisplayValue(minutes);
  secondsInput.value = formatDisplayValue(seconds);

  // handle pause
  pauseBtn.classList.add("show--pause");

  timerInterval = setInterval(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      stopCountDown();
    } else if (seconds !== 0) {
      seconds -= 1;
      secondsInput.value = formatDisplayValue(seconds);
    } else if (minutes !== 0 && seconds === 0) {
      minutes -= 1;
      seconds = 59;

      minutesInput.value = formatDisplayValue(minutes);
      secondsInput.value = formatDisplayValue(seconds);
    } else if (hours !== 0 && minutes === 0 && seconds === 0) {
      hours -= 1;
      minutes = 59;
      seconds = 59;

      hoursInput.value = formatDisplayValue(hours);
      minutesInput.value = formatDisplayValue(minutes);
      secondsInput.value = formatDisplayValue(seconds);
    }
    setTimeInLocalStorage(hours, minutes, seconds);
  }, 1000);
}

function stopCountDown() {
  clearInterval(timerInterval);

  hoursInput.value = null;
  minutesInput.value = null;
  secondsInput.value = null;

  pauseBtn.classList.remove("show--pause");
}

function formatInputTime() {
  if (seconds >= 60) {
    seconds -= 60;
    minutes += 1;
  }

  if (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }
}

function formatDisplayValue(value) {
  return value <= 9 ? `0${value}` : value;
}

function setTimeInLocalStorage(hr, min, sec) {
  let time = {
    hr,
    min,
    sec,
  };
  localStorage.setItem("countdown", JSON.stringify(time));
}
