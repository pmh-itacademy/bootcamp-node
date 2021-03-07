// Sprint 1 Bloc 6 Nivell 1 Ex 2 - Pilar Mingueza  

// Creu una funció asíncrona que, rebent un id d'empleat, imprimeixi per pantalla el nom de l'empleat 
// i el seu salari

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

getSalario = (empleado) => new Promise((resolve, reject) => {
    let salarioEmpleado = salaries.find(salario => salario.id === empleado.id);
    if (salarioEmpleado != undefined) {
        resolve(`Salario del empleado ${empleado.name}: ${salarioEmpleado.salary}`);
    }
    else {
        reject(`Salario del empleado ${empleado.name} no encontrado`);
    }
})

async function obtenerDatos(idEmpleado) {
    const datosEmpleado = await getEmpleado(idEmpleado);
    const salarioEmpleado = await getSalario(datosEmpleado);
    console.log(salarioEmpleado)
}

obtenerDatos(1);