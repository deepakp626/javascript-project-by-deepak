// varaibal
let btnEl = document.getElementById("btn");
let subjectEl = document.getElementById("allsubject");
let resulteEl = document.getElementById("result")

console.log(typeof Number(subjectEl.children[0].value));
 
const stopRefrashing = (event)=>{
    /// stop auto refresh from and redirectig on action attribute value
    event.preventDefault();
}

const result = () => {
    let sum = 0;
    let maxMarks = 400;
    for (let i = 0; i < subjectEl.children.length; i++) {
        if (subjectEl.children[i].value > 100 || subjectEl.children[i].value < 0 || subjectEl.children[i].value == "") {
            return true;
        }
                    /// convert string to number
        sum = sum + Number(subjectEl.children[i].value);
    }
    console.log(sum);
    let percentage = ((sum/maxMarks)*100).toFixed(2)
    resulteEl.textContent = `You have got ${sum} marks out of 400 and your percentage is ${percentage}%`;
}
btnEl.addEventListener("click", result)