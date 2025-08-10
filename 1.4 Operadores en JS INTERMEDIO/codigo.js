/*------------------------------------------------------------- OPERADORES DE COMPARACIÓN -----------------------------------------------------------*/

/* La tabla de este es un poquito enredada por lo que mejor lo explico poniendolo todo aquí, FUNCIONAN TAMBIEN PARA TEXTO, PERO LO PONEMOS CON NUMEROS EN ESTE CASO*/
document.writeln(`<br><br><br><br> <h2>(Mirar la Consola Para Operadores de Comparación)  :o  ------------------------------>></h2>`);

const numero1 = 23;
const numero2 = 13;
const numero3 = 23;
const texto1 = "23";
/* ---------------------------------------------------------------------------------------------------------*/


/* IGUALDAD: este compara que sea el mismo valor */
console.log(`El de IGUALDAD 23 igual a 13 es: ${numero1 == numero2}`);
console.log(`El de IGUALDAD 23 igual a 23 es: ${numero1 == numero3}`);

/* IGUALDAD ESTRICTA: este compara si es el mismo tipo de dato y el mismo valor */
console.log(`El de IGUALDAD ESTRICTA texto 23 igual a 13 es: ${texto1 === numero2}`);
console.log(`El de IGUALDAD ESTRICTA texto 23 igual a 23 es: ${texto1 === numero3}`);
console.log(`El de IGUALDAD ESTRICTA 23 igual a 23 es: ${numero1 === numero3}`);


/* ---------------------------------------------------------------------------------------------------------*/

/* DESIGUALDAD: Basicamente le dices (   este           !=          a este   )
                                                    no es igual
*/

console.log(`El de DESIGUALDAD 23 es diferente a 13: ${numero1 != numero2}`);
console.log(`El de DESIGUALDAD 23 es diferente a 23: ${numero1 != numero3}`);


/* DESIGUALDAD ESTRICTA: este compara si no es estrictamente igual, si no es el mismo tipo ni el mismo valor*/
console.log(`El de DESIGUALDAD ESTRICTA texto 23 es diferente a 13: ${texto1 !== numero2}`);
console.log(`El de DESIGUALDAD ESTRICTA texto 23 es diferente a 23: ${texto1 !== numero3}`);
console.log(`El de DESIGUALDAD ESTRICTA 23 es diferente a 23: ${numero1 !== numero3}`);


/* ---------------------------------------------------------------------------------------------------------*/

/* MAYOR QUE */
console.log(`El numero 23 es MAYOR QUE el numero 13: ${numero1 > numero2}`);
console.log(`El numero 23 es MAYOR QUE el numero 23: ${numero1 > numero3}`);


/* MAYOR O IGUAL QUE */
console.log(`El numero 23 es MAYOR O IGUAL que el numero 13: ${numero1 >= numero2}`);
console.log(`El numero 23 es MAYOR O IGUAL que el numero 23: ${numero1 >= numero3}`);


/* ---------------------------------------------------------------------------------------------------------*/
/* MENOR QUE */
console.log(`El numero 23 es MENOR QUE el numero 13: ${numero1 < numero2}`);
console.log(`El numero 23 es MENOR QUE el numero 23: ${numero1 < numero3}`);


/* MENOR O IGUAL QUE */
console.log(`El numero 23 es MENOR O IGUAL que el numero 13: ${numero1 <= numero2}`);
console.log(`El numero 23 es MENOR O IGUAL que el numero 23: ${numero1 <= numero3}`);


/*--------------------------------------------------------------------- OPERADORES LOGICOS ---------------------------------------------------------*/

document.writeln(`<br><br><br><br> <h1>OPERADORES LOGICOS</h1>`);


valor1 = 12;
valor2 = 24;

document.writeln(`<h1>AND (&&) Lógico</h1>`);

/* SE CUMPLE EL && */
document.writeln(`<h4>1</h4>`);
afirmacion1 = valor1 < valor2; 
afirmacion2 = valor1 != valor2;
document.writeln(afirmacion1 && afirmacion2 + "<br>"); // Si las dos condiciones se cumplen entonces es true



/* NO SE CUMPLE EL && */
document.writeln(`<h4>2</h4>`);
afirmacion1 = valor1 > valor2; 
afirmacion2 = valor1 != valor2;
document.writeln(afirmacion1 && afirmacion2 + "<br>"); // Si hay una condicion que no se cumple entonces es false

/* ---------------------------------------------------------------------------------------------------------*/
document.writeln(`<h1>OR (||) Lógico</h1>`);

/* SI HAY UNA VERDADERA ES VERDADERO || */
document.writeln(`<h4>1</h4>`);
afirmacion1 = valor1 > valor2; 
afirmacion2 = valor1 != valor2;
document.writeln(afirmacion1 || afirmacion2 + "<br>"); // Si tan solo hay 1 verdadera se cumple


/* SI LAS DOS SON FALSAS ENTONCES ES FALSA || */
document.writeln(`<h4>2</h4>`);
afirmacion1 = valor1 > valor2; 
afirmacion2 = valor1 == valor2;
document.writeln(afirmacion1 || afirmacion2 + "<br>"); // si las dos son falsas devuelve false


/* ---------------------------------------------------------------------------------------------------------*/
document.writeln(`<h1>NOT (!) Lógico</h1>`);

/* BASICAMENTE CONVIERTE A FALSO O LO NIEGA ! */
document.writeln(`<h4>1</h4>`);
afirmacion1 = valor1 < valor2; // Esto seria true, ya que 12 es menor a 24
document.writeln(!afirmacion1 + "<br>"); // ! niega que sea verdadero y lo coloca como falso

/* ---------------------------------------------------------------------------------------------------------*/

document.writeln(`<h1>MEZCLA</h1>`);

/* MEZCLAMOS TODO EN EL MISMO document. */
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

document.writeln(`<h4>1</h4>`);
document.writeln(valor1 < valor2 || valor1 == valor2 + "<br>");


document.writeln(`<h4>2</h4>`);
operacion = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);
document.writeln(operacion + "<br>");


document.writeln(`<h4>3</h4>`);
operacion2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);
document.writeln(operacion2 + "<br>");

