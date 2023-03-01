 // variabal
 let btnEl = document.getElementById("btn")
 let itemEl = document.getElementsByClassName("item")
 let colorEl = document.getElementsByClassName("color")
 let rgbEl = document.getElementsByClassName("rgb")
 console.log(itemEl)

 const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
 const randomColor = () => {
     let hexCode = "#"
     for (let i = 0; i < 6; i++) {
         let index = Math.floor(Math.random() * hex.length)
         hexCode += hex[index]
     }
     return hexCode
 }

 const generateColor = () => {
     for (let i = 0; i < itemEl.length; i++) {
         itemEl[i].style.backgroundColor = `${randomColor()}`
         colorEl[i].textContent = `${randomColor()}`
         //// rgb value insert in rgb div 
         rgbEl[i].textContent = itemEl[i].style.backgroundColor
     }
 }
 generateColor()
 btnEl.addEventListener("click", generateColor)

 const copyToClipboard = async (event) => {
     let text = event.target.textContent
     console.log(text)
     try {
         /// copy to clipbord from this line
         await window.navigator.clipboard.writeText(text)
         console.log("copyed to clipbord ", text)
         alert("color  copy to clipboard")
     } catch (err) {
         console.log("copyed failed ", err)
     }
 }