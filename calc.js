let display = document.getElementById("display")
//display.value = 0

// let one = document.getElementById("one")

// one.addEventListener("click",()=>{
//     display.value += one.value
// })

//for selecting all buttons
let allbtn = document.querySelectorAll(".btn")

console.log(allbtn);

allbtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        display.value += btn.value
    })
})

let clear = document.getElementById("clear")

clear.addEventListener("click",()=>{
    display.value = ""
})

let firstValue = ""
let add = document.getElementById("add")

add.addEventListener("click",()=>{
    firstValue = parseInt(display.value)
    display.value = ""
})

let eqto = document.getElementById("eqto")

eqto.addEventListener("click",()=>{
    let total = parseInt(firstValue) + parseInt(display.value)
    display.value = total
})