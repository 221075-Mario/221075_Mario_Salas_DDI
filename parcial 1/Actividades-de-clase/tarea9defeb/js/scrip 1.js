const elemento1 = document.querySelector(".elemento1");
const elemento2 = document.querySelector(".elemento2");
const elemento3 = document.querySelector(".elemento3");
const elemento4 = document.querySelector(".elemento4");
const elemento5 = document.querySelector(".elemento5");


 
window.addEventListener("scroll", (event)=>{
    elemento1.style.right = window.scrollY * 3 + "px";
});
    elemento2.addEventListener("click", (event)=>{
    elemento2.classList.toggle("activo") ;
});
 window.addEventListener("load", (event)=>{
    elemento3.classList.add ("cargando") ;
});
 elemento4.addEventListener("mousemove", (event)=>{
    elemento4.classList.add ("mover") ;

});
elemento4.addEventListener("mouseleave", () => {
    elemento4.classList.remove("mover");
});
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        elemento5.classList.add("visible");
    }
});