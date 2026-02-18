
const rectangulos = document.querySelectorAll(".rectangulo");

rectangulos.forEach(rect => {
    rect.addEventListener("click", () => {
        rectangulos.forEach(r => r.classList.remove("active"));
        rect.classList.add("active");
    });
});


const fondoEnemigos = document.getElementById("fondoEnemigos");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    fondoEnemigos.style.transform = `translateY(${scroll * 0.3}px)`;
});
