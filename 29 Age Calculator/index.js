const inputEl = document.getElementById("date")
const ageEl = document.getElementById("age")
const birthDate = new Date(document.querySelector('input').value);
console.log(birthDate)
const date = new Date()
console.log({ date })
let currentDate = date.getDate()
let currentMonth = 1 + date.getMonth()
let currentYear = date.getFullYear()
let day_31 = [1, 3, 5, 7, 8, 10, 12]
let day_30 = [4, 6, 9, 11]
let day_29 = [2];

const calculateAge = () => {
    
    const birth = new Date(document.querySelector('input').value);
    console.log(birth)
    
    if(birth.getFullYear() > currentYear) {
        console.log("hiiiiiiii")
        alert("Enter valid year")
        return  " years : months : days";
    }

    let birthDate = birth.getDate()
    let birthMonth = 1 + birth.getMonth()
    let birthYear = birth.getFullYear()
    let ageDates,ageMonths,ageYears ;
    console.log({ birthDate, birthMonth, birthYear })

    if (currentDate < birthDate) {
        if ((currentMonth == 1) && (currentMonth == 3) && (currentMonth == 5) && (currentMonth == 7) && (currentMonth == 8) && (currentMonth == 10) && (currentMonth == 12)) {
            currentDate = currentDate + 31;
        }else if((currentMonth == 4) && (currentMonth == 6) && (currentMonth == 9) && (currentMonth == 11)){
            currentDate = currentDate + 30;
        }else{
            currentDate = currentDate + 29;
        }
        currentMonth -= currentMonth;
        ageDates = currentDate - birthDate;
    } else {
        ageDates = currentDate - birthDate;
    }
    if (currentMonth < birthMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear -1;
        ageMonths = currentMonth - birthMonth;
    } else {
        ageMonths = currentMonth - birthMonth;
    }
    ageYears = currentYear - birthYear;

    console.log({ ageDates, ageMonths, ageYears })
    return  `${ageYears} years :${ageMonths} months :${ageDates} days`
}
const setAge = () => {
    ageEl.textContent = calculateAge()
}
inputEl.addEventListener("change", setAge)