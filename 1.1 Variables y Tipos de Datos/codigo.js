                                        /* TIPOS DE DATO */


/* String hay 3 formas */

String = 'Cadena de Texto'; // Comillas simples
String = "Cadena de Texto"; // Doble comillas
String = `Cadena de Texto`; // Backticks

/* Number*/

Number = 19;

/* Boolean */
Boolean = true;
Boolean = false;

/* ------------------------------------------------------------------------------------------*/


/* Las variables se pueden declarar, inicializar y modificar */

/* Hay 3 formas de declararlas */

/* var, let y const */

/* El scope es basicamente a lo que esta limitado el bloque en html para que sea 
sencillo de entender seria algo como tener un div con la clase hola, pues el scope
de este seria hasta el cierre de este mismo. */

/* divhola
    form class = 'scope'
        inp
        inp
        inp
    form/
    h1
div/hola */

/* 
var: Es el método más antiguo. Tiene un scope (alcance) de función o global y permite re-declaraciones. No es muy recomendado debido a posibles problemas de mantenimiento.

let: Introducido en ES6, tiene un scope limitado a bloques ({}). Es más seguro que var ya que evita re-declaraciones y errores relacionados con el hoisting.

const: También limitado a bloques, pero se usa para variables cuyo valor no va a cambiar (constantes). Aunque no puedes reasignar el valor, los objetos o arreglos declarados con const sí pueden modificarse internamente. ES IMPORTANTE QUE ESTA VARIABLE SE DECLARE E INICIALICE EN LA 
MISMA LINEA YA QUE SI SE DECLARA Y SE INICIALIZA POR SEPARADO NO VA A FUNCIONAR

(LET Y VAR SON LAS UNICAS QUE SE PUEDEN MODIFICAR DESPUES DE SER DECLARADAS, YA QUE CONST ES UNA CONSTANTE)

*/
var numero1 = 15;

const nombre2 = "Milton";
alert(nombre2);

    recipiente = "papel";
/* Variable    =  Asignacion de Variable */


/* ------------------------------------------------------------------------------------------*/

                                            /* COMO DECLARAR, INICIALIZAR Y MODIFICAR?? */
let numero3 ; /* Declarar significa darle el alcance que este va a tener, siendo var, let o const */
numero3 = 29; /* De esta forma se inicializa ya que le estamos dando el valor a la variable ya declarada */

numero3 = 21; /* Aqui se modifica la variable numero3 let */

let numero4 = 30; /* Tambien se puede declarar e inicializar en la misma linea */



var numero5; /* Se declara */

numero5 = 2; /* Se inicializa */

numero5 = 32; /* Aqui se modifica la variable numero2 var */

var numero6 = 4; 


const numero7 = 3; /* Como se dijo antes esta debe ser declarada e inicializada en la misma linea 
ya que no funciona si primero la declaras y despues la inicializas, ademas es la unica que no se puede modificar
 */


/* (ADEMAS SI QUIERES DECLARAR VARIAS VARIABLES EN UNA SOLA LINEA SERIA ASI:) */

let niño1 = "Gabriel", niño2 = "Antonio", niño3 = "Mauricio";
console.log("Hola a " + niño1 + ",", niño2+ " y ", niño3+"");

/* ------------------------------------------------------------------------------------------*/
                                            /* undefined, null y NaN */

/* undefined: Indica que una variable ha sido declarada pero no se le ha asignado un valor. También aparece cuando una función no tiene un return explícito o cuando un objeto no tiene una propiedad solicitada. */

let x; // `x` es undefined porque no tiene valor.
console.log(x); // undefined


/* null: Es un valor explícito que indica la ausencia intencional de un objeto o valor. Lo asignas manualmente cuando quieres indicar que una variable está vacía. O que directamente no existe la variable*/


let y = null; // `y` intencionalmente no tiene un valor.
console.log(y); // null


/* NaN (Not a Number): Indica un valor que no es numérico como resultado de una operación matemática inválida, como dividir una cadena de texto por(*) un número. */


let z = "hello" / 2; // Esto no tiene sentido matemáticamente.
console.log(z); // NaN

/* ------------------------------------------------------------------------------------------*/

                                    /* PRUEBAS CON prompt */

/* es una herramienta para interactuar con el usuario a través de un cuadro de diálogo, si quieres verlo, tienes que eliminar todo lo anterior y correrlo, ya que hay demasiadas
cosas y pos no lo corre */

prompt("Hola Cabron");

/* Ahora si se quiere guardar la respuesta del cuadro de dialogo lo que se puede hacer es
almacenar este prompt en una variable así: */

let alias = prompt("Cual es tu nombre?");

alert("Hola " + alias); 
/* Va a mostrar el nombre que pusiste en el prompt junto con el hola del alert */
