//  Obtener elementos
const boton = document.querySelector("#boton");
const formulario = document.querySelector("#form_login");
const ir_registro = document.querySelector("#ir_registro");

//  Obtener usuarios guardados o crear arreglo vacío
let Usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//  Clase Usuario (estructura de datos)
class Usuario {
constructor(nombre, apellido, correo, contraseña) {
this.nombre = nombre;
this.apellido = apellido;
this.correo = correo;
this.contraseña = contraseña;
}
}

// Mostrar pantalla de login
function mostrarLogin() {

formulario.innerHTML = "";

// Crear input correo
const correo = document.createElement("input");
correo.placeholder = "correo";
correo.name = "correo";
correo.type = "email";

// Crear input contraseña
const contraseña = document.createElement("input");
contraseña.placeholder = "contraseña";
contraseña.name = "contraseña";
contraseña.type = "password";

// Botón login
const boton = document.createElement("button");
boton.textContent = "Iniciar sesión";
boton.type = "button";

// Texto para ir a registro
const registro = document.createElement("p");
registro.textContent = "¿No tienes cuenta?";

// Agregar elementos al formulario
formulario.appendChild(correo);
formulario.appendChild(contraseña);
formulario.appendChild(boton);
formulario.appendChild(registro);

// Evento login
boton.addEventListener("click", (e) => {

// Validar campos
if (!correo.value || !contraseña.value) {
alert("Faltan datos");
return;
}

let encontrado = false;

// Buscar usuario en arreglo
for (let i = 0; i < Usuarios.length; i++) {

if (
Usuarios[i].correo === correo.value &&
Usuarios[i].contraseña === contraseña.value
) {
encontrado = true;
}

}

// Si lo encuentra
if (encontrado) {

 localStorage.setItem("sesion", "activa"); // guardar sesión
 localStorage.setItem("usuarioActivo", correo.value); // guardar usuario
alert("Se inició sesión");

// Ir a otra página
window.location.href = "inicio.html";

} else {
alert("Usuario no encontrado");
}

});

// Ir a registro
registro.addEventListener("click", () => {
mostrarRegistro();
});

}

//  Mostrar registro
function mostrarRegistro() {

formulario.innerHTML = "";

// Inputs
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

//  Checkbox admin
const admin = document.createElement("input");
admin.type = "checkbox";

const labelAdmin = document.createElement("label");
labelAdmin.textContent = "Administrador";

// Botón guardar
const boton_guardar = document.createElement("button");
boton_guardar.textContent = "Guardar";
boton_guardar.type = "button";

// Volver
const volver = document.createElement("p");
volver.textContent = "Volver a inicio";

// Agregar al formulario
formulario.appendChild(nombre);
formulario.appendChild(apellido);
formulario.appendChild(correo);
formulario.appendChild(contraseña);
formulario.appendChild(labelAdmin);
formulario.appendChild(admin);
formulario.appendChild(boton_guardar);
formulario.appendChild(volver);

// Evento guardar
boton_guardar.addEventListener("click", () => {

// Validación
if (!nombre.value || !apellido.value || !correo.value || !contraseña.value) {
alert("Faltan datos");
return;
}

// Crear usuario
const usuario = {
nombre: nombre.value,
apellido: apellido.value,
correo: correo.value,
contraseña: contraseña.value,
admin: admin.checked
};

// Guardar usuario
Usuarios.push(usuario);
localStorage.setItem("usuarios", JSON.stringify(Usuarios));

console.log(usuario);

alert("Usuario guardado");

// Volver al login
mostrarLogin();

});

// Volver al login
volver.addEventListener("click", () => {
mostrarLogin();
});

}

// Mostrar login al cargar
mostrarLogin();