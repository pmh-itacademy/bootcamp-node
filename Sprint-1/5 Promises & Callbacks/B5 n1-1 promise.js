// Sprint 1 Bloc 5 Nivell 1 Ex 1 - Pilar Mingueza  

// Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. 
// Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas

let examen = new Promise( (resolve, reject) => {
  let nota;
  setTimeout( () => {                          // simular asincronía
    nota = Math.floor((Math.random() * 10));    // calcular nota al azar
    console.log(`Tu nota es ${nota}`);
    if (nota >= 5) {
      resolve("Has aprobado!");
    }
    else {
      reject("Has suspendido.");
    }
  }, 500);
});

examen
  .then((aprobado) => {
    console.log(aprobado);
  })
  .catch(suspendido => {
    console.log(suspendido);
  });

console.log("RESULTADO DEL EXAMEN");  // aparece primero, el código anterior espera la promise
