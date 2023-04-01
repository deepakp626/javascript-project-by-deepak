let resetEl = document.getElementById('reset')
let startEl = document.getElementById('start')
let timeEl = document.getElementById('time')
let pauseEl = document.getElementById('pause')
let clearTime;
let pause = 1;
let ms = 0;
let seconds = 0;
let minutes = 0;
let hour = 0;

const twoDigit = (num) => {
    return num > 9 ? num : `0${num}`;
}
const stopWatchRun = () => {
    startEl.style.display = 'none';
    pauseEl.style.display = 'block';
    clearInterval(clearTime)
    clearTime = setInterval(() => {
        if (pause) {
            ms++;
            if (ms == 100) {
                seconds++;
                ms = 0;
            }
            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes == 60) {
                hour++
                seconds = 0;
                minutes = 0;
            }
            if (hour == 12) {
                ms = 0; seconds = 0; minutes = 0; hour = 0;
                location.reload();
            }
        }
        console.log(hour, minutes, seconds, ms)
        timeEl.textContent = `${twoDigit(hour)}:${twoDigit(minutes)}:${twoDigit(seconds)}:${twoDigit(ms)}`
    }, 10)
}
const pauseTime = () => {
    clearInterval(clearTime)
    startEl.style.display = 'block';
    pauseEl.style.display = 'none';
}
const resetTime = () => {
    clearInterval(clearTime)
    timeEl.textContent = `00:00:00:00`
    ms = 0
    seconds = 0
    minutes = 0
    hour = 0
    startEl.style.display = 'block';
    pauseEl.style.display = 'none';
}
pauseEl.addEventListener("click", pauseTime)
resetEl.addEventListener("click", resetTime)
startEl.addEventListener("click", stopWatchRun)