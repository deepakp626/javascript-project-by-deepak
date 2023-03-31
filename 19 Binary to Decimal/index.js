///  variabal
let binaryEl = document.getElementById("binary-number")
let btnEl = document.getElementById("btn")
let resultEl = document.querySelector(".result h2")
let formEl = document.getElementById("form")

const powerOf = (num,power)=> {
    return 2 ** power
}
const generateDecimal = (e) => {
    e.preventDefault()
    let number = binaryEl.value;
    let length = number.length
    let powerNum = 0;
    let decimal =0;
    console.log("binary= ",number)
    for (let i = 0; i < length; i++) {
        let lastDigit = number % 10
        
        if(lastDigit == 2 || lastDigit == 3 || lastDigit == 4 || lastDigit == 5 || lastDigit == 6 || lastDigit == 7 || lastDigit == 8 || lastDigit == 9) {
            alert(`Number should be binary you have enter ${number}`);
            binaryEl.value = ""
            return ;
        }
        decimal += lastDigit * powerOf(2,powerNum)
        powerNum = ++powerNum
        number= Math.floor(number/ 10)
    }
    console.log("decimal =",decimal)
    resultEl.textContent = `Decimal Number : ${decimal}`
}
btnEl.addEventListener("click", generateDecimal)
formEl.addEventListener("submit",generateDecimal)