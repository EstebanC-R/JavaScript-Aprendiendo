// Acostumbrase a usar el LET en las variables es mucho mejor que usar var ya que es mas seguro 
// en cuanto a que no se puedan reasignar el valor de la variable.

/*------------------------------------------- ARRAY ------------------------------------------*/
let persona = ["Milton", 21, "Colombia"];
let frutas = ["Manzana", "Naranja", "Lima"];


// Si copias una posicion de un array que no esta definida dentro del contenido del array
// va a aparecer undefined devido a que el array no tiene esa posicion, las posiciones se empiezan desde 0.

document.writeln(persona[0] + "<br>" + "<br>");

/*------------------------------- ARRAY ASOCIATIVOS -----------------------------------*/

let pc1 = {
    nombre: "UsuarioPc",
    procesador: "Ryzen 5800",
    ram: "24 GB",
    espacio: "512 GB"
};

pc2 = ["ÜsuarioPc", "Ryzen 5800", "24 GB", "512 GB"];

document.writeln(pc1["ram"]+ "<br>"+ "<br>")

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

let frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
    el procesador es: <b>${procesador}</b> <br>
    la memoria es: <b>${ram}</b> <br>
    el espacio es de: <b>${espacio}</b> <br>`;

document.writeln(frase);

/*------------------------------------------- VERDADERA UTILIDAD EN EL MUNDO DE PROGRAMACIÓN ARRAY ------------------------------------------*/

/* ----------------------------------------- */
/* ARRAY: PROPIEDADES, ACCESO & PROGRAMACION */
/* ----------------------------------------- */

//=============================== 1. CONSTRUCTOR ARRAY() ===============================

const listaDeColores = Array('rojo', 'azul', 'morado', 'cafe')
console.log(listaDeColores)

const listaDeNumeros = Array(1, 2, 3, 4, 5)
console.log(listaDeNumeros)

// Basicamente tiene 10 espacios que estan vacios y cuando corre dice: 10 empty items
const listaDeUnNumero = Array(10)//NO SIRVE PARA UN UNICO ELEMENT
console.log(listaDeUnNumero)

console.log('-----------SEPARACIÓN-------------')

// ============================ 2. SINTAXIS LITERAL [] =================================

// Aqui se muestra un unico valor, no va a mostrar más, ya que solo tiene el 1
const arrayUnico = [1]
console.log(arrayUnico)

// Aqui este crea un array vacio sin elementos
const arrayVacio = []
console.log(arrayVacio)

// Este crea un array con tres datos en este caso strings:
const listaDeDeportes = ['futbol', 'voley', 'basquet']
console.log(listaDeDeportes)

// LITERALMENTE SE ESTA CREANDO UN ARRAY CON DATOS, OBJETOS(PROPIEDADES), OTRA LISTA Y POR ULTIMO MÁS DATOS
const arrayMixto = ['hola', 23, false, {
    nombre: 'Hola',
    edad: 27
},
['sdas', 25, true],
21.044
]

console.log(arrayMixto)

/* -------------------- */
/* ARRAY: ACCESIBILIDAD */
/* -------------------- */

console.log('------------------SEPARACIÓN------------------')


const listaDeFrutas = ['pera', 'manzana', 'mora', 'kiwi', 'fresa']
console.log('TAMAÑO:', listaDeFrutas.length) //TAMAÑO DE TODO EL ARRAY
console.log('TERCER ITEM:', listaDeFrutas[2]) //POSICION DOS CONTANDO DESDE 0

//COMRUEBA SI ES ARRAY - VERIFICAR UN ARRAY - Array.isArray()
console.log(Array.isArray(listaDeFrutas)) 

/* ------------------ */
/* ARRAY: MUTABILIDAD */
/* ------------------ */

// =============================================  MUTABILIDAD  =================================================

const listaDePaises = ['Colombia', 'Venezuela']
const nuevosPaises = listaDePaises.push('Ecuador') // SE LE AGREGA Ecuador a lista de paises
console.log('ORIGINAL: ',listaDePaises)

// ============================================  INMUTABILIDAD  ===============================================

// Basicamente creo una copia del listaDePaises original, Colombia, Venezuela y ecuador y le agrego Alemania y Rusia, pero no lo modifico porque basicamente se creo una copia
// con los datos agregados.
const otrosPaises = listaDePaises.concat('Alemania', 'Rusia') // el concat es para concatenar y no modifica el array directamente como se hace con el push
console.log('ORIGINAL:', listaDePaises) //NO CAMBIO EL ARRAY ORIGINAL.
console.log('NUEVO:', otrosPaises) //CREA UN NUEVO ARRAY.

//EJEMPLO:
// RECORRE TODA LA LISTA Y AGREGA SEGUN EL DATO QUE RECORRA, OSEA QUE SI HAY UN 1 DESPUES DE 2 POSICIONES HAY UN 3, SIGNIFICA QUE SERIA 4 Y ASI HASTA QUE TERMINE DE
// RECORRER TODA LA LISTA.
console.log('----------------------------------')
const numeroDel1al5 = [1, 2, 3, 4, 5]
let suma = 0

for(i = 0; i < numeroDel1al5.length; i++){
    suma +=  numeroDel1al5[i]
}

console.log('RESULTADO:', suma)

/* ----------------- */
/* METODO PUSH & POP */
/* ----------------- */

console.log('---------------------------')
//PUSH - MUTABLE
const listaDePalabras = ['hola', 'bebe', 'adios']
const nuevaPalabra = listaDePalabras.push('mor', 'ganoso')

console.log(listaDePalabras) //AGREGA UN NUEVO ELEMENTO AL FINAL.
console.log(nuevaPalabra) //DEVUELVE EL TAMAÑO, YA QUE EL PUSH ES COMO SI HICIERA INTERNAMENTE EL AGREGAR Y AL MISMO TIEMPO EL LENGTH

//POP - MUTABLE
const eliminarPalabra = listaDePalabras.pop() // Elimina el ultimo elemento de la lista, en este caso ganoso
console.log(listaDePalabras)
console.log(eliminarPalabra) // devuelve el ultimo elemento eliminado, en este caso ganoso

/* -------------------- */
/* METODO MAP & FOREACH */
/* -------------------- */

//METODO MAP - INMUTABLE
// Basicamente lo que hace es que recorre cada elemmento del array original, despues lo que hace 
// es crear una variable temporal la cual equivale al numero que esta recorriendo en el momento
// despues aplica la operacion que se le esta dando, numero * numero, y devuelve el resultado
// en un nuevo array sin modificar el original, devolviendo datos que se pueden utilizar.
console.log('-----------------------')
const listaNumeros = [1, 2, 3, 4, 5]
const numerosAlCuadrado = listaNumeros.map(numero => numero * numero)
console.log('ORIGINAL:', listaNumeros)
console.log('CUADRADO:',numerosAlCuadrado)

//METODO FOREACH - INMUTABLE
// Basicamente lo que hace el forEach es que por cada elemento que hay crea una variable temporal,
// animal, la cual itera en cada dato y lo muestra en consola, es como un tipo de for of.
// no devulve algo en si mismo, sino simplemente itera, a diferencia del map que si devuelve algo 
// utilizable en otras cosas.
console.log('-----------------------')
const listaDeAnimales = ['ballena', 'jirafa', 'camaleon', 'leon']
const iterarAnimales = listaDeAnimales.forEach(animal => console.log(animal))
//console.log(iterarAnimales)
console.log(listaDeAnimales)

console.log('----------------------------------------')
//EJERICIO 1 - CONVETIR DE FAHRENHEIT A CELCIUS -  C = 5/9 * (F -32)
//[32, 40, 70, 90, 585]
//Como se explico antes se devulve otro array con la operacion que se quiere hacer.
const temperaturaFahrenheit = [32, 40, 70, 90, 585]
const temperaturaCelsius = temperaturaFahrenheit.map(temperatura => 5/9 * (temperatura - 32) )
console.log(temperaturaCelsius)

console.log('----------------------------------------')
//EJERCICIO 2 - SUMA NUMEROS DE UN ARRAY [1, 2, 3, 4, 5]

const ArraySuma = [1, 2, 3, 4, 5]
let sum = 0

ArraySuma.forEach(numero => sum += numero) // se ayuda de la variable externa sum.
console.log('RESULTADO:', sum)

/* ---------------------- */
/* METODO FILTER & REDUCE */
/* ---------------------- */
console.log('----------------------------------------')
//FILTER - INMUTABLE
// FILTER se utiliza para seleccionar elementos especificos de un array segun la condicion que se define.
// extraer datos relevantes, limpiar informacion, filtrar objetos, crear subconjuntos.
// Basicamente lo que hace es crear una lista con los resutados de la condicion asignada en este caso
// par => par % 2 === 0, el resultado lo pone en un nuevo array si cumple con la condicion.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosPares = number.filter(par => par % 2 === 0)
console.log(number)
console.log(numerosPares)

console.log('----------------------------------------')
//REDUCE - INMUTABLE
// Se usa para tomar todos los elementos de un array y combinarlos en un solo valor.
// un numero (como una suma total), un string(como una frase concatenada), un objeto(como un resumen de datos), incluso otro array(como una version transformada).

// basicamente se tiene la lista de numeros, despues se crea otra constante a recibir los datos para crear una nueva lista pero con la condicion del .reduce()
// lo que se hace es definir variables temporales de esta forma tenermos a acumulador y valorActual, estos actuan de tal forma que en el acumulador es el que va
// a llevar la cuenta, despues el valorActual el que va a iterar sobre la lista y ultimo el 0, el cual es el valor en que va a iniciar el acumulador,
// de esta forma devuleve un unico elemento o valor, como se dijo puede ser numero, string, objeto, etc...
const numeroReduce = [1, 2, 3, 4, 5]
const sumaReduce = numeroReduce.reduce((acumulador, valorActual) => acumulador + valorActual, 0)

console.log(sumaReduce)

//EJEMPLO

// Se usa .reduce() para recorrer un array de palabras y construir un objeto donde cada palabra es una clave, 
// y su valor es cuántas veces aparece. En cada vuelta, si la palabra ya existe en el objeto (el acumulador), 
// se le suma 1; si no existe, se agrega con valor 1. Así, el acumulador no suma directamente, sino que lleva un 
// registro individual por palabra, como si fuera una tabla de conteo que se va llenando paso a paso. Al final, 
// devuelve ese objeto con todas las palabras y sus repeticiones.

const listaPalabras = ['parce', 'oe', 'oe', 'oe', 'oe', 'pues', 'oiga', 'oiga', 'oiga', 'parce']

const palabrasRepetidas = listaPalabras.reduce((acumulador, valorActual) => {
    if(acumulador[valorActual]){
        acumulador[valorActual]++
    }else{
        acumulador[valorActual] = 1
    }
    return acumulador
},{})

console.log(palabrasRepetidas)
console.log(listaPalabras)

/* ----------------------- */
/* METODO FIND & FINDINDEX */
/* ----------------------- */
console.log('---------------------------------')

// Para empezar los 2 son inmutables por lo que no modifican el array principal
// find = Busca el primer elemento que cumpla una condición. devuelve el valor del elemento encontrado relacionado a la condicion.
// si no encuentra nada devuelve undefined.

// findIndex = Busca el índice del primer elemento que cumpla una condición, devuelve el número de posición (índice) en el array, esto obvio que cumpla la condicion.
// si no existe te devulve -1.

// ninguno cumple la condicion.
//METODO FIND - INMUTABLE
const multiplosCinco = [5, 10, 1, 15, 20, 25, 30, 35, 40, 45, 50]

const primerNumeroMayorA35 = multiplosCinco.find(numero => numero > 100)
console.log(primerNumeroMayorA35)

console.log('---------------------------------')
//METODO FINDINDEX - INMUTABLE
const indexNumber = multiplosCinco.findIndex(numero => numero % 2 !== 0 && numero > 100 )
console.log(indexNumber)