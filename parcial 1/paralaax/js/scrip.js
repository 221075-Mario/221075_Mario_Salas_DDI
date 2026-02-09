const titulo=document.querySelector("#titulo");
const html=document.querySelector("#html");
const ps5=document.querySelector("#ps5");
const java=document.querySelector("#java");

window.addEventListener("scroll", (event)=>{
    titulo.style.right = window.scrollY * 3 + "px";
    html.style.right = window.scrollY * 3 + "px";
    ps5.style.right = window.scrollY * 3 + "px";
    java.style.right = window.scrollY * 3 + "px";



})