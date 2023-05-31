const taskEl = document.getElementById('task')
const resultEl = document.getElementById('result')
const clearEl = document.getElementById('clear')

clearEl.addEventListener("click", () =>{
    taskEl.textContent = "";
    resultEl.textContent = "";
})
const taskOnScreen = (task)=>{
    taskEl.textContent += task;
}
const back = ()=>{
    let str = taskEl.textContent ;
    taskEl.textContent = str.substring(0, str.length -1)
}
const calculate = (value)=>{
    let str = taskEl.textContent;
    let lastChar = str.charAt(str.length - 1)
    console.log({lastChar})

    //not allow symbol on empty task 
    if(str == "" && Number.isNaN(+(value))) {
         if(value == '.'){
            taskOnScreen(0+value)
         }
           console.log("not a number")
           return;
    }
    // check symbol for in last string position
    if(Number.isNaN(+lastChar) &&  Number.isNaN(+(value))){ 
        if(lastChar == '.' && value == '.'){
            return ;
        }
        else if(lastChar == '.'){
            taskOnScreen(value)
        }
        else if(Number.isNaN(+lastChar)) {
           taskOnScreen(0 + value)
        }
        else{
            // updating last character of task string 
            let updateTask = str.slice(0,-1);
            taskEl.textContent = updateTask + value;
            console.log({updateTask})
        }
        console.log("not allow symbol")
        return;
    }
    // insert expression on screen
    taskOnScreen(value)
}
const finalResult = ()=>{
    let str = taskEl.textContent
    if(Number.isNaN(+(str[str.length - 1]))){
        console.log("symbol")
        back()
    }
    // check or calculate result 
    try {
        result = eval(taskEl.textContent)
    } catch (error) {
        alert("Enter valid calculation")
        return;
    }
    // insert result on screen
    resultEl.textContent = result;

    console.log({result});
} 