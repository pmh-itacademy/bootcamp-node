// Sprint 1 Bloc 4 Nivell 1 Ex 1 - Pilar Mingueza  

// Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres

let num1 = 30;
let num2 = 27;

((par1, par2) => {
  console.log(par1 + par2);
})(num1,num2);