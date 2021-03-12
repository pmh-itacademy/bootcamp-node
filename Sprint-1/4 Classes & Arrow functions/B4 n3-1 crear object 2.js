// Sprint 1 Bloc 4 Nivell 1 Ex 1 >>> V2 <<< - Pilar Mingueza  

// Crear una function creadora d'objectes, abstraient la definició de les classes. Invocar-amb diferents definicions.

let servicio1 = new Racion(8);
let servicio2 = new Racion(12);
let servicio3 = new Racion(14);

console.log(servicio1);
console.log(servicio2);
console.log(servicio3);

function Racion(hora) {
  switch (hora) {
    case 8:
      return {
        bebida: "café",
        comida: "cruasán",
        extra: "galleta"
      }
    case 12:
      return {
        bebida: "vermut",
        comida: "aceitunas"
      }
    case 14:
      return {
        plato1: "macarrones",
        plato2: "filete",
        postre: "manzana",
        bebida: "agua"
      }
    default:
      break;
  }
}
