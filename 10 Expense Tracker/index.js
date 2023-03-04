   //// all variabal
   let listEl = document.getElementsByClassName("list")
   let iconEl = document.getElementById("icon")
   let earnEl = document.getElementById("earn")
   let expenEl = document.getElementById("expen")
   let textEl = document.getElementById("text")
   let amountEl = document.getElementById("amount")
   let totalamountEl = document.getElementById("totalamount")
   let ulEl = document.getElementById("ul")
   let currentearnEl = document.getElementById("currentearn")
   let currentexpensEl = document.getElementById("currentexpens")
   const state = {
       totalamount: 0,
   }

   const earnlist = () => {
       if (textEl.value.trim() == "" || amountEl.value.trim() == "") {
           alert("Please enter text and amount")
           return false
       }
       let text = textEl.value;
       let amount = amountEl.value;
       state.totalamount = state.totalamount + (+amount);
       totalamountEl.innerText = `₹ ${state.totalamount}`
       let li = `<li id="list" class="list">
                       <div>
                           <h4 id="discription">${text}</h4>
                           <h4 id="price">+ ₹ ${amount}</h4>
                       </div>
                       <h4 class="color">C</h4><br>
                       <li id="icon" class="togal  "><i class="fa-solid fa-pen" onclick="editList(this)"  ></i> <i class="fa-sharp fa-solid fa-trash" onclick="deleteList(this)"></i></li>
                   </li>`
       ulEl.insertAdjacentHTML("afterbegin", li)

       currentearnEl.innerText = `₹ ${amount}`
       textEl.value = amountEl.value = ""
   }
   earnEl.addEventListener("click", earnlist)

   const expenslist = () => {
       if (textEl.value.trim() == "" || amountEl.value.trim() == "") {
           alert("Please enter text and amount")
           return false
       }
       let text = textEl.value;
       let amount = amountEl.value;
       state.totalamount = state.totalamount - (+amount);
       totalamountEl.innerText = `₹ ${state.totalamount}`
       let li = `<li id="list" class="list">
                       <div>
                           <h4 id="discription">${text}</h4>
                           <h4 id="price">- ₹ ${amount}</h4>
                       </div>
                       <h4 class="color">D</h4><br>
                       <li id="icon" class="togal  "><i class="fa-solid fa-pen" onclick="editList(this)" ></i> <i class="fa-sharp fa-solid fa-trash" onclick="deleteList(this)"></i></li>
                   </li>`
       ulEl.insertAdjacentHTML("afterbegin", li)

       currentexpensEl.innerText = `₹ ${amount}`
       textEl.value = amountEl.value = ""
   }
   expenEl.addEventListener("click", expenslist)


   const deleteList = (e) => {
       e.parentElement.previousElementSibling.remove()
       e.parentElement.remove()
   }

   const editList = (e) => {
        let text = e.parentElement.previousElementSibling.innerText
        let [discription, price] = text.split("\n")
        price = price.split(" ")
       //  console.log(price)
        textEl.value = discription
       amountEl.value  = price[2]
       deleteList(e)
   }