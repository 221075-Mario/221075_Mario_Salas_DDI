const contenedor = document.querySelector(".contenedor");
const BotonAccion= document.querySelector("#BotonAccion");

let off= false;
function CambiarColor(){
    if (off) {
        contenedor.style.backgroundColor="bLack";
    }else{
        contenedor.style.backgroundColor= "blue";
    }
}
BotonAccion.addEventListener("click", ()=> {
    CambiarColor();
    off =!off;

});
