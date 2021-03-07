// Sprint 1 Bloc 6 Nivell 3 Ex 1 - Pilar Mingueza  

// Capturi tots els errors possibles del Nivell 2.

// const arrayDatos = [0,2,4,6,8];
const arrayDatos = [];

const buscaDatos = () => {
    return new Promise((resolve, reject) => {
        if (arrayDatos.length == 0) {
            reject("Error, no hay datos");
        }
        setTimeout(() => {
            resolve(arrayDatos);
        }, 2000);
    })
}

async function obtenerDatos() {
    try {
        const datosBuscados = await buscaDatos();
        console.log(datosBuscados);
    } catch (err) {
        console.log(err);
    }
}
obtenerDatos();

