const url = "https://pokeapi.co/api/v2/pokemon";
//crear el objeto
//es el objeto principal q se emcarga de hacer las peticiones de forma asincrona

const xhr =new XMLHttpRequest();

//configuramos la peticon que se realizara 
//parametro 1 es el tipo de peticon 
//parametro 2 es la url donde se hara la peticio
//parametro 3 si sera asincrono
xhr.open('GET', url, true )
 
//establecimos la cabecera content-type para indiar que espermos un JSON
xhr.setRequestHeader('Content-type', 'aplication/json');

//definir la funicon que se ejecutara cuand el estado de la peticion  cambie
xhr.onreadystatechange = () => {

    //verificamos el estado de la peticoon 
    //0 = unset, 1 =opened, 2 = header_recieved
    // 3 = Loading, 4 = done.
//verfiicamos que el estatus cambie  a 4 y s ecomplete 
if(xhr.readyState === 4) {
 //verifivamos si la respuesta fue exiosa (codigos 200 a 299)
    if(xhr.status >= 200 && xhr.status < 300) {

        //hacemos una conversion de la respuesta a formato json  poderlo convertir a un objeto JavaScript
        //que podemos usar 
        const respuesta = JSON.parse(xhr.responseText);

        console.log(respuesta);
    } 
    else {

        //manejamos el error lo mostramos en consola en caso de que el estatus de la respyesra no sea 200
        console.log("Error HTTP ; ", xhr.status, xhr.statusText);
    }
}

    

}

//enciamos la pericon como es get enviamos null, si fuera post o null enviaos el cuerpo de la peticon 
xhr.send(null)