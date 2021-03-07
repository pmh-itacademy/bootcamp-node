// Sprint 1 Bloc 6 Nivell 1 Ex 1 - Pilar Mingueza  

// Donats els objectes Employees i Salaries, creu una arrow function getEmpleado que retorni una Promise 
// efectuant la cerca en l'objecte pel seu id. 
// Creu una altra arrow function getSalario que rebi com a paràmetre un objecte Employee i retorni el seu salari.

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

getEmpleado(1)      // Buscar empleado con id = 1
    .then(encontrado => console.log(encontrado))
    .catch(noEncontrado => console.log(noEncontrado));

getSalario(employees[1])
    .then(encontrado => console.log(encontrado))
    .catch(noEncontrado => console.log(noEncontrado));

