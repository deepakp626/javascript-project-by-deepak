let createnNodeEl = document.getElementById("createnNode")
let containerEl = document.getElementById("container")
console.log("all nodes length",localStorage.length)

///// https://codepen.io/delineas/pen/qGWMQa 
const generateId = () => {
    return   Math.random().toString(36).substr(2, 18);
}

const creatNode = () => {
     let newKey = generateId();
     let newNode = `  <div class="item"  data-id="${newKey}">
            <div class="icon" >
                <i class="green  fa-solid fa-floppy-disk" onclick="saveNode();"></i>
                <i class="red   fa-solid fa-trash-can"   onclick="deleteNode(this);"></i>
            </div>
            <textarea name="" 
                      id="${newKey}" 
                      placeholder="Enter some text..." 
                      save="true" 
                      oninput="saveNode(this)"
                      value=""></textarea>
        </div>   `
        containerEl.insertAdjacentHTML("beforeend",newNode) 
        localStorage.setItem(newKey, "")
}
createnNodeEl.addEventListener("click", creatNode)

const allNode = () => {
    if(localStorage.length <= 0) {
        creatNode()
        return ;
    }

    for(let i=0 ; i< localStorage.length ; i++) {
        console.log("Id ->",localStorage.key(i),"Data ->", localStorage[localStorage.key(i)])              

        //// https://www.dofactory.com/html/div/data
        containerEl.innerHTML += `   <div class="item" data-id="${localStorage.key(i)}">
            <div class="icon">
                <i class="green    fa-solid fa-floppy-disk" onclick="saveNode();"></i>
                <i class="red    fa-solid fa-trash-can"   onclick="deleteNode(this);"></i>
            </div>
            <textarea name="" 
                      id="${localStorage.key(i)}" 
                      placeholder="Enter some text..." 
                      save="true" 
                      oninput="saveNode(this)"
                      value="">${localStorage[localStorage.key(i)]}</textarea>
        </div>   ` 
    }
}
//// initial call
allNode()


const deleteNode = (node) => {
    // console.log(node)
    let localStorageDeleteNode = node.parentElement.parentElement.getAttribute("data-id")
    localStorage.removeItem(localStorageDeleteNode)
    node.parentElement.parentElement.remove()
}
const saveNode = (node) => {
    // console.log(node)
    if(node == undefined){
        let allTeaxtarea = document.querySelectorAll(".item  textarea")
        allTeaxtarea.forEach((textarea) => {
        // console.log(textarea)
        // console.log(textarea.id,textarea.value)
        // this is for save button
        localStorage.setItem(textarea.id,textarea.value)
    })
    }else{
        // this is for auto save 
        localStorage.setItem(node.id, node.value)
    }
}