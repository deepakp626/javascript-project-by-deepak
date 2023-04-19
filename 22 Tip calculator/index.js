let amountEl = document.getElementById('amount')
let tippercentageEl = document.getElementById('tip-percentage')
let totalPersonEl = document.getElementById('total-person')
let tipinputEl = document.querySelector(".tip-range input")
let peopleinputEl = document.querySelector(".people-range input")
let tipPlusAmountEl = document.getElementById('tip-plus-amount')
let perPersonEl = document.getElementById('perPerson')
let billEl = document.getElementById('bill')
let tipEl = document.getElementById('tip')

const addSymbolDigit = (value) => {
    return `₹ ${value.toFixed(2)}`
}

const tipCalcy = () => {
    let amount = +amountEl.value;
    let totalPerson = +peopleinputEl.value;
    let tipPercent = +tipinputEl.value
    //  formula of calculate percent of amount
    let tipAmount = (amount * tipPercent) / 100

    tipPlusAmountEl.textContent = addSymbolDigit(tipAmount)
    tippercentageEl.textContent = `${tipPercent}%`
    totalPersonEl.textContent = `${totalPerson} people`

    /// set per person amount
    let perPersonAmount = (amount + tipAmount) / (totalPerson)
    perPersonEl.textContent = addSymbolDigit(perPersonAmount)

    let bill = amount / (totalPerson)
    billEl.textContent = addSymbolDigit(bill)

    let tip = tipAmount / (totalPerson)
    tipEl.textContent = addSymbolDigit(tip)
    console.log("Done")
}
amountEl.addEventListener("keyup", tipCalcy)
tipinputEl.addEventListener("input", tipCalcy)
peopleinputEl.addEventListener("input", tipCalcy)