const url = "https://pokeapi.co/api/v2/pokemon";
const contenedor = document.getElementById("contenedor");

fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
        for (let i = 0; i < 19; i++) {

            fetch(datos.results[i].url)
                .then(res => res.json())
                .then(pokemon => {
                    contenedor.innerHTML += `
                        <div class="card">
                            <h4>${pokemon.name}</h4>
                            <img src="${pokemon.sprites.front_default}">
                            <p>Peso: ${pokemon.height}</p>
                            <p>Tipo: ${pokemon.types[0].type.name}</p>
                        </div>
                    `;
                });

        }
    });





    ///hacer y mostrar tarjeta pokemon mostrandola en el html, con su nombre, imagen y tipo.