const boton = document.querySelector("#boton");
const formulario = document.querySelector("#form_login");
const ir_registro = document.querySelector("#ir_registro");
const Usuarios = [];

class Usuario {

   constructor(nombre, apellido, correo, contraseña) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.correo = correo;
       this.contraseña = contraseña;

   }

}

function mostrarLogin() {
   formulario.innerHTML = "";
   const correo = document.createElement("input");

   correo.placeholder = "correo";
   correo.name = "correo";
   correo.type = "email";

   const contraseña = document.createElement("input");
   contraseña.placeholder = "contraseña";
   contraseña.name = "contraseña";
   contraseña.type = "password";

   const boton = document.createElement("button");
   boton.textContent = "Iniciar sesión";
   boton.type = "button";

   const registro = document.createElement("p");

   registro.textContent = "¿No tienes cuenta?";
   formulario.appendChild(correo);
   formulario.appendChild(contraseña);
   formulario.appendChild(boton);
   formulario.appendChild(registro);

   boton.addEventListener("click", (e) => {
       if (!correo.value || !contraseña.value) {
           alert("Faltan datos");
           return;

       }

       let encontrado = false;
       for (let i = 0; i < Usuarios.length; i++) {

           if (
               Usuarios[i].correo == correo.value &&
               Usuarios[i].contraseña == contraseña.value

           ) {
               encontrado = true;
           }

       }

       if (encontrado) {
           alert("Se inició sesión");

       } else {
           alert("Usuario no encontrado");

       }

   });

   registro.addEventListener("click", () => {
       mostrarRegistro();

   });

}

function mostrarRegistro() {
   formulario.innerHTML = "";
   const nombre = document.createElement("input");
   nombre.placeholder = "nombre";

   const apellido = document.createElement("input");
   apellido.placeholder = "apellido";

   const correo = document.createElement("input");
   correo.placeholder = "correo";
   correo.type = "email";

   const contraseña = document.createElement("input");
   contraseña.placeholder = "contraseña";
   contraseña.type = "password";

   const boton_guardar = document.createElement("button");
   boton_guardar.textContent = "Guardar";
   boton_guardar.type = "button";

   const volver = document.createElement("p");
   volver.textContent = "Volver a inicio";
   formulario.appendChild(nombre);
   formulario.appendChild(apellido);
   formulario.appendChild(correo);
   formulario.appendChild(contraseña);
   formulario.appendChild(boton_guardar);
   formulario.appendChild(volver);

   boton_guardar.addEventListener("click", () => {

       if (!nombre.value || !apellido.value || !correo.value || !contraseña.value) {
           alert("Faltan datos");
           return;

       }

       const usuario = new Usuario(
           nombre.value,
           apellido.value,
           correo.value,
           contraseña.value

       );

       Usuarios.push(usuario);
 console.log(usuario);
       alert("Usuario guardado");

       mostrarLogin();

   });

   volver.addEventListener("click", () => {

       mostrarLogin();

   });

}

mostrarLogin();
 