// document.getElementById("count").innerText = 5

let count=0
let countEl=document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


// console.log(count)
function increment(){
    count=count+1
    countEl.innerText =count

    
}
function decrement(){
    if(count>0){
    count=count-1
    countEl.innerText =count
    }

    
}

function save(){
    let countStr = count +" - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count=0
}

function deleted(){
    saveEl.textContent= "Previous Entries : "
}