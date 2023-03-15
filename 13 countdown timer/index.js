
/*  
  * 1 day  = 24 hour
  * 1 hr = 60 mins
  * 60 mins = 3600 sec
*/
let subEl = document.getElementById("submit")
let dateEl = document.getElementById("date")
let inputs = document.querySelectorAll(".input")
let stopstopAndPauseEl = document.getElementById("stopstopAndPause")
let resetEl = document.getElementById("reset")
let clear;
let pause = 1;

const setTime = (diff)=>{
  inputs[0].value = Math.floor(diff / 3600 / 24)   // for days
  inputs[1].value = Math.floor(diff / 3600) % 24    // for hour
  inputs[2].value = Math.floor(diff / 60) % 60      // for minutes
  inputs[3].value = Math.floor(diff) % 60        // for seconds
}

const clock = () => {
  let now = new Date()
  let endDate = new Date(dateEl.value)
  // conveting mili second to second with divide 1000 
  const diff = (endDate - now) / 1000;
  if (diff < 0) {
    alert("Enter valid Date")
    clearInterval(clear)
    return
  }
  if(pause){
    setTime(diff)
  }
}

const start = (e) => {
  e.preventDefault();
  if (dateEl.value.trim() == "") {
    alert("Enter Date")
    return;
  }
  // clear interval before calling next interval
  clearInterval(clear)
  clear =  setInterval(() => {
    clock()
  }, 1000);
}
subEl.addEventListener("click", start)

const stopAndPause = (e) => {
    e.preventDefault()
    if( stopstopAndPauseEl.value.trim() == "Stop"){
      stopstopAndPauseEl.value = "Resume"
      //  pause  0 means the setTime function we can not call inside the clock function
      pause = 0;
    }else{
      // pause 1 means the setTime function can now call inside the clock function
      pause = 1;
      stopstopAndPauseEl.value = "Stop"
    }
}
stopstopAndPauseEl.addEventListener("click", stopAndPause)

const reset = (e) => {
  e.preventDefault()
  clearInterval(clear)
  inputs[0].value = 0
  inputs[1].value = 0
  inputs[2].value = 0
  inputs[3].value = 0
  // this  location.reload() function simialr to browser refresh button
  window.location.reload()
}
resetEl.addEventListener("click",reset)
