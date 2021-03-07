// Sprint 1 Bloc 5 Nivell 2 Ex 3 - Pilar Mingueza  

// Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les dues promises.

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

getEmpleado(2)                              // Buscar empleado con id = 2
    .then(encontrado => {
        return getSalario(encontrado)       // Buscar salario del empleado  
            .then(salEncontrado => {
                console.log(salEncontrado)
            });
    })

