// VERIFICAR SESIÓN
// Si no hay sesión activa → regresa al login
if(localStorage.getItem("sesion") !== "activa"){
    window.location.href = "index.html";
}

//  OBTENER ELEMENTOS DEL HTML
const datos = document.querySelector("#datos"); // donde van las tarjetas
const cerrar = document.querySelector("#cerrar"); // botón cerrar sesión
const inputFile = document.querySelector("#inputFile"); // input subir JSON
const editarBtn = document.querySelector("#editarPerfil"); // botón editar perfil

// OBTENER USUARIOS GUARDADOS
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//  OBTENER USUARIO ACTIVO (correo guardado al iniciar sesión)
let activo = localStorage.getItem("usuarioActivo");

let usuarioActual;

//  BUSCAR EL USUARIO ACTIVO EN EL ARREGLO
for(let i=0;i<usuarios.length;i++){
    if(usuarios[i].correo === activo){
        usuarioActual = usuarios[i];
    }
}

//  SI NO ES ADMIN → OCULTAR INPUT FILE
if(!usuarioActual.admin){
    inputFile.style.display = "none";
}

//  OBTENER CATÁLOGO GUARDADO
let catalogoGuardado = JSON.parse(localStorage.getItem("catalogo"));

//  SI YA EXISTE → MOSTRARLO AUTOMÁTICAMENTE
if(catalogoGuardado){
    mostrarDatos(catalogoGuardado);
}

//  CERRAR SESIÓN
cerrar.addEventListener("click", () => {
    localStorage.removeItem("sesion"); // elimina sesión
    window.location.href = "index.html"; // regresa al login
});

//  CUANDO SE SELECCIONA UN ARCHIVO JSON
inputFile.addEventListener("change",(e)=>{

    // obtener archivo
    const archivo = e.target.files[0];

    // lector de archivo
    const reader = new FileReader();

    // cuando termina de leer
    reader.onload = function(){

        // convertir a JSON
        const data = JSON.parse(reader.result);

        // guardar catálogo
        localStorage.setItem("catalogo", JSON.stringify(data));

        // mostrar tarjetas
        mostrarDatos(data);

    };

    // leer archivo como texto
    reader.readAsText(archivo);

});


// FUNCIÓN PARA CREAR TARJETAS
function mostrarDatos(data){

    // limpiar pantalla
    datos.innerHTML = "";

    // recorrer cada elemento del JSON
    data.forEach(item => {

        // crear tarjeta
        const card = document.createElement("div");
        card.classList.add("card");

        // imagen
        const img = document.createElement("img");
        img.src = item.imagen;

        // nombre
        const nombre = document.createElement("h3");
        nombre.textContent = item.nombre;

        // descripción
        const desc = document.createElement("p");
        desc.textContent = item.descripcion;

        // armar tarjeta
        card.appendChild(img);
        card.appendChild(nombre);
        card.appendChild(desc);

        // agregar al HTML
        datos.appendChild(card);

    });

}


//  FUNCIÓN EDITAR PERFIL
function editarPerfil(){

    // limpiar vista
    datos.innerHTML = "";

    // inputs con datos actuales
    const nombre = document.createElement("input");
    nombre.value = usuarioActual.nombre;

    const correo = document.createElement("input");
    correo.value = usuarioActual.correo;

    const contraseña = document.createElement("input");
    contraseña.value = usuarioActual.contraseña;

    const guardar = document.createElement("button");
    guardar.textContent = "Guardar cambios";

    // agregar elementos
    datos.appendChild(nombre);
    datos.appendChild(correo);
    datos.appendChild(contraseña);
    datos.appendChild(guardar);

    // guardar cambios
    guardar.addEventListener("click",()=>{

        // actualizar datos del usuario
        usuarioActual.nombre = nombre.value;
        usuarioActual.correo = correo.value;
        usuarioActual.contraseña = contraseña.value;

        // actualizar en arreglo
        for(let i=0;i<usuarios.length;i++){
            if(usuarios[i].correo === activo){
                usuarios[i] = usuarioActual;
            }
        }

        // guardar cambios en localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // actualizar usuario activo
        localStorage.setItem("usuarioActivo", correo.value);

        alert("Datos actualizados");

        // recargar página
        location.reload();

    });

}

//  ACTIVAR BOTÓN EDITAR PERFIL
editarBtn.addEventListener("click", editarPerfil);