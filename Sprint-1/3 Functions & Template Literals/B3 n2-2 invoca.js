// Spint 1 Bloc 3 Nivell 2 Ex 2 - Pilar Mingueza 

// Invocar amb template literals

console.log(`Tu nombre completo es ${obtenerNombre()}.`);

function obtenerNombre() {
  let nombre = "Pepe";
  let apellido = "Pérez";
  return `${nombre} ${apellido}`;
}
