// Sprint 1 Bloc 6 Nivell 2 Ex 1 - Pilar Mingueza  

// Creu una funció asíncrona que anomeni a una altra que retorni una Promise que efectuï la seva resolve 
// amb una demora de 2 segons.

const arrayDatos = [0, 2, 4, 6, 8];

const buscaDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrayDatos);
        }, 2000);
    })
}

async function obtenerDatos() {
    const datosBuscados = await buscaDatos();
    console.log(datosBuscados);
}
obtenerDatos();


