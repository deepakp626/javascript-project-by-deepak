let changeText = document.getElementById("btn")
let changeImg = document.getElementById("bulb")
changeText.addEventListener("click",allChange)
console.log("conform here")

function allChange() {
    if(changeText.textContent.includes("On")){
        changeText.innerText = "Off bulb"
        changeImg.setAttribute("src","./images/bulb-on.jpg" )
    }
    else{
        changeText.innerText = "On Bulb"
        changeImg.setAttribute("src","./images/bulb-Off.jpg")
    }
}
