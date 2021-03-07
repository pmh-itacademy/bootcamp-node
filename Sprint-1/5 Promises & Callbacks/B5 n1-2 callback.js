// Sprint 1 Bloc 5 Nivell 1 Ex 2 - Pilar Mingueza  

// Crear una arrow function que, rebent un paràmetre i una function callback, li passi a la funció un missatge o 
// un altre (que s'imprimirà per consola) en funció del paràmetre.

console.log("--- EJEMPLO SIMPLE ---");
const arrowFunc = (parametro, callback) => {
  if (parametro == "ok") {
    callback("parámetro ok");
  }
  else {
    callback("parámetro no es ok");
  }
}
const funcCallback = (mensaje) => console.log(mensaje);

arrowFunc("ok", funcCallback);
arrowFunc("no ok", funcCallback);

console.log("==========================");
console.log("--- SEGUNDO EJEMPLO ---");

const notasCurso = (asignaturas, callback) => {
  const notas = [];
  for (let i = 0; i < asignaturas; i++) {
    const nota = Math.floor((Math.random() * 10));    // calcular nota al azar
    notas.push(nota);
    if (nota < 2) {  // si sacas menos de un 2, estás expulsado
      callback(nota + ". Estás expulsado");
      return;
    }
  }
  return callback(null, notas);
}
notasCurso(3, (expulsado, calificaciones) => {
  if (expulsado) {
    console.log("Has sacado un " + expulsado);
  }
  else {
    console.log("Tus notas son: " + calificaciones);
  }
});
