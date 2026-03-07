console.log("esto es el final!");
 class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
       }
       callback(fuction = null) {

            if (typeof fuction  ==="fuction") {
                console.log("este es el calback dentro de usuario");
                fuction(this.nombre)
       }

    }
}
const usuarioActual = new Usuario("Juan", "juan@example.com");
usuarioActual.callback((nombre,correo) =>  {
console.log("esta es la funcion que envio desde el objeto usuario actual");

})