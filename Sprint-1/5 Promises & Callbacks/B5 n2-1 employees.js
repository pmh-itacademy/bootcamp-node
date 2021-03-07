// Sprint 1 Bloc 5 Nivell 2 Ex 1 - Pilar Mingueza  

// Donats els objectes employees i salaries, creu una arrow function getEmpleado que retorni una Promise
// efectuant la cerca en l'objecte pel seu id.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

getEmpleado = (idBuscado) => new Promise((resolve, reject) => {
    let empleado = employees.find(employee => employee.id === idBuscado);
    if (empleado != undefined) {
        resolve(empleado);
    }
    else {
        reject(`Empleado ${idBuscado} no encontrado`);
    }
})

getEmpleado(1)      // Buscar empleado con id = 1
    .then(encontrado => console.log(encontrado))
    .catch(noEncontrado => console.log(noEncontrado));

getEmpleado(4)      // Buscar empleado con id = 4
    .then(encontrado => console.log(encontrado))
    .catch(noEncontrado => console.log(noEncontrado));
