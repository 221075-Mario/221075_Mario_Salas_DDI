

const imagenesMapas = document.querySelectorAll(".mapa-img img");

imagenesMapas.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("mover");
    });
});


const fondoMapas = document.getElementById("fondoMapas");

window.addEventListener("scroll", () => {
    let zoom = 1 + window.scrollY * 0.0004;

    if (zoom > 1.2) {
        zoom = 1.2;
    }

    fondoMapas.style.transform = `scale(${zoom})`;
});
