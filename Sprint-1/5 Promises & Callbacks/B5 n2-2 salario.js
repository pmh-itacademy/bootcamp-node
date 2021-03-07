// Sprint 1 Bloc 5 Nivell 2 Ex 2 - Pilar Mingueza  

// Creu una altra arrow function getSalario que rebi com a paràmetre un objecte employee i retorni el seu salari.

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

getSalario = (empleado) => new Promise((resolve, reject) => {
    let salarioEmpleado = salaries.find(salario => salario.id === empleado.id);
    if (salarioEmpleado != undefined) {
        resolve(`Salario del empleado ${empleado.name}: ${salarioEmpleado.salary}`);
    }
    else {
        reject(`Salario del empleado ${empleado.name} no encontrado`);
    }
})

getSalario(employees[1])
    .then(encontrado => console.log(encontrado))
    .catch(noEncontrado => console.log(noEncontrado));

getSalario(employees[2])
    .then(encontrado => console.log(encontrado))
    .catch(noEncontrado => console.log(noEncontrado));
