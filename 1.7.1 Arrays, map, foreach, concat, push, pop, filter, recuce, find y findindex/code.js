/* Antes de empezar es necesario entender que todos los metodos de las listas se rigen por (valor, indice, arrayCompleto), me refiero a 
forEach, map, filter, find y findIndex, el unico que no se rige por esto es el reduce ya que este se rige por (acumulador, valor, indice) */


/* ------------------------------ NIVEL 1 ------------------------- */


/* ---------------------- .PUSH() MUTABLE --------------------*/

// Ejercicio 1: Básico
let frutas = ['manzana', 'banana'];
// Agrega 'naranja' y 'uva' al array
// Tu código aquí:

const elPush = frutas.push("naranja", "uva"); 
frutas.push("naranja", "uva"); // Esto solo muta la lista principal para agregarle los 2 datos

console.log("EJERCICIO 1: ", frutas); // muestra todos elementos de la lista ya mutada.
console.log("EJERCICIO 1: ", elPush); // Este devuelve el largo de todo el array, en este caso 4, porque manzana, banana, naranja y uva.



// Ejercicio 2: Con variables
let numeros = [1, 2, 3];
let nuevoNumero = 4;
// Agrega la variable nuevoNumero al array
// Tu código aquí:


numeros.push(nuevoNumero);
console.log("EJERCICIO 2: ", numeros);



// Ejercicio 3: Múltiples elementos
let colores = ['rojo'];
// Agrega 'azul', 'verde', 'amarillo' en una sola línea
// Tu código aquí:

colores.push("azul", "verde", "amarillo");
console.log("EJERCICIO 3: ", colores);


/* ---------------------- .POP() MUTABLE --------------------*/

// Ejercicio 4: Básico
let ciudades = ['Madrid', 'Barcelona', 'Valencia'];
// Remueve el último elemento y guárdalo en una variable
// Tu código aquí:

let ultimoElemento = ciudades.pop(); // Elimina el ultimo elemento y lo guarda en la variable ultimoElemento
console.log("EJERCICIO 4: ",ultimoElemento); // Muestra el ultimo elemento que se almaceno en ultimoElemento
console.log("EJERCICIO 4: ", ciudades); // Muestra toda la tabla despues de haber eliminado el ultimoElemento


// Ejercicio 5: Pop en bucle
let numeros2 = [10, 20, 30, 40, 50];
// Remueve los últimos 3 elementos usando pop
// Tu código aquí:

numeros2.pop(); // 50
numeros2.pop(); // 40
numeros2.pop(); // 30
console.log("EJERCICIO 5: ", numeros2);


// Ejercicio 6: Verificar si array está vacío
let elementos = ['a', 'b', 'c'];
// Remueve todos los elementos usando pop hasta que esté vacío
// Tu código aquí:

elementos.pop(); // "c"
elementos.pop(); // "b"
elementos.pop(); // "a"
console.log("EJERCICIO 6: ", elementos);


/* ---------------------- .MAP() INMUTABLE --------------------*/

// Ejercicio 7: Números al doble
let numeros3 = [1, 2, 3, 4, 5];
// Crea un nuevo array con cada número multiplicado por 2
// Tu código aquí:

let newNumeros3 = numeros3.map(n => n * 2)
console.log("EJERCICIO 7", numeros3);
console.log("EJERCICIO 7", newNumeros3);

// Ejercicio 8: Nombres a mayúsculas
let nombres = ['juan', 'maria', 'carlos'];
// Convierte todos los nombres a mayúsculas
// Tu código aquí:

let newNombres = nombres.map(x => x.toUpperCase());
console.log("EJERCICIO 8", nombres);
console.log("EJERCICIO 8", newNombres);


// Ejercicio 9: Objetos a strings
let productos = [
    {nombre: 'laptop', precio: 800},
    {nombre: 'mouse', precio: 25},
    {nombre: 'teclado', precio: 60}
];
// Crea un array de strings: "laptop: $800"
// Tu código aquí:


let newProductos = productos.map(x => `${x.nombre}: $${x.precio}`);
console.log("EJERCICIO 9: ", newProductos);

/* ---------------------- .CONCAT() INMUTABLE --------------------*/
// Ejercicio 10: Básico
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// Une ambos arrays
// Tu código aquí:

let newArray = array1.concat(array2);
console.log("EJERCICIO 10: ", newArray);

// Ejercicio 11: Múltiples arrays
let vocales = ['a', 'e'];
let consonantes1 = ['b', 'c'];
let consonantes2 = ['d', 'f'];
// Une los tres arrays
// Tu código aquí:

// .sort() organiza los valores, alfabeticamente, con los números es un poco más complejo
// de momento solo tengamos en cuanta el orden alfabetico.
let vocalesConsonantes = vocales.concat(consonantes1, consonantes2).sort();
console.log("EJERCICIO 11: ", vocalesConsonantes);

// Ejercicio 12: Con elementos individuales
let base = [1, 2];
// Concatena el array con los números 3, 4, 5 como elementos individuales
// Tu código aquí:

let newBase = base.concat(3, 4, 5);
console.log("EJERCICIO 12: ", newBase);


/* ---------------------- .FOREACH() INMUTABLE --------------------*/

// Ejercicio 13: Mostrar elementos
let animales = ['perro', 'gato', 'pájaro'];
// Imprime cada animal en consola
// Tu código aquí:

let iterarAnimales = animales.forEach(animal => console.log("EJERCICIO 13: ", animal));


// Ejercicio 14: Sumar elementos
let precios = [10, 25, 30, 15];
let total = 0;
// Suma todos los precios usando forEach
// Tu código aquí:

let sumaDePrecio = precios.forEach(suma => console.log(`EJERCICIO 14: ${total += suma}`));


// Ejercicio 15: Modificar array original
let puntuaciones = [7, 8, 6, 9];
// Aumenta cada puntuación en 1 (modifica el array original)
// Tu código aquí:

puntuaciones.forEach((x, indice) => {
    puntuaciones[indice] = x + 1;
});

console.log("EJERCICIO 15: ", puntuaciones);


/* ------------------------------ NIVEL 2 ------------------------- */


/* ---------------------- .FILTER() INMUTABLE --------------------*/

// Ejercicio 16: Números pares
let numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Obtén solo los números pares
// Tu código aquí:

let newNumeros4 = numeros4.filter(x => x % 2 === 0);
console.log("EJERCICIO 16: ", newNumeros4);

// Ejercicio 17: Filtrar por longitud
let palabras = ['casa', 'automóvil', 'sol', 'computadora', 'luz'];
// Obtén solo las palabras con más de 4 letras
// Tu código aquí:

let newPalabras = palabras.filter(x => x.length > 4);
console.log("EJERCICIO 17: ", newPalabras);

// Ejercicio 18: Filtrar objetos
let estudiantes = [
    {nombre: 'Ana', edad: 20, activo: true},
    {nombre: 'Luis', edad: 17, activo: false},
    {nombre: 'María', edad: 22, activo: true}
];
// Obtén solo los estudiantes activos y mayores de 18
// Tu código aquí:

let newEstudiantes = estudiantes.filter(valor => valor.nombre && valor.activo == true && valor.edad > 18);

console.log("EJERCICIO 18: ", newEstudiantes);

/* ---------------------- .REDUCE() INMUTABLE --------------------*/

// Ejercicio 19: Suma total
let ventas = [100, 250, 175, 300, 125];
// Calcula el total de ventas
// Tu código aquí:

let total2 = ventas.reduce((acumulador, valor) => acumulador += valor, 0); 
// El cero es el valor en el que inicia el acumulador.

console.log("EJERCICIO 19: ", total2);


// Ejercicio 20: Producto de números
let factores = [2, 3, 4, 5];
// Calcula el producto de todos los números
// Tu código aquí:

let producto = factores.reduce((acumulador, valor) => acumulador *= valor, 1);
console.log("EJERCICIO 20: ", producto);


// Ejercicio 21: Objeto contador
let letras = ['a', 'b', 'a', 'c', 'b', 'a'];
// Cuenta cuántas veces aparece cada letra: {a: 3, b: 2, c: 1}
// Tu código aquí:

let contador = letras.reduce((acumulador, valor) => {
    if(acumulador[valor]){
        acumulador[valor]++;
    }else{
        acumulador[valor] = 1
    }
    return acumulador;
}, {}) // esas llaves indican que el acumulador es un objeto.

console.log("EJERCICIO 21: ", contador);

// Ejercicio 22: Encontrar el mayor
let temperaturas = [23, 31, 17, 25, 29];

// Usamos reduce para encontrar la temperatura más alta.
// El acumulador (acu) empieza con el primer valor del array (23)
// y el valor (val) empieza con el segundo (31). 
// En cada comparación, se devuelve el mayor de los dos.
// Ese resultado se convierte en el nuevo acumulador para la siguiente vuelta.
let temperaturaMasAlta = temperaturas.reduce((acu, val) => {
    if (acu > val) {
        return acu; // sigue el acumulador como campeón
    } else {
        return val; // el valor se convierte en el nuevo campeón
    }
});

console.log("EJERCICIO 22:", temperaturaMasAlta);

// Analogia de como funciona el reduce para encontrar la temperatura mas alta
// 1ra vuelta: acu = 23, val = 31 -> devuelve 31 porque 23 no es mayor que 31, entonces se cumple la condicion del else.
// 2da vuelta: acu = 31, val = 17 -> devuelve 31 porque 31 es mayor que 17, entonces se cumple la condicion del if.
// 3ra vuelta: acu = 31, val = 25 -> devuelve 31 porque 31 es mayor que 25, entonces se cumple la condicion del if.
// 4ta vuelta: acu = 31, val = 29 -> devuelve 31 porque 31 es mayor que 29, entonces se cumple la condicion del if.
// Resultado final: 31

/* ---------------------- .FIND() INMUTABLE --------------------*/

// Ejercicio 23: Encontrar por condición
let edades = [15, 22, 17, 25, 19];
// Encuentra la primera edad mayor a 20
// Tu código aquí:

let PrimeraEdadMayor = edades.find(x => x > 20);
console.log("EJERCICIO 23", PrimeraEdadMayor);

// Ejercicio 24: Encontrar objeto
let usuarios = [
    {id: 1, nombre: 'Pedro', email: 'pedro@email.com'},
    {id: 2, nombre: 'Ana', email: 'ana@email.com'},
    {id: 3, nombre: 'Carlos', email: 'carlos@email.com'}
];
// Encuentra el usuario con id 2
// Tu código aquí:

let userId = usuarios.find(x => x.id == 2);

console.log("EJERCICIO 24", userId);

// Ejercicio 25: Encontrar por múltiples condiciones
let productos2 = [
    {nombre: 'laptop', precio: 800, categoria: 'tecnología'},
    {nombre: 'silla', precio: 120, categoria: 'muebles'},
    {nombre: 'tablet', precio: 300, categoria: 'tecnología'}
];
// Encuentra el primer producto de tecnología con precio menor a 500
// Tu código aquí:

let primerProductoDeTecnologia = productos2.find(x => x.precio < 500 && x.categoria == "tecnología");
console.log("EJERCICIO 25", primerProductoDeTecnologia)


/* ---------------------- .FINDINDEX() INMUTABLE --------------------*/

// Ejercicio 26: Índice por valor
let colores2 = ['rojo', 'azul', 'verde', 'amarillo'];
// Encuentra el índice de 'verde'
// Tu código aquí:

let indiceColor = colores2.findIndex(x => x == "verde");
console.log("EJERCICIO 26: ", indiceColor);

// Ejercicio 27: Índice por condición
let calificaciones = [85, 92, 78, 96, 88];
// Encuentra el índice de la primera calificación mayor a 90
// Tu código aquí:

let mayorCalificacion = calificaciones.findIndex(x => x > 90);
console.log("EJERCICIO 27: ", mayorCalificacion);

// Ejercicio 28: Índice de objeto
let empleados = [
    {nombre: 'Juan', departamento: 'ventas'},
    {nombre: 'María', departamento: 'contabilidad'},
    {nombre: 'Pedro', departamento: 'ventas'}
];
// Encuentra el índice del primer empleado de contabilidad
// Tu código aquí:

let primerEmpleado = empleados.findIndex(x => x.departamento == "contabilidad");
console.log("EJERCICIO 28: ", primerEmpleado);


/* ------------------------------------- NIVEL 3 ------------------------------ */


/* ---------------------- EJERCICIOS COMBINADOS --------------------*/

// Ejercicio 29: Pipeline de transformación
let datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. Filtra números pares
// 2. Multiplícalos por 3
// 3. Suma todos los resultados
// Tu código aquí (en una cadena):

/* --------------- ESTA ES LA PRIMERA OPCION QUE HICE PERO ESTA ERRONEA YA QUE DEBE SER EN UNA SOLA LINEA --------------- */
let numerosPares = datos.filter(x => x % 2 == 0);
console.log("EJERCICIO 29 - FORMA 1: ", numerosPares);

let numerosMultiplicados = numerosPares.map(x => x * 3);
console.log("EJERCICIO 29 - FORMA 1: ", numerosMultiplicados);

let sumaTotal = numerosMultiplicados.reduce((acu, val) => acu += val);
console.log("EJERCICIO 29 - FORMA 1: ", sumaTotal);

/* --------------- FORMA CORRECTA EN UNA SOLA CADENA --------------- */

let resultado = datos.filter(val => val % 2 === 0).map(x => x * 3).reduce((acu, val) => acu += val);
console.log("EJERCICIO 29 FORMA 2 EN UNA SOLA CADENA: ", resultado);



// Ejercicio 30: Procesamiento de pedidos
let pedidos = [
    {id: 1, cliente: 'Ana', productos: ['laptop', 'mouse'], total: 850},
    {id: 2, cliente: 'Luis', productos: ['teclado'], total: 60},
    {id: 3, cliente: 'María', productos: ['monitor', 'cable'], total: 320}
];
// 1. Filtra pedidos mayores a 100
// 2. Obtén solo los nombres de clientes
// 3. Convierte a mayúsculas
// Tu código aquí:


let filtNomMayus = pedidos.filter(x => x.total > 100).map(x => x.cliente.toUpperCase());

console.log("EJERCICIO 30", filtNomMayus);


// Ejercicio 31: Análisis de texto .split()
let frases = [
    'JavaScript es genial',
    'Programar es divertido',
    'Los arrays son útiles',
    'El código limpio importa'
];
// 1. Convierte cada frase en array de palabras
// 2. Cuenta el total de palabras
// 3. Encuentra la frase con más palabras
// Tu código aquí:

let fraseSeparada = frases.map(x => x.split(" "));
console.log(fraseSeparada);
let totalPalabras = fraseSeparada.reduce((acu, val) => acu + val.length, 0);
console.log(totalPalabras);
let fraseMasLarga = frases.reduce((acumulador, valor) => {
    if (acumulador.split(" ").length > valor.split(" ").length ) {
        // Si la frase actual (valor) tiene más palabras, se convierte en el nuevo acumulador
        return acumulador
    } else {
        // Si no, el acumulador sigue siendo el campeón
        return valor;
    }
})
console.log("EJERCICIO 31: ", fraseMasLarga);

// ANALOGIA DE COMO FUNCIONA EL REDUCE PARA ENCONTRAR LA FRASE MAS LARGA
// 1ra vuelta: acumulador = 'JavaScript es genial' (3 palabras), valor = 'Programar es divertido' (3 palabras) -> devuelve 'Programar es divertido' porque pasa al else, ya que acumulador no es mayor que valor sino que son iguales.
// 2da vuelta: acumulador = 'Programar es divertido' (3 palabras), valor = 'Los arrays son útiles' (4 palabras) -> devuelve 'Los arrays son útiles' ya que acumulador no es mayor que valor, en este caso valor es mayor que acumulador entonces se cumple la condicion del else.
// 3ra vuelta: acumulador = 'Los arrays son útiles' (4 palabras), valor = 'El código limpio importa' (4 palabras) -> devuelve 'El código limpio importa' ya que acumulador no es mayor que valor, en este caso son iguales entonces se cumple la condicion del else.
// Resultado final: 'Los arrays son útiles'

/*  ---------------------------------- NIVEL 4 ------------------------- */


/* ---------------------- PROYECTO DE SISTEMA DE GESTION --------------------*/

let inventario = [
    {id: 1, nombre: 'Laptop Dell', precio: 800, categoria: 'tecnología', stock: 5},
    {id: 2, nombre: 'Mouse Logitech', precio: 25, categoria: 'tecnología', stock: 50},
    {id: 3, nombre: 'Silla Ergonómica', precio: 150, categoria: 'oficina', stock: 8},
    {id: 4, nombre: 'Monitor Samsung', precio: 300, categoria: 'tecnología', stock: 12},
    {id: 5, nombre: 'Teclado Mecánico', precio: 80, categoria: 'tecnología', stock: 20}
];

// Desafío 1: Productos por categoría
// Crea un objeto que agrupe productos por categoría
// Resultado esperado: {tecnología: [productos...], oficina: [productos...]}

// PARA ENTENDER MEJOR VER LA IMAGEN EN LA CARPETA images 1.7.1
let categoria = inventario.reduce((acumulador, valor) => {
    if(!acumulador[valor.categoria]){ // Es como decir si aun no esta esta categoria entonces crea una lista por lo cual quedaria en acumulador asi { categoria: [nombres], categoria:[nombres] }
        acumulador[valor.categoria] = [];
    }
    acumulador[valor.categoria].push(valor.nombre);
    return acumulador;
    
}, {});

for(stock in categoria){
    categoria[stock] = categoria[stock].join(", ")
}
console.log("EJERCICIO 32: ", categoria);

console.log("---------------------------------------------------------------");
// Desafío 2: Reporte de ventas
// Simula que se vendieron: 2 laptops, 10 mouses, 3 monitores
// Actualiza el stock y calcula el ingreso total

let sumaTotalInventario = 0;
let venta = inventario.reduce((acumu, valor) => {
    if(!acumu[valor.categoria]){
        acumu[valor.categoria] = [];
    }

    if(acumu[valor.categoria] && valor.id == 1){
        sumaTotalInventario += valor.precio * 2
        acumu[valor.categoria].push(`${valor.nombre}: su Stock en inventario es: ${valor.stock - 2}`);
        return acumu;
    }else if(acumu[valor.categoria] && valor.id == 2){
        sumaTotalInventario += valor.precio * 10;
        acumu[valor.categoria].push(`${valor.nombre}: su Stock en inventario es: ${valor.stock - 10}`);
        return acumu;
    }else if(acumu[valor.categoria] && valor.id == 4){
        sumaTotalInventario += valor.precio * 3;
        acumu[valor.categoria].push(`${valor.nombre}: su Stock en inventario es: ${valor.stock - 3}`);
        return acumu;
    }else{
        acumu[valor.categoria].push("No se selecciono nada :)");
    }

    return acumu;

}, {}); 


//  SI SE QUIERE SABER SU EXPLICACION VER EN EL PDF ADJUTNO EN LA MISMA CARPETA
let tablaVentas = [];
for(let categoria in venta){
    venta[categoria].forEach(item => {
        if(item.includes(":")){
            let [nombre, stock] = item.split(": su Stock en inventario es: ");
            if(nombre.trim() !== 'No se selecciono nada :)' && !isNaN(stock)){
                tablaVentas.push({
                    Producto: nombre,
                    Categoria: categoria,
                    Stock: parseInt(stock)
                });
            }
        }
    });
}


console.log("EJERCICIO 33: ");
console.log("Ingreso total de $", sumaTotalInventario);
console.table(tablaVentas);
console.log("---------------------------------------------------------------");

// Desafío 3: Productos a reabastecer
// Encuentra productos con stock menor a 10
// Crea una lista de pedidos con el formato: "Pedir 20 unidades de [producto]"

let todosLosProductos = inventario.reduce((acumulador, valor) => {
    // Si la categoría aún no existe en el acumulador, la inicializamos como array vacío
    if (!acumulador[valor.categoria]) {
        acumulador[valor.categoria] = [];
    }

    // Calculamos el stock final según el ID del producto
    let stockFinal = valor.stock;

    if (valor.id === 1) {
        stockFinal -= 2;
    } else if (valor.id === 2) {
        stockFinal -= 10;
    } else if (valor.id === 4) {
        stockFinal -= 3;
    }

    // Agregamos el producto con su stock final al array correspondiente
    acumulador[valor.categoria].push(`${valor.nombre} : ${stockFinal}`);

    return acumulador;
}, {});

let reabastecimientoDeProductos = [];

for(let categoria in todosLosProductos){
    todosLosProductos[categoria].forEach(item => {
        if(item.includes(":")){
            let [nombre, stock] = item.split(" : ");
            if(stock < 10){
                reabastecimientoDeProductos.push({
                    Productos: nombre,
                    Categoria: categoria,
                    Stock: `${stock}: Pedir 20 unidades`
                })
            }
        }
    })
}
console.log("EJERCICIO 34: ");
console.table(reabastecimientoDeProductos);
console.log("---------------------------------------------------------------");

// Desafío 4: Búsqueda inteligente
// Implementa una función que busque productos por nombre (parcial)
// Ejemplo: buscar("lap") debería encontrar "Laptop Dell"

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tablaLimpia = [];
for(let categoria in todosLosProductos){
    todosLosProductos[categoria].forEach(articulo => {
        if(articulo.includes(":")){
            let [nombre, stock] = articulo.split(" : ");
            tablaLimpia.push({
                Categoria: categoria.toLowerCase().replace("í", "i"),
                Productos: nombre.toLowerCase().replace("á", "a").replace("ó", "o"),
                Stock: stock
            })
        }
    })
}

let soloCategorias = tablaLimpia.map(x => x.Categoria);
let soloProductos = tablaLimpia.map(x => x.Productos);


console.log("EJERCICIO 35: ", );
function buscarProducto(){
    rl.question("Que categoria te interesa?: ", (categoria)=>{
        let respuesta = categoria.toLowerCase();
        let resultadoCategoria = soloCategorias.find(x => x.includes(categoria))
        if(resultadoCategoria){
            rl.question("Cual es el producto que estas buscando?: ", (articulo) => {
                let resultadosDeBusqueda = soloProductos.find(x => x.includes(articulo));

                let productoEnMalaCategoria = tablaLimpia.some(x =>
                    x.Productos === resultadosDeBusqueda && x.Categoria !== resultadoCategoria
                );

                if(productoEnMalaCategoria){
                    console.log("Producto en mala categoria:", resultadosDeBusqueda, "es no es de:", resultadoCategoria);
                    buscarProducto();
                }else{
                    if(resultadosDeBusqueda){
                        let filtro = tablaLimpia.reduce((acumulador, valor) => {
                            if(!acumulador[valor.Categoria]){
                                acumulador[valor.Categoria] = [];
                            }

                            if(valor.Productos === resultadosDeBusqueda){
                                acumulador[valor.Categoria].push(`El resultado es: ${valor.Productos}, tenemos en Stock: ${valor.Stock}`);
                            }

                            return acumulador;
                        }, {});
                        console.log(filtro);
                        rl.close();
                    }else{
                        console.log("No se encontró resultados de busqueda, vuelva a intentarlo");
                        console.log();
                        buscarProducto();
                    }
                }
            })
        }else{
            const reset = "\x1b[0m";
            const red = "\x1b[31m";
            console.log(`Esa categoria no existe: "${red + respuesta + reset}", vuelve a intentarlo`);
            console.log();
            buscarProducto();
        }
    })
}
buscarProducto()