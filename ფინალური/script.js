let accordionHeader = document.querySelector(".section-4-container-div-2-p-flex")
let forJs = document.querySelector(".for-js")
let plusIcon = document.querySelector(".plus-icon")

let burger = document.querySelector(".burger")
let navlist = document.querySelector(".header-div2-nav-li")

let login = document.querySelector("#login")

login.addEventListener("click", ()=> {
    alert("button is clicked")
})

burger.addEventListener("click", ()=> {
    if(navlist.style.display =="none")(navlist.style.display ="block")
    else (navlist.style.display = "none")})

accordionHeader.addEventListener("click", ()=>{
if(forJs.style.display =="none")(forJs.style.display = "block")
else (forJs.style.display = "none")
})