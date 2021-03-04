// Sprint 1 Bloc 4 Nivell 1 Ex 1 - Pilar Mingueza  

// Crear una function creadora d'objectes, abstraient la definició de les classes. Invocar-amb diferents definicions.

let prod1 = new Producto(1, "café con leche", 2.25);
let prod2 = new Producto(2, "té", 1.80);
let prod3 = new Producto(3, "café solo", 1.30);

console.log(prod1);
console.log(prod2);
console.log(prod3);

function Producto(id, descripcion, precio) {
  this.id = id;
  this.descripcion = descripcion;
  this.precio = precio;
}