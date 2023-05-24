const fieldsNode = document.querySelectorAll(".fields div")
console.log(fieldsNode)
const formEl = document.getElementById("form")


const conformPassword = () => {
    const passwordEl = document.getElementById("password")
    const conformPasswordEl = document.getElementById("conform-password")

    if (passwordEl.value === conformPasswordEl.value || conformPasswordEl.value.trim() == "") {
        return;
    }
    if (!(passwordEl.value === conformPasswordEl.value)) {
        conformPasswordEl.nextElementSibling.textContent = "Password is not Match"
        conformPasswordEl.nextElementSibling.classList.remove("hide")
        conformPasswordEl.classList.remove("green-border")
        conformPasswordEl.classList.add("red-border")
        console.log("hii")
    }
}
const handleErrer = (passwordEl)=>{
        passwordEl.classList.remove("green-border")
        passwordEl.classList.add("red-border")
        passwordEl.nextElementSibling.classList.remove("hide")
}
const passwordValidation = () => {
    const passwordEl = document.getElementById("password");
    if (passwordEl.value.length <= 8) {
        handleErrer(passwordEl)
        passwordEl.nextElementSibling.textContent = 'password must be at least 8 characters'
        console.log("length less than 8")
    } else if (!(passwordEl.value.match(/[A-Z]/))) {
        handleErrer(passwordEl)
        passwordEl.nextElementSibling.textContent = 'at least 1 uppercase is include'
        console.log("Upper is miss")
    } else if (!(passwordEl.value.match(/[a-z]/))) {
        handleErrer(passwordEl)
        passwordEl.nextElementSibling.textContent = 'At least 1 LowerCase is include'
        console.log("Lower is miss")
    } else if (!(passwordEl.value.match(/[0-9]/))) {
        handleErrer(passwordEl)
        passwordEl.nextElementSibling.textContent = 'At least 1  Digit is include'
        console.log("Digit is miss")
    } else if (!(passwordEl.value.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))) {
        handleErrer(passwordEl)
        passwordEl.nextElementSibling.textContent = 'At least 1 special characters include'
        console.log("special char is miss")
    }
}
const checkSignUp = (event) => {
    event.preventDefault()
    for (const field of fieldsNode) {
        console.log(field)                 // all label and input print
        if (field.children[1].value.trim() == "") {
            field.children[1].classList.remove("green-border")
            field.children[1].classList.add("red-border")
            field.children[2].classList.remove("hide")
        } else {
            field.children[1].classList.add("green-border")
            field.children[2].classList.add("hide")
        }
    }
    passwordValidation()
    conformPassword()
}
formEl.addEventListener("submit", checkSignUp)