let items = document.querySelectorAll('.item');
let boxs = document.querySelectorAll('.box');

let all = document.querySelectorAll(".item *")
all.forEach((img_span)=>{
     img_span.setAttribute("draggable",false)
})

items.forEach( (item) => {
    item.addEventListener('dragstart', (e) => {
        console.log('drag start')
        setTimeout(() =>{
                e.target.classList.add('hide')
        },0)
    })
    item.addEventListener('dragend', (e) => {
        console.log('drag end')
        e.target.classList.remove('hide')
    })
    item.addEventListener('dragover',(e) => {
        return true
    })

})

boxs.forEach((box) => {
    box.addEventListener('dragover',(e)=> {
        e.preventDefault()
        console.log('drag over')
    })
    box.addEventListener('drop',(e)=> {
        console.log('drop')
        let dragItem = document.querySelector(".hide")
        e.target.appendChild(dragItem)
    })
})