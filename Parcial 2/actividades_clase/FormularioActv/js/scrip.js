const formulario = document.getElementById('miFormulario');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const datos= new FormData(formulario);

    const correo = datos.get("correo");
    const contrasena = datos.get("contrasena");
    if (correo === "" || contrasena === "") {
        mensaje.textContent = "Por favor, complete todos los campos.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Formulario enviado correctamente.";
        mensaje.style.color = "green";
       
    }
});