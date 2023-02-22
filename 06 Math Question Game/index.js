   //// variabal
   let scoreEl = document.querySelector(".score span");
   let questionEl = document.getElementById("question")
   let inputEl = document.getElementById("ans")
   let submitEl = document.getElementById("submit")
   let messageEl = document.getElementById("message")
   let popupboxEl = document.getElementById("popupbox")
   let answer = 0
   let score;
   // console.log(typeof localStorage.getItem("score"))
   if(localStorage.getItem("score") == null){
           score = 0;
   }else{
           score = localStorage.getItem("score")
   }

   ////
   localStorage.setItem("score", score)
   scoreEl.textContent = score

   const randomProperty = (object)=>{
           const keys = Object.keys(object)
           const index = Math.floor(Math.random()*keys.length)
           let key = keys[index];
           let value = object[key]
           return {key,value}
   }
   const generateQuestionAnswer = ()=>{
       let x = Math.floor(Math.random() *11)
       let y = Math.floor(Math.random() *11)
       const allQuestion ={
            Add:'+',
           //  Multiplay : '*',
            Divide:'/',
            Subtract:'-'
       }
       // object ka random index
       let {key ,value} = randomProperty(allQuestion);
       questionEl.textContent  = `Q. What is ${x} ${key} by ${y} ?`
       if(value == "+"){
           answer = x+y;
       }else if(value == "-"){
           answer = x-y;
       }else if(value == "/"){
           // 0 not in denomenator
           if(y == 0){
               y+=1; 
           }
           answer = Math.floor(x/y);
       }else if(value == "*"){
           amswers = x * y;
       }
       console.log("currect answer",answer);
       inputEl.value = "";
   }
   generateQuestionAnswer()

   const popupbox  = ()=>{
       popupboxEl.classList.remove("close-popup")
       popupboxEl.classList.add("open-popup")
       let cleartime = setTimeout(() => {
           console.log("hii")
           popupboxEl.classList.add("close-popup")
           popupboxEl.classList.remove("open-popup")
       }, 2000);
   }
   const checkAnswer = ()=>{
           let currentAnswer = answer;
           if(inputEl.value.trim() == ""){
               alert("Anter Answer")
           }else if(currentAnswer == Number(Math.floor(inputEl.value.trim()))){
               localStorage.setItem("score",  ++score);
               scoreEl.textContent =  localStorage.getItem("score")
               popupbox()
               popupboxEl.textContent = `you are right and your score is ${score}`
               popupboxEl.style.backgroundColor= "rgb(75, 209, 75)"
           }else{
               localStorage.setItem("score",--score)
               scoreEl.textContent = localStorage.getItem("score")
               popupbox()
               popupboxEl.textContent = `you are wrong and your score is ${score}`
               popupboxEl.style.backgroundColor= "rgb(232, 84, 84)"
           }
           console.log("currentAnswer",currentAnswer,"use Enter", Number(inputEl.value.trim()));
           generateQuestionAnswer()
   }
   submitEl.addEventListener("click",checkAnswer)
