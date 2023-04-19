let startEl = document.getElementById("start");
let stopEl = document.getElementById("stop");
let paraEl = document.getElementById("para")
let totoalWordsEl = document.getElementById("words-Number")
let wordsEl = document.getElementById("words")
let arrayString = paraEl.textContent.split(" ").filter((text) => {
    // remove empty text from array  
    if (text) {
        return text;
    }
})
let clearTime;
let timeInSeconds = 60;

const showWords = () => {
    let index = 0;
    let total_words = +totoalWordsEl.value
    if(total_words <= 0){
        alert("please enter a number")
        return;
    }
    let time = (timeInSeconds / (total_words));
    time = time * 1000;     // convert seconds to milliseconds for setinterval 
    console.log(time)

    clearInterval(clearTime)
    clearTime = setInterval(() => {
        console.log("count = ", index, arrayString[index]);
        wordsEl.textContent = arrayString[index]
        index = index + 1;
        if (total_words === index) {
            clearInterval(clearTime)
            wordsEl.textContent = `${total_words} words completed`
        } else if (arrayString.length == index) {
            clearInterval(clearTime)
        }
    }, time)
}
const stopWords = () => {
    clearInterval(clearTime)
    console.log("stop pussed")
}
startEl.addEventListener("click", showWords)
stopEl.addEventListener("click", stopWords)