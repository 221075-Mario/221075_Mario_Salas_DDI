const datos = document.querySelector("#datos");
const cerrar = document.querySelector("#cerrar");

fetch("https://dragonball-api.com/api/characters?limit=8")

.then(res => res.json())

.then(data => {

datos.innerHTML = "";

data.items.forEach(personaje => {

const card = document.createElement("div");
card.classList.add("card");

const img = document.createElement("img");
img.src = personaje.image;

const nombre = document.createElement("h3");
nombre.textContent = personaje.name;



const raza = document.createElement("p");
raza.textContent = "Raza: " + personaje.race;

const ki = document.createElement("p");
ki.textContent = "KI: " + personaje.ki;


card.appendChild(img);
card.appendChild(nombre);
card.appendChild(raza);
card.appendChild(ki);

datos.appendChild(card);

});

});



cerrar.addEventListener("click", () => {
localStorage.removeItem("sesion");
window.location.href = "index.html";

});

const observer = new IntersectionObserver((entradas)=>{

entradas.forEach(entrada=>{

if(entrada.isIntersecting){

console.log("Las tarjetas son visibles");

}

});

});

observer.observe(datos);