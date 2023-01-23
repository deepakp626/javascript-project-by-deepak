   //// ***********  create to do ************
   AddData.addEventListener("click",addNode)
   function addNode(){
       
      
      let emptyH3 = document.getElementById("Chapter")
       if(emptyH3.children[0].id == "empty"){
          emptyH3.children[0].remove()
       }

        if(inputData.value == ""){
          alert("Please enter value")
          return;
        }
        let data = document.getElementById("inputData")
        let appendData =    data.value 
        let newList = `   <li>
              <h3>${appendData}</h3>
              <button class="edit">Edit</button>
              <button class="delete">Remove</button>
          </li>`
      // console.log(newList)
      // console.log(typeof  newList)

      let ul = document.getElementById("Chapter")
      // console.log(ul)
      ul.insertAdjacentHTML("beforeend",`   <li>
              <h3>${appendData}</h3>
              <button class="edit" onclick="editToDo(this)">Edit</button>
              <button class="delete" onclick="removeToDo(this)">Remove</button>
          </li> `)

      //// input field ko empty karna after add
      inputData.value = ""


    
   }

  

   ////************  remove to do  ***************
   function removeToDo(currentElement) {
      // console.log(currentElement)
      console.log(currentElement.parentElement.parentElement.children.length === 1)
      if(currentElement.parentElement.parentElement.children.length === 1){
          let li = `<li id="empty"> <h3 >Task is Empty</h3></li>`
          let ul = document.getElementById("Chapter")
          ul.innerHTML = li 
      }
      currentElement.parentElement.remove()

      
   }

   ///////************* Edit to do ****************
   function editToDo(currentElement){
      console.log(currentElement)
      if(currentElement.innerText == "Edit"){
          currentElement.textContent = "Done"
          let h3Tag= currentElement.parentElement.children[0]
          let currentData = h3Tag.textContent 
          // remove h3 tag
          console.log(currentElement.parentElement.children[0].remove())
          
          let inputTag = document.createElement("input")
          inputTag.value = currentData
          // console.log(inputTag)
          
          currentElement.parentElement.prepend(inputTag)      
      }
      else{
          currentElement.textContent = "Edit"
          let inputTag = currentElement.parentElement.children[0]
          let editData = inputTag.value
          console.log(editData)
          let h3Tag = document.createElement("h3")
          h3Tag.innerText = editData
          console.log(h3Tag)
          //// remove input tag 
          currentElement.parentElement.children[0].remove()
          currentElement.parentElement.prepend(h3Tag)
          console.log(currentElement.parentElement.children[0])
      }
   }