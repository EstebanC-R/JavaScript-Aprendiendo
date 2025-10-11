// RECUERDA LAS SIGUIENTES 2 FRASES, PARA PODER ENTENDER.

// isNaN dice la verdad cuando NO es un número.
// !isNaN dice la verdad cuando SÍ es un número.
// Number.isNaN dice la verdad solo cuando el valor ES exactamente NaN (sin convertir nada).

// Tambien recuerda que isNaN intenta transformar el valor en un número.



console.log("1: ",typeof NaN); // Not a Number
// Creía que era un booleano pero al parecer dice que es number

console.log("2: ",NaN === NaN);
// No tiene sentido comparar 2 cosas indefinidas por lo que False

console.log("3: ",isNaN("Hola"));
// True ya que isNaN dice la verdad cuando no es un número.

console.log("4: ",isNaN("123"));
// False ya que dice la verdad cuando NO es un número.

console.log("5: ", isNaN("123abc"));
// True ya que dice la verdad cuando NO es un número y al no poderlo convertir devuelve un true

let valor = "42";
if (!isNaN(valor)) {
    console.log("6: Es un número válido");
} else {
    console.log("6: No es un número");
}

// True ya que !isNaN dice la verdad cuando SI es un número

let valor2 = "42abc";
if (!isNaN(valor2)) {
    console.log("7: Es un número válido");
} else {
    console.log("7: No es un número");
}
// False ya que !isNaN dice la verdad cuando SI es un número, pero al intentarlo transformar y no poder este termina dando FALSE


let resultado = 0 / 0;
console.log("8: ",isNaN(resultado));
console.log("8: ",Number.isNaN(resultado));

// Sería True ya que isNaN dice la verdad cuando NO es un número, y 0 / 0 es undefined.
// Al igual que el primer console.log tambien sería un True ya que no es un número, pero la diferencia es que Number. es como el operador estricto ===, este 
// no transforma tal como si lo intenta el isNaN.


console.log("9: ",isNaN(undefined));
console.log("9: ", Number.isNaN(undefined));
// TRUE ya que isNaN dice la verdad cuando NO es un número, y si es undefined lo transforma a NaN
// El segundo tambien es FALSE por que isNaN dice la verdad cuando NO es un número pero el Number.isNaN no lo transforma por lo que nunca es NaN, y termina siendo un valor
// no asignado

console.log("----------------------------------------------TEST 1--------------------------------------------");

function esNumeroValido(valor) {
    if (!isNaN(valor) && valor !== "") {
        return true;
    }
    return false;
}
// Estoy haciendolo sin ver los resultados:
console.log(esNumeroValido("15"));      // True
console.log(esNumeroValido("hola"));    // False
console.log(esNumeroValido("15abc"));   // False
console.log(esNumeroValido(""));        // False
console.log(esNumeroValido(25));        // True


console.log("----------------------------------------------TEST 2--------------------------------------------");

// por lo que si dice isNaN con los siguientes ejemplos voy a hacerme un auto test a ver si aprendi algo:
function esNoNumero(valor) {
    if (isNaN(valor) || valor === "") {
        return true;
    }
    return false;      
}

// Pruebas
console.log(esNoNumero("15"));      // False
console.log(esNoNumero("hola"));    // True
console.log(esNoNumero("15abc"));   // True
console.log(esNoNumero(""));        // True
console.log(esNoNumero(25));        // False


