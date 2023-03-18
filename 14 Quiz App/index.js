const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "JavaScript",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "Hypertext Markup Language",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "1995",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "Cascading Style Sheet",
},
{
    question: "Javascript is an _______ language ?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of the above",
    correct: "Object-Oriented",
}
];
let questionFormEl = document.getElementById("questionForm")
let inputsEl = document.querySelectorAll(".option div input")
let containerEl = document.getElementById("container")
let testData = {
    index: 0, correct: 0, incorrect: 0, answer: "javascript"
}


const renderQuestion = () => {
    let data = quizData[testData.index]
    // console.log(data)
    testData.answer = data.correct
    containerEl.innerHTML = ""
    containerEl.innerHTML = ` 
        <form id="questionForm" onSubmit="return false">
        <h2 class="question">${testData.index +1}  ${data.question}</h2>
        <div class="option">
            <div>
                <input type="radio" value="${data.a}" name="option">
                <label for="">${data.a}</label>
            </div>
            <div>
                <input type="radio" value="${data.b}" name="option">
                <label for="">${data.b}</label>
            </div>
            <div>
                <input type="radio" value="${data.c}" name="option">
                <label for="">${data.c}</label>
            </div>
            <div>
                <input type="radio" value="${data.d}" name="option">
                <label for="">${data.d}</label>
            </div>
        </div>
        <input type="submit" class="btn" id="submit" onclick="checkAnswer(this)">
    </form>
        `
}
renderQuestion()
const emptyAnswer = () => {
    inputsEl = document.querySelectorAll(".option div input")
    for (let i = 0; i < inputsEl.length; i++) {
        if (inputsEl[i].checked) {
            // console.log(inputsEl[i])
            /// false means client click the answer
            return false
        }
    }
    /// true means client not click the answer
    return true;
}
const checkAnswer = (e) => {
    if (emptyAnswer()) {
        alert("please check answer")
        return;
    }
    for (let i = 0; i < inputsEl.length; i++) {
        if (inputsEl[i].checked == true && inputsEl[i].value.trim() == testData.answer.trim()) {
            testData.correct++
            inputsEl[i].parentElement.classList.add("green")
            console.log("correct score",testData.correct)
            break;
        } else if (inputsEl[i].checked) {   /// true or false true radio inter only
            inputsEl[i].parentElement.classList.add("red")
            testData.incorrect++
            console.log("incorrect score",testData.incorrect)
            break;
        }
    }
    endQuizCheck()
    
    
}
const endQuizCheck = () => {
    // console.log(testData)
    // console.log(testData.index)
    if(testData.index + 1 == quizData.length) {
        testData.index = 0
        containerEl.innerHTML = ""
        containerEl.innerHTML =  `<div>
                                        <h2>Thank you for playing the quiz</h2>
                                        <h2 class="textgreen"> Correct -> ${testData.correct}  </h2>
                                        <h2 class="textred"> Incorrect -> ${testData.incorrect} </h2>
                                        <h2 class="textgreen"> Total   -> ${quizData.length} </h2>
                                  </div>`
    }else{
        testData.index++
        setTimeout(()=>{
            // update new question
            renderQuestion()
        },3000)
    }
}