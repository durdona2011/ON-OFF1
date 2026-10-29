let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let body = document.querySelector("body")
let p2 = document.querySelector(".p2")
let p3 = document.querySelector(".p3")
let p4 = document.querySelector(".p4")
let p5 = document.querySelector(".p5")
let p6 = document.querySelector(".p6")



btn1.addEventListener("click", function(){
    body.style.backgroundColor = "white"
    p2.style.color="black"
    p3.style.color="black"
    p4.style.color="black"
    p5.style.color="black"
    p6.style.color="black"
})

btn2.addEventListener("click", function(){
    body.style.backgroundColor = "black"
    p2.style.color="white"
    p3.style.color="white"
    p4.style.color="white"
    p5.style.color="white"
    p6.style.color="white"
})