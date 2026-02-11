const nombre = document.querySelector("#input-txt-nombre");
const apellido = document.querySelector("#apellido-guardar");
const boton_guardar = document.querySelector("#boton-guardar");

boton_guardar.addEventListener("click", (e) => {
    e.preventDefault();

    const usuario = new Usuario(nombre.value, apellido.value);
    console.log(usuario);
});


class Usuario {
    constructor(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
}
