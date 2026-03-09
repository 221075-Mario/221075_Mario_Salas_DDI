const promesa = new Promise((resolve, reject) => {
let exito=true;
setTimeout(function(){
    if(exito) {
        resolve("la pantalla de carga finalizo")
    }
     else {
        reject("la tarea fallo")
    }
}, 3000)
}); 
promesa.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error);
}) 
console.log("se puede oasar a la siguiente tarea")   

    /*let peticionFetch = new Promise((resolve,reject)=>{
        const url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)        .then((response) => {
            if(response.ok)
                return response.json()
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            })      
          });
          peticionFetch.then(resultadoPeticion=>{
            console.log(resultadoPeticion);
          }).catch(error => {
            console.log(error);
          })
          //promesa para una pantalla de carga con espera de 1 a 2 segundos*/