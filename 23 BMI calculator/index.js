 let weightEl =  document.getElementById("weight")
 let heightEl = document.getElementById("height")
 let resultEl = document.querySelector(".result h2")
 let healthEl = document.querySelector(".fotter span")

 const healthCheck = (BMI)=>{
     if(BMI <= 18){
         resultEl.style.borderColor = "rgb(98,83,1)"
         healthEl.textContent = 'Underweight'
         healthEl.style.color = 'rgb(98,83,1)'
     }else if(BMI > 18 && BMI <= 24){
         resultEl.style.borderColor = "rgb(44,161,188)"
         healthEl.textContent = 'Healthy weight'
         healthEl.style.color = "rgb(44,161,188)"
     }else if(BMI >= 25 && BMI <= 29){
         resultEl.style.borderColor = "#8a4f02"
         healthEl.textContent = 'over weight'
         healthEl.style.color = "#8a4f02"
     }else if(BMI >= 30){
         resultEl.style.borderColor = "rgb(187,0,0)"
         healthEl.style.color = "rgb(187,0,0)"
         healthEl.textContent = 'Obese'
     }
 }
 const calculateBMI = ()=>{
     let weight = +weightEl.value
     let height = +heightEl.value
     console.log("weight = ",weight,"height = ",height)
     let meter =  height / 100       ////convert centemeter to meter 
     let BMI = (weight) / (meter * meter)    // BMI formula
     console.log("meter = ",meter,"BMI = ",BMI)
     if(isFinite(BMI)){
         resultEl.textContent = BMI.toFixed(1)
     }else{
         resultEl.textContent = '0.0'
         healthEl.textContent = ''
         resultEl.style.borderColor = "rgb(44,161,188)"
         console.log("return ")
         return; 
     }
     healthCheck(BMI)
 }
 weightEl.addEventListener("input",calculateBMI)
 heightEl.addEventListener("input",calculateBMI)