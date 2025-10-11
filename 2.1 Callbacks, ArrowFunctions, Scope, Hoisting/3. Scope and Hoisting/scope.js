
/* ----------------------------------------------------------------------- */
/* ----------------------------- Scope ------------------------------- */
/* ----------------------------------------------------------------------- */


console.log(`
    /*-----------------------------------------------------------------*/
        ------------------------ Scope ------------------------
    /*-----------------------------------------------------------------*/
`);

// 1. Declara una variable global y una local, muestra dónde puedes acceder a cada una.

let varibleGlobal = "Soy la variable Global 🌍";
function variables(){
    let local = ["Soy la variable Local 🏠"]; // => La variable local solo se puede utilizar dentro del entorno en el que se creó
    let ambosTipos = local.concat(varibleGlobal) // => se puede utilizar en cualquier parte del codigo, ya que como su nombre lo dice es GLOBAL

    return console.log(ambosTipos);
}

console.log("EJERCICIO 1: Ambos tipos: 🌍  🏠");
variables();
console.log("EJERICICIO 1: locas no se puede utilizar debido a que es solo dentro del entorno en el que se creó.",);
console.log();


// 2. Usa un if con let y var y observa las diferencias.

if(true){
    var suma = 3;
    let resta = 4;

    // console.log(resta); => Se puede  llamar aqui ya que esta dentro de su bloque asignado osea el if.
}
console.log(`
                                EJERCICIO 2

    Ya lo sabia pero nunca esta demás repasarlo, aqui lo que esta 
    sucediendo que que basicamente let es una variable de bloque,
    mientras que var, es una variable con scope de funcion y al no tener una 
    funcion asignada pasa a convertirse en una global, es poco recomendable 
    utilizar var ya que puede causar bugs debido a que esta se puede redaclarar y 
    al mismo tiempo  reasignar.

    El resultado de var es = ${suma}.
`);
//console.log(resta); => provoca un error


// 3. Crea una función dentro de otra y prueba qué variables puede usar cada una.

function primeraFuncion(){
    let hola = "HOLA.";
    var adios = "ADIOS.";
    const saludo = "Te estoy SALUDANDO."
    
    console.log("Aqui se pueden utilizar todas ya que estan en un mísmo entorno.");
    // console.log(hola2); => No es posible por lo explicado en el punto 2.
    // console.log(saludo2); => Sucede lo mismo para const, ya que es de bloque
    // console.log(adios2); => Con esto descubrimos algo interesante que es lo siguiente:
    
    // Lo que pasa es que var es de funcion, por otro lado let y const son de bloque, pero si estas se crean
    // fuera de la segunda funcion va a crear un efecto "escalera" ya que las siguientes funciones
    // pueden utilizarlas y las variables creadas dentro de las siguientes funciones, las cuales a su vez
    // estan dentro de la primera funcion, NO VAN A PODER darle "permiso" a las funciones anteriores ya que
    // como se ha dicho var es a nivel de funcion y let y const a nivel de bloque, como no cumplen estas condiciones
    // pues se termina denegando el permiso de llamada a sus padres funciones. 
    function segundaFuncion(){
        console.log("Aqui dentro de la segunda funcion la cosa cambia.");
        console.log("Puedo seguir utilizando todas pero con 1 excepción.");
        console.log("Si creo una variable let y otra const no la puedo utilizar en la primera función");

        let hola2 = "Este es el segundo HOLA."
        const saludo2 = "Este es el segundo SALUDO."
        var adios2 = "Este es el segundo ADIOS."
    }
}

// 4. Declara una variable con el mismo nombre dentro y fuera de una función y observa qué valor imprime.
// Va a suceder lo mismo que en el punto 3, la variable que este dentro de la función va a tener preferencia
// sobre la variable que este fuera de la función, ya que la variable dentro de la función tiene un scope local
// y la variable fuera de la función tiene un scope global.

let nombre = "Soy una variable Global con el nombre de nombre";
var apellido = "Soy una variable Global con el nombre de apellido";

function nombreFuncion(){
    let nombre = "Soy una variable Local con el nombre de nombre";
    console.log("EJERCICIO 4: ", nombre);
}

nombreFuncion();
console.log("EJERCICIO 4: ", nombre);

// 5. Usa un for con let y var y analiza si las variables se pueden usar fuera del bucle.
console.log();
console.log();
console.log("EJERCICIO 5:");
for (var i = 0; i < 3; i++) {
    console.log("var i dentro del for:", i);
}

for (let j = 0; j < 3; j++) {
    console.log("let j dentro del for:", j);
}

console.log("var i fuera del for:", i); // accesible por ser var
//console.log("let j fuera del for:", j); // error por ser let

// 6. Crea una función que tenga variables globales, locales y de bloque, e imprime cuáles son accesibles.
console.log();
console.log();

// Variable global
var globalVar = "Soy global";

function analizarScope() {
    console.log("EJERCICIO 6: Análisis de Scope");
    // Variable local (vive dentro de la función)
    let localLet = "Soy local con let";
    var localVar = "Soy local con var";

    if (true) {
        // Variable de bloque (vive solo dentro del if)
        let bloqueLet = "Soy de bloque con let";
        var bloqueVar = "Soy de bloque con var";

        console.log();
        console.log("Dentro del bloque:");
        console.log(globalVar);   // ✅ accesible
        console.log(localLet);    // ✅ accesible
        console.log(localVar);    // ✅ accesible
        console.log(bloqueLet);   // ✅ accesible
        console.log(bloqueVar);   // ✅ accesible
    }
    console.log();
    console.log("Fuera del bloque pero dentro de la función:");
    console.log(globalVar);     // ✅ accesible
    console.log(localLet);      // ✅ accesible
    console.log(localVar);      // ✅ accesible
    // console.log(bloqueLet);  // ❌ Error: no accesible
    console.log(bloqueVar);     // ✅ accesible (por el comportamiento de var)
}

analizarScope();
console.log();
console.log();
console.log("Fuera de la función:");
console.log(globalVar);       // ✅ accesible
// console.log(localLet);     // ❌ Error: no accesible
// console.log(localVar);     // ❌ Error: no accesible
// console.log(bloqueLet);    // ❌ Error: no accesible
// console.log(bloqueVar);    // ❌ Error: no accesible

// 7. Simula una función con variables que “sombren” a otras (shadowing) y analiza qué pasa.
console.log();
console.log();
console.log("EJERCICIO 7: Shadowing");

let nombre2 = "Milton"; // Variable global

function saludar() {
  let nombre2 = "Esteban"; // Variable local que “sombrea” a la global
  console.log("Dentro de la función:", nombre2); // 👉 Esteban
}

saludar();
console.log("Fuera de la función:", nombre2); // 👉 Milton