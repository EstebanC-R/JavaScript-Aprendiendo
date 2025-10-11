// 1. Declara una variable con var después de usarla y observa qué pasa.

// Se reasigna.

var hola = 3;
var hola = 2;
console.log("EJERCICIO 1: ", hola);

// 2. Haz lo mismo con let y const y compara el resultado.

// Ya se habia explicado esto en scope.js pero lo vuelvo a decir
// let se puede reasignar pero no reedeclarar y const no se puede ni reasignar ni reedeclarar, pero si se puede
// modificar con metodos mutables o inmutables.
console.log("EJERCICIO 2: ");

let saludo = 2;
const adios = 3;
// let saludo = 4; => ❌ error por reedeclaración
console.log("-----------------------");

// 3. Usa una función tradicional antes de declararla.
// Por el hoisting se eleva y si se puede utilizar;

tradicional();
function tradicional(){
    return console.log("EJERCICIO 3: ");
}

// 4. Usa una función flecha antes de declararla.
// No se puede utilizar debido a que const y let de la funcion flecha espera la llamada, por lo que no se eleva

// funcionFlecha();
const funcionFlecha = () => console.log("EJERCICIO 4: ");


// 5. Declara una variable con var y asígnale una función después de usarla.
console.log("EJERCICIO 5: ");
// Aunque var se eleva (hoisting), su valor inicial es undefined.
// Entonces, cuando haces funcionVar(); antes de asignarle una función, estás intentando ejecutar undefined → Error: funcionVar is not a function.


var funcionVar;      // Declaración con var
// funcionVar();        // ❌ Se intenta usar antes de asignar (esto da error)

funcionVar = function() {
    console.log("Función asignada después");
};

// 6. Crea un ejemplo donde una variable global y una local con var causen confusión.

console.log("EJERCICIO 6: ");

var numero = 1; // 🌍 Variable global

function mostrarNumero() {
  console.log(numero); // ¿Qué imprime?
  var numero = 2;      // 🏠 Variable local
  console.log(numero); // 👉 2
}

mostrarNumero(); // Imprime 'undefined' por hoisting: la variable local se eleva sin valor


// 7. Crea un bloque con let y var y explica qué se eleva y qué no.

// `var` se eleva (hoisting), lo que significa que su declaración se registra al inicio del bloque,
// pero su valor no se asigna hasta que se ejecuta la línea correspondiente. Por eso, al acceder antes,
// devuelve `undefined`.

// `let` también se registra al inicio, pero entra en una "zona muerta temporal" (TDZ),
// lo que impide acceder a ella antes de su inicialización. Si lo intentas, lanza un ReferenceError.

// Además, `var` tiene scope de función, mientras que `let` tiene scope de bloque.


const EJERCICIO_7 = () => {
  console.log(hola);
  console.log(adios);
  
  let hola = "Hola";
  var adios = "Adios";
};

EJERCICIO_7();