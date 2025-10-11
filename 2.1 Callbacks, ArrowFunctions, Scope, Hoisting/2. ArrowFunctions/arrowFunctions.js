
/* ----------------------------------------------------------------------- */
/* ----------------------------- Arrow Functions ------------------------------- */
/* ----------------------------------------------------------------------- */


console.log(`
    /*-----------------------------------------------------------------*/
        ------------------------ Arrow Functions ------------------------
    /*-----------------------------------------------------------------*/
`);

// 1. Convierte una función tradicional en arrow.
function normal(num1, num2){
    return num1 + num2;
}

const normalArrow = (a, b) => a + b;

console.log("EJERCICIO 1: Funcion normal = ", normal(1,5));
console.log("EJERCICIO 1: Arrow Function = ", normalArrow(2, 6));

// 2. Crea una arrow function que reciba un número y devuelva su cuadrado

const cuadrado = x => x ** 2;

console.log("EJERCICIO 2: Exponenciación = ", cuadrado(9));

// 3. Crea una arrow que sume tres números.

const suma = (a, b, c) => a + b + c;
console.log("EJERCICIO 3: Suma de 3 datos =", suma(20, 3, 52));

// 4. Usa una arrow para filtrar los números pares de un arreglo.

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numPares = arreglo.filter(x => x % 2 === 0);
console.log("EJERCICIO 4: Filtrar pares = ", numPares);

// 5. Usa map() con una arrow function para duplicar todos los elementos de un array.

const duplicarNum = arreglo.map(x => x * 2);
console.log("EJERCICIO 5: Duplicar números = ", duplicarNum);

// 6. Usa forEach() con una arrow que imprima cada elemento.

console.log("EJERCICIO 6: Cada elemento =");
arreglo.forEach(x => console.log(x));
