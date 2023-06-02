let currency1El = document.getElementById("currency1");
let currency2El = document.getElementById("currency2");
const currency1inputEl = document.getElementById("currency-1-input");
const currency2inputEl = document.getElementById("currency-2-input");
const resultEl = document.querySelector(".result");
console.log({ currency1El, currency2El });

const changeCurrency = async () => {
  let selectCurrency1value = currency1El.value;
  let selectCurrency2value = currency2El.value;
  console.log({ selectCurrency1value, selectCurrency2value });
  fetch(`https://api.exchangerate-api.com/v4/latest/${selectCurrency1value}`)
    .then((response) => {
      //if promise wasn't resolved
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let currency_1_amount = currency1inputEl.value;

      let currency_to_convert_rate = data.rates[selectCurrency2value];
      let finalResult = +currency_1_amount * +currency_to_convert_rate;
      console.log({
        currency_1_amount,
        selectCurrency2value,
        finalResult,
        currency_to_convert_rate,
      });

      resultEl.textContent = `1 ${data.base} = ${currency_to_convert_rate.toFixed(3)} ${selectCurrency2value}`;
      currency2inputEl.value = finalResult.toFixed(3);
    })
    .catch((error) => {
      console.log(error);
    });
};
changeCurrency();
currency1El.addEventListener("change", changeCurrency);
currency2El.addEventListener("change", changeCurrency);

currency1inputEl.addEventListener("input", changeCurrency);
currency2inputEl.addEventListener("input", changeCurrency);
