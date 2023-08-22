// document.getElementById('main').style.backgroundColor = 'red'
// document.getElementById('main').style.width = '200px'

let submit_btn = document.getElementById("submit")
submit_btn.addEventListener("click", (event)=>{
    event.preventDefault()
    login()
})
let login = (event) => {
    
    let user = document.getElementById("user")

    user.style.display = "block"
}