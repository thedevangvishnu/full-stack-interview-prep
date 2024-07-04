const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");

let countdownTime;
let intervalTimer;

function formatInputTime(hr, min, sec) {
  let hour = hr,
    minute = min,
    second = sec;

  // handle time based on sec, min and hour
  if (sec >= 60) {
    second -= 60;
    minute += 1;
  }

  if (min >= 60) {
    minute -= 60;
    hour += 1;
  }

  return { hour, minute, second };
}

function startCountdown() {
  let hr = +hoursInput.value;
  let min = +minutesInput.value;
  let sec = +secondsInput.value;

  let formattedTime = formatInputTime(hr, min, sec);
  hr = formattedTime.hour;
  min = formattedTime.minute;
  sec = formattedTime.second;

  console.log(hr, min, sec);

  // show correct time before starting
  hoursInput.value = hr < 10 ? `0${hr}` : hr;
  minutesInput.value = min < 10 ? `0${min}` : min;
  secondsInput.value = sec < 10 ? `0${sec}` : sec;

  if (hr === 0 && min === 0 && sec === 0) return;

  intervalTimer = setInterval(() => {
    if (hr === 0 && min === 0 && sec === 0) {
      clearInterval(intervalTimer);
      hoursInput.value = null;
      minutesInput.value = null;
      secondsInput.value = null;
    } else if (sec !== 0) {
      sec -= 1;
      secondsInput.value = sec < 10 ? `0${sec}` : sec;
    } else if (min !== 0 && sec === 0) {
      min -= 1;
      sec = 59;

      minutesInput.value = min < 10 ? `0${min}` : min;
      secondsInput.value = sec < 10 ? `0${sec}` : sec;
    } else if (hr !== 0 && min === 0 && sec === 0) {
      hr -= 1;
      min = 59;

      hoursInput.value = hr < 10 ? `0${hr}` : hr;
      minutesInput.value = min < 10 ? `0${min}` : min;
      secondsInput.value = sec < 10 ? `0${sec}` : sec;
    }
  }, 1000);
}

startBtn.addEventListener("click", startCountdown);

resetBtn.addEventListener("click", handleReset);
function handleReset() {
  // remember to stop the current timer
  clearInterval(intervalTimer);

  hoursInput.value = null;
  minutesInput.value = null;
  secondsInput.value = null;
}
