let display = document.getElementById("display")


let one = document.getElementById("one")

one.addEventListener("click",()=>{
    display.value += one.value
})