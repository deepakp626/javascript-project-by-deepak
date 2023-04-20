let bodyEl = document.getElementById("body");
let nameEl = document.querySelector(".name");
let colorsEl = document.querySelectorAll(".colors h2");
let btnEl = document.querySelector("#btn")
let CSSPropertyEl = document.getElementById("CSSProperty")
let iconEl = document.querySelector(".icon")
console.log(iconEl)

const hideName = ()=>{
    nameEl.classList.add("hide")
}
const generateHexCode = ()=>{
    let code  = '123456789abcdef';
    let hexCode = '#';
    let i = 0;
    while(i < 6){
        let index = Math.floor(Math.random() * code.length);
        hexCode += code[index];
        i++;
    }
    return hexCode;
}
const changeBackground = ()=>{   
        // hide 
        hideName()
        // generate hex code with function
        let hexCode_1 = generateHexCode()
        let hexCode_2 = generateHexCode()
        // show 1 or 2 hex code 
        colorsEl[0].textContent  = hexCode_1
        colorsEl[1].textContent  = hexCode_2
        // set body tag background color 
        let color = `linear-gradient(90deg, ${hexCode_1}, ${hexCode_2})`
        document.body.style.backgroundImage = color;
        // set copy css property
        CSSPropertyEl.textContent = `background-Image: ${color}` 
}
const setClikbord = ()=>{
    console.log(CSSPropertyEl.textContent)
    try{
        window.navigator.clipboard.writeText(CSSPropertyEl.textContent)
    }catch(error){
        console.log(error.message)
    }
}
window.addEventListener("keyup",(e)=>{
    //  console.log(e)
       if((e.key === " ") || (e.keyCode === 32) ){
           changeBackground()
        }
})
btnEl.addEventListener("click",changeBackground)
iconEl.addEventListener("click",setClikbord)