// http://api.quotable.io/random
// variabal
let newQuoteBtn = document.getElementById("btn")
let writerEl = document.querySelector(".writer")
let quoteDataEl = document.getElementById("quoteData")
let copyQuoteEl = document.getElementById("copyQuote")
let speakBtnEl = document.getElementById("speakBtn")
let twitterBtn = document.getElementById("twitter")

const randomQuote = () => {
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result => {
        speakBtn.textContent = "Loading..."
        quoteDataEl.textContent = result.content
        writerEl.textContent = "-- " + result.author
        speakBtn.textContent = "New Quote"
    })
}
randomQuote()
const copyQuote = () => {
    try {
        window.navigator.clipboard.writeText(quoteDataEl.textContent)
    } catch (e) {
        console.log("not copied")
    }
}

// reference 
// https://dev.to/asaoluelijah/text-to-speech-in-3-lines-of-javascript-b8h
// https://www.educative.io/answers/how-to-convert-text-to-speech-in-javascript
const textToSpeech = () => {
    let text = quoteDataEl.textContent;
    if ('speechSynthesis' in window) {
        // Speech Synthesis supported 🎉
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    } else {
        // Speech Synthesis Not Supported 😣
        alert("Sorry, your browser doesn't support text to speech!");
    }
}

const twitterhandal = () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteDataEl.innerText}`;
    window.open(tweetUrl, "_blank");
}
newQuoteBtn.addEventListener("click", randomQuote)
copyQuoteEl.addEventListener("click", copyQuote)
speakBtnEl.addEventListener("click", textToSpeech)
twitterBtn.addEventListener("click", twitterhandal)