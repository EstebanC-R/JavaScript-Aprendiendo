

/* Si tuevieramos que llamar varias veces este codigo tendriamos que copiar una y 
otra vez el codigo para hacerlo el numero de veces que nosotros queremos que se ejecute */

let respuesta = prompt("¡Hola Milton! ¿Como fue tu día?");

if (respuesta == "bien" || respuesta == "Bien") {
    alert("Me alegro");
} else {
    alert("Que mal");
}

document.writeln("<br>");



/*------------------------------------- AHORA VEAMOS LAS DIFERENTES FORMAS DE CREAR UNA FUNCION -------------------------------------------------------------*/


/* ------------------------ Declaracion de funcion ------------------ */

/* Al igual que una variable las funciones tambien se declaran, aqui la estamos declarando */

function bien_o_no () {
    respuesta = prompt("¡Hola Milton! ¿Como fue tu día?");

    if (respuesta == "bien" || respuesta == "Bien") {
        alert("Me alegro");
    } else {
        alert("Que mal");
    }
}

/* Ahora simplemeente estamos llamando el nombre de la funcion y nos trae directamente lo que se
le asigno de valor a la funcion, osea la inicializacion, de esta forma ahorramos muchas lineas de codigo  */

//--------------> bien_o_no(); A esto se le llama llamar a la funcion

document.writeln(`<button onClick = "bien_o_no()" style = "border-radius: 5px; Background: #2AF; padding: 10px">Funcion Saludar: Declaracion de funcion</button> <br><br>`);


/* ------------------------ Asignandolas en variables ------------------ */


// Esta forma no me gusta tanto, ademas de que no se suele utilizar


despedir = function () {
    respuesta = prompt("¡Hasta luego!");

    if (respuesta == "chao" || respuesta == "hasta luego" || respuesta == "Hasta luego" || respuesta == "Chao") {
        alert("Chiao Bambino");
    } else {
        alert("Despues me dices");
    }
}

//--------------> despedir(); A esto se le llama llamar a la funcion
document.writeln(`<button onClick = "despedir()" style = "border-radius: 5px; Background: #FA3; padding: 10px">Funcion Despedir: Asignacion de Funcion en Variables</button> <br><br>`);

/* --------------------------------------------------------------------- RETURN --------------------------------------------------------------------------- */

/* 
    El return le dice a la variable el tipo de dato que va a ser, ya que la funcion tiene codigo pero 
    al definirla como insulto = insurlar(), no entiende porque no es un numero, ni booleano, ni String, entonces
    esto solo le dice a la variable que tipo de dato es. 

    Ademas el return es parecido al brake, pero para las funciones, ya que esta indica cuando finaliza, si pones
    codigo seguido de este, pues lo que va a suceder es que no se va a poder ejecutar porque ya le diste una finalizacion
    a la funcion con el return que como se dijo parece un break

*/

function insultar (){
    alert('Feo')
    return "El insulto se ejecutó correctamente." 
}

let insulto = insultar();

document.writeln("Lo que Retorna es: " + insulto + " y la funcion es: " + ` <button onClick="insultar()" style = "border-radius: 5px; Background: #f56080ff; padding: 10px"> RETURN en Funcion </button> <br> <br>`);


/* --------------------------------------------------------------------- PARAMETROS --------------------------------------------------------------------------- */


let x = 32;
let y = 12;

let coord = x + y;

document.writeln("Las coordenadas son: " + coord + "<br>" + "<br>");

// Lo que se quiere explicar es que si quieres cambiar los valores pero 
// con la funcion, tendrias que pegar el codigo una y otra vez simplemente 
// cambiandole las variables num1 y num2 para que muestre otro resultado

function resta () {
    let num1 = 32;
    let num2 = 12;
    let result = num1 - num2;
    alert("El resultado es: " + result);
}

document.writeln(`<button onClick="resta()" style = "border-radius: 5px; Background: #CCA9DD; padding: 10px"> Observa la Funcion Resta con sus num1 y num2 ya definidos en la funcion </button> <br> <br>`);

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */   

                                             /* MUCHO MEJOR Y MAS DINAMICO */

// PERO con los parametros lo podemos hacer sin necesidad de repetir y repetir
// Seria de la siguiente forma: llamas a la funcion y le asignas los valores de las 2 variables ya antes declaradas al inicio de la funcio

function suma(num1, num2) {   // -----------------> Basicamente Estas Declarando las funciones que vas a utilizar: num1 y num2
    let result = num1 + num2;
    return result;
}

// --------------> suma(32, 12) Despues las inicializas al llamar la funcion y de esta forma no lo haces como en la funcion resta.

let resultado = suma(12, 12); // -----> lo que sucede aqui es que basicamente la suma(12, 12) pasa a ser el return

document.writeln(`<button onClick="mostrarResultado()" style = "border-radius: 5px; Background: #c4f3b8ff; padding: 10px"> Observa la Funcion Suma con sus num1 y num2 definidos cuando se llama a la funcion suma(12, 12) </button> <br> <br>`);

// Función intermedia para mostrar el valor de la variable, ya que no se puede llamar como se haria con una funcion, de las anterior
// forma que hemos visto.
function mostrarResultado() {
    alert(`El resultado es: ${resultado}`);
}

/* ------------------------------------------------------------- Creando una Verdadera Funcion Saludar ------------------------------------------------------------ */ 

// IMPORTANTE : Las funciones tienen un Scope GLOBAL, las variables que se crean dentro de las funciones tienen un Scope REGIONAL osea que se limita al bloque, SIEMPRE PONER LET 
// PARA HACER QUE SI SEA REGIONAL Y NO GLOBAL, PORQUE SEE

// FORMA 1: Declaracion de Función

function saludar (nombre) {
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.writeln(frase)
}

saludar("Milton")

document.writeln("<br>");

// FORMA 2: Expresion de Función

const saludar2 = function(nombre) {
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.writeln(frase)
}

saludar2("Yony")

document.writeln("<br>");

// FORMA 3 FUNCION FLECHA
// Si solo utilizamos UNA variable no necesita los parentesis, por lo que seria const saludar3 = nombe => {}
// Tambien tiene la ventaja de que si tenemos solo una expresion o linea de codigo tenemos la venteja de hacerlo asi const saludar3 = nombe => document.writeln(frase);
// sin llaves {}

const saludar3 = (nombre) => {
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.writeln(frase)
}

saludar3("Yane")


/* ----------------------------------- */
/*      FUNCIONES PURAS E IMPURAS      */
/* ----------------------------------- */


/* SIDE EFFECT O EFECTO SECUNDARIO:

1. Modificamos variables globales
2. Modificamos Paramétros
3. Solicitudes HTTP
4. Imprimir en Pantalla o Consola
5. Manipulacion del DOM
6. Obtener la hora actual

*/

function suma(a, b){
    return a + b; // PURA
}

function suma(a, b){
    console.log("Resultado: " ) // IMPURA
    return a + b;
}

let total = 0;
function sumaConEfecto(a){
    total += a;     // IMPURA
    return total
}

function elevarAlCuadrado(x){
    return x * x;    // PURA
}

function añadirDiez(y){
    return y + 10; // PURA
}

// COMBINACION DE DOS FUNCIONES PURAS

const numberOne = 5;
const finalResult = añadirDiez(elevarAlCuadrado(numberOne)); // PURA
console.log(finalResult);




