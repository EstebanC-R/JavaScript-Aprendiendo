// comentario

/* Comentario */

console.log("Hola! a todos.");

/*  -------------------------------------------------------------------------------------------------------------------- */
/* Varibles  */

/* Basicamente las varibles son un espacio en memoria donde se guardan los valores que se le asignan a las variables.
El tipo de dato que se asigna a una variable determina el tipo de dato que se puede asignar a la variable. */
/*  -------------------------------------------------------------------------------------------------------------------- */



let cofreDeAndy = 'Woody';

let primerJugueteDeAndy = 'Buzz';

let urlInstagramNestor = 'Instragram';

let comillas = "cositas 'Cosas'";

let cedulaDelUsuario = '24342342315';

console.log(`Estas son backticks para poner una varible desde adentro: ${comillas}`);

// la variable Let Puede cambiar
let contador = 0;

// Por otro lado la variable Const no pueden cambiar con el tiempo

const pi = 3.1415;





/* TIPOS DE DATOS PRIMITIVOS & COMPLEJOS */

/* 
PRIMITIVOS:
- STRING
- NUMBER
- BOOLEAN

LOS TRES ANTERIORES SON LOS MÁS CONOCIDOS

- NULL
- UNDIFINED
- SYMBOL
- BIGINT

LOS TIPOS DE DATOS COMPLEJOS SON 3:

COMPLEJOS:
- OBJECT
- ARRAY
- FUNCTION
*/


/* Un OBJETO - OBJECT es una colección de pares clave-valor, y siempre se escribe entre llaves {}. */
let persona2= {
    nombre: 'juan',
    edad: '21'
};

/* El typeof devuelve el tipo de dato de una variable. */

console.log(typeof persona2)

let animal = ['pez', 'gato', 'perro'];

// SINTAXIS LITERAL
let persona = ['milton', 'Kellys', 'manuela'];

// CONSTRUCTOR ARRAY
const listaDeDlores = Array('rosa', 'margarita', 'tulipan');

/* para un array no se utiliza typeof sino el constructor Array */
console.log(Array.isArray(listaDeDlores));

const verPersona = persona[0];

console.log(verPersona);


/* ---------------------------------------CONCATENACION----------------------------------------- */

let stringUno = 'hola';
let stringDos = 'como estas';
let stringTres = 'bien';
let stringCuatro = `gracias ${stringTres}`;

console.log(stringUno, stringDos,stringCuatro);
console.log(stringUno + ' ' + stringDos + ' ' + stringCuatro);


let frase = 'Si hay sol, hay PLAYA, hay ALCOHOL, hay guayabo'
console.log(frase.length); // ESTO ES EL TAMAÑO DE LA FRASE
console.log(frase.toLocaleLowerCase()); // Esto es para convertir a minusculas
console.log(frase.toUpperCase()); // Esto es para convertir a mayusculas
console.log(frase.substring(27, 47)); // Esto es para extraer una parte de la frase
console.log(frase.substring(27, frase.length)); // toma una parte de la frase, frase.length es el tamaño total de la frase