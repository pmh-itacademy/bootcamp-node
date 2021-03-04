// Sprint 1 Bloc 4 Nivell 2 Ex 2 - Pilar Mingueza  

// Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat. 
// La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'. 
// Invocar el mètode decirNombre des de fora de la classe.

class Persona{
  constructor(nom){
    this._nom = nom;
  }
  decirNombre(){
    console.log(this._nom);
  }
}

let pepe = new Persona ("Pepe");

pepe.decirNombre();
