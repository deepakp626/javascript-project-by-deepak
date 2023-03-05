/// all variabal
let passwordLength = 5
let password = ""
let = uppercase = false
let number = false
let symbols = false

let passwordEl = document.getElementById("password")
let rangeEl = document.getElementById("range")
let pwdlengthEl = document.getElementById("pwd-length")
let uppercaseEl = document.getElementById("uppercase")
let numberEl = document.getElementById("number")
let symbolsEl = document.getElementById("symbols")
let checkboxEl = document.getElementsByClassName("checkbox")
const btnEl = document.getElementById("btn")

let numberString = "123456789"
let uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerString = "abcdefghigklmnopqrstuvwxyz"
let symbolsString = "!@#$%^&*()_+"

const generatePassword = (passwordLength)=>{
    let result = ""
    uppercase = uppercaseEl.checked
    number = numberEl.checked
    symbols = symbolsEl.checked
    password = lowerString
    if(uppercase == true)   password = password +uppercaseString
    if(number == true)   password = password + numberString
    if(symbols == true) password = password + symbolsString
    // console.log(password)

    for(let i = 0 ; i< rangeEl.value ;i++ ){
        let index = Math.floor(Math.random() * password.length)
        result += password[index]
    }
    console.log("pasword ->",result)
    passwordEl.textContent = result;
}
btnEl.addEventListener("click", generatePassword)


rangeEl.addEventListener("input",()=>{
    passwordLength  = rangeEl.value
    console.log(passwordLength)
    pwdlengthEl.textContent = `Password Length ${rangeEl.value}`
})


/// copy to clipboard
const copyToClipBord = async ()=>{ 
    try{
       await  window.navigator.clipboard.writeText(passwordEl.textContent)
        alert("Copyed to clipboard")
    }catch(e){
        alert("not copy in clipboard")
    }
}
passwordEl.addEventListener("click",copyToClipBord)