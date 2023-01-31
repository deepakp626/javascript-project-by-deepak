 //// flag for 2nd time hit ADD DOB button
 let flag = 1;
 //// setting-icon variabal
 let dob = document.getElementById("settingicon")
 let settingContent = document.getElementById("settingdiv")
 let initialTextEl = document.getElementById("initialText")
 let afterDOBBtnTextEl = document.getElementById("afterDOBBtnText")
 let dobInputEl = document.getElementById("dobInput")
 let dobButtonEl = document.getElementById("dobButton")

 //// time variabal
 let yearEl = document.getElementById("year")
 let monthEl = document.getElementById("month")
 let dayEl = document.getElementById("day")
 let hoursEl = document.getElementById("hour")
 let minutesEl = document.getElementById("minute")
 let secondsEl =document.getElementById("seconds")

 //// make 2 digit number
 const makeTwoDigitNumber = (number)=>{
   return number >9 ? number : `0${number}`
 }

 //////   setting-icon
 let DOBopen = false
 console.log(DOBopen)
 dob.addEventListener("click",displayDOB);
 function displayDOB(){
    if(DOBopen){
        settingContent.classList.remove("hide")
    }else{
        settingContent.classList.add("hide")
    }
    DOBopen = !DOBopen;
    console.log(DOBopen)
 }



 ///// updating time values
 const updateAge = (dateOfBirth)=>{

let cleartime = setInterval(()=>{
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;  
    // console.log(typeof dateDiff)
    const year = Math.floor(dateDiff/ (1000 * 60 * 60* 24 * 365));
    const month = Math.floor(dateDiff/ (1000 * 60 * 60 * 24 * 365)) % 12;
    const day = Math.floor(dateDiff/ (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff/ (1000 * 60 * 60))% 24;
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff/ 1000) % 60; 
    
    yearEl.textContent = makeTwoDigitNumber(year)
    monthEl.textContent = makeTwoDigitNumber(month)
    dayEl.textContent = makeTwoDigitNumber(day)
    hoursEl.textContent = makeTwoDigitNumber(hour)
    minutesEl.textContent = makeTwoDigitNumber(minute)
    secondsEl.textContent = makeTwoDigitNumber(second)
    },1000)
    

}



 ////  seting DOB handler 
 const setDOBHandler = () =>{
     let dateString =   dobInputEl.value
     let dateOfBirth = new Date(dateString)

     console.log(dateOfBirth)  
     if(dateOfBirth){
        initialTextEl.classList.add("hide")
        afterDOBBtnTextEl.classList.remove("hide")
        if(flag ==1){
            updateAge(dateOfBirth)
        }else{
            alert("Refresh the page ")
        }
        flag = 0;
    }else{
        afterDOBBtnTextEl.classList.add("hide") 
        initialTextEl.classList.remove("hide")
    }
}
dobButtonEl.addEventListener("click",setDOBHandler)
