const titulo = document.getElementById("titulo");
const fondo = document.getElementById("FONDO");

const imagenes = document.querySelectorAll(
    ".galeria img, .galeria-mapas img"
);


window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    
    titulo.style.transform = `translate(-50%, calc(-50% - ${scroll * 0.6}px))`;
    titulo.style.opacity = 1 - scroll / 250;

    
    fondo.style.transform = `translateY(${scroll * 0.35}px)`;

    
    imagenes.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (imgTop < windowHeight - 150 && imgTop > 0) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    });
});


imagenes.forEach(img => {
    img.addEventListener("click", () => {
        imagenes.forEach(i => i.classList.remove("seleccionada"));
        img.classList.add("seleccionada");
    });
});
