                                            /* OPERADORES DE ASIGNACIÓN */

/*                                                              -----------TABLA--------
                        Nombres                                         Abreciaciones               Significado
                        Asignación                                                  x = y                       x = y
                        Asignación de adicción                                      x += y                      x = x + y
                        Asignación de sustracción                                   x -= y                      x = x - y
                        Asignación de multiplicación                                x *= y                      x = x * y
                        Asignación de division                                      x /= y                      x = x / y
                        Asignación de resto                                         x %= y                      x = x % y
                        Asignación de Exponenciación                                x **= y                     x = x ** y
                        Asignación de desplazamiento a la izquierda                 x <<= y                     x = x << y
                        Asignación de desplazamiento a la derecha                   x >>= y                     x = x >> y
                        Asignación sin signo de desplazamiento a la derecha         x >>>= y                    x = x >>> y
                        Asignación AND                                              x &= y                      x = x & y
                        Asignación XOR                                              x ^= y                      x = x ^ y
                        Asignación OR                                               x |= y                      x = x | y

 */

/* SUMA */
let numero = 10;
numero += 5;

document.writeln(numero);  /* Esto sirve para por asi decirlo pintar el resultado en la pagina y no en la consola o como la alerta o el prompt */

/* ------------------------------------------------------------------------------------ */

/* RESTA */
let numero2 = 10;
numero2 -= 5;


document.writeln(numero2);

/* ------------------------------------------------------------------------------------ */

/* MULTIPLICACION */
let numero3 = 10;
numero3 *= 5;


document.writeln(numero3);

/* ------------------------------------------------------------------------------------ */

/* DIVISION */
let numero4 = 10;
numero4 /= 5;


document.writeln(numero4);

/* ------------------------------------------------------------------------------------ */

/* RESTO = Lo divide y nos dice el resto en este caso resto es igual a 0, porque 10/5 = 0, siempre es un numeero entero por lo que no puede ser decimal*/
let numero5 = 10;
numero5 %= 5;

document.writeln(numero5);

/* En este caso nos va a dar 2 debido a que como no puede dar un decimal nos deja el mas cercano a 50 en este caso 48 el resto seria 2 */

let numero6 = 50;
numero6 %= 6;

document.writeln(numero6);

/* ------------------------------------------------------------------------------------ */

/* EXPONENCIACION  X^2 BASICAMENTE*/
let numero7 = 10;
numero7 **= 2;


document.writeln(numero7);

/* ----------------------------------------------------------------------------------------- */

                                    /* OPERADORES ARITMÉTICOS */

/* ESTO ES MEJOR QUE LO VEAS EN EL ONENOTE ES UN POCO COMPLEJO */

/* Adicion = SUMA */

let numero8 = 10;

let numero9 = 5;

resultado = numero8 + numero9;
alert("resultado 1 = " + resultado);

/* ------------------------------------------------------------------------------------ */

/* DECREMENTO  = RESTA basicamente resta de 1 en 1, 10 pasa a 9 */

let numero10 = 10;

numero10--;
alert("resultado 2 = " + numero10);

/* Otra forma */
let numero11 = 10;

numero11--;

resultado = numero11;

alert("Otra forma del resultado 2 = " + resultado)

/* ------------------------------------------------------------------------------------ */

/* Division */

let numero12 = 10;

let numero13 = 5;

resultado = numero12 / numero13;
alert("resultado 3 = " + resultado);

/* ------------------------------------------------------------------------------------ */

/* EXPONENCIACIÓN */

let numero14 = 10;

let numero15 = 5;

resultado = numero14 ** numero15;
alert("resultado 4 = " + resultado);

/* ------------------------------------------------------------------------------------ */

/* INCREMENTO aumenta en 1 basicamente*/

let numero16 = 10;

numero16++;

resultado = numero16;
alert("resultado 5 = " + resultado);

/* ------------------------------------------------------------------------------------ */

/* REMAINDER / RESTO*/

let numero17 = 10;
let numero18 = 5;


resultado = numero17 & numero18;
alert("resultado 6 = " + resultado);

/* ------------------------------------------------------------------------------------ */

/* RESTA*/

let numero19 = 10;
let numero20 = 5;


resultado = numero19 - numero20;
alert("resultado 7 = " + resultado);

/* ------------------------------------------------------------------------------------ */

/* NEGACION UNARIA = BASICAMENTE VOLVERLO NEGATIVO AL VALOR */

let numero21 = 10;


resultado = -numero21;
alert("resultado 8 = " + resultado);

/* ------------------------------------------------------------------------------------ */

/* SUMA UNARIA = BASICAMENTE VOLVERLO POSITIVO AL VALOR */

let numero22 = 10;


resultado = +numero21;
alert("resultado 9 = " + resultado);