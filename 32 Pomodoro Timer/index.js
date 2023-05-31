const breakTypeEl = document.getElementById("Break-type");
const timeEl = document.getElementById("time");
const startEl = document.getElementById("start");
const pauseEl = document.getElementById("pause");
const resetEl = document.getElementById("reset");
let interval;
let minutes = 25;
let seconds = 0;

const display = (value) => {
  timeEl.textContent = value;
};
const operation = (event) => {
  let value = event.target.id;
  if (value == "start") {
    clearInterval(interval);
    interval = setInterval(() => {
      timer();
    }, 1000);
  } else if (value == "pause") {
    clearInterval(interval);
  } else if (value == "reset") {
    changeTime();
  }
  console.log(event.target.id);
};
const timer = () => {
  if (seconds == 00) {
    seconds = 59;
    minutes = --minutes;
  }
  if (minutes < 0) {
    clearInterval(interval);
    display(`${"00:00"}`);
    console.log({ minutes, seconds });
    return;
  }
  seconds = --seconds;

  seconds = seconds < 10 ? seconds.toString().padStart(2, 0) : seconds;
  minutes = minutes < 10 ? minutes.toString().padStart(2, 0) : minutes;
  display(`${minutes}:${seconds}`);
};
const changeTime = () => {
  let value = breakTypeEl.value;
  console.log(value);
  if (value === "Pomodoro") {
    clearInterval(interval);
    minutes = 25;
    seconds = 00;
    display(`${"25:00"}`);
  } else if (value == "Break") {
    clearInterval(interval);
    minutes = 05;
    seconds = 00;
    display(`${"05:00"}`);
  } else if (value == "Long Break") {
    clearInterval(interval);
    minutes = 10;
    seconds = 00;
    display(`${"10:00"}`);
  }
};

breakTypeEl.addEventListener("change", changeTime);
startEl.addEventListener("click", operation);
pauseEl.addEventListener("click", operation);
resetEl.addEventListener("click", operation);
