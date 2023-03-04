 //// all variabal
 let inputEl = document.getElementById("input")
 let btnEl = document.getElementById("btn")
 let qrContainerEl = document.getElementById("qrContainer")
 let qrimgEl = document.getElementById("qrimg")

 const generateQR = (e) =>{
     e.preventDefault()
     if(inputEl.value.trim() == ""){
         qrimgEl.classList.add("hide") 
         alert("Please enter something")
         return;
     }else{
         qrimgEl.classList.remove("hide") 
     }
     let text = inputEl.value 
     btnEl.textContent = "Generating QR code ..."
     qrimgEl.src = "./images/colorful-loading-icon-vector.jpg"
     setTimeout(() => {
         btnEl.textContent = "Generator QR code "
         qrimgEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
     }, 500);
 }
 btnEl.addEventListener("click",generateQR)

 inputEl.addEventListener("keyup",()=>{
     qrimgEl.classList.add("hide")
 })