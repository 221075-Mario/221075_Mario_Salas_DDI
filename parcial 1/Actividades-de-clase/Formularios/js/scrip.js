const nombre = document.querySelector("#input-txt-nombre");
const apellido = document.querySelector("#apellido-guardar");
const boton_guardar = document.querySelector("#boton-guardar");

boton_guardar.addEventListener("click", (e) => {
    e.preventDefault();

    const usuario = new Usuario(nombre.value, apellido.value);
    console.log(usuario);
    
})
function cambiarNumero(event) {
    console.log(event.target.value);
    const numeroElementos = event.target.value;
    const contenido= document.querySelector("#contenedor_correos");
    contenido.innerHTML = "";
    for (let i = 1; i <= event.target.value; i++) {
        
        //se agrega contenido usando la insercion de html por medio del innerHTMl,
        //  que agregara todo lo esta dentro de HtmlAgregar
        //este metodo reemplaza todo lo que esta dentro de la etiqueta
        
    const htmlAgregar = `<label for="correo- ${i}">Ingrese correo  ${i}</label>
           <input type="email" name="correo- ${i}" id="correo- ${i}">
           <br>`;
            contenido.innerHTML += htmlAgregar;
        }
}


class Usuario {
    constructor(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
}
