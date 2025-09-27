console.log("--------------------------- Ejercicios push ---------------------------");

// Ejercicio 1: Básico
let deportes = ['fútbol', 'tenis'];
// Agrega 'baloncesto' y 'natación' al array
// Tu código aquí:

deportes.push("baloncesto", "natación");
console.log("EJERCICIO 1: ", deportes);

// Ejercicio 2: Con variables
let temperaturas = [15, 20, 25];
let nuevaTemp = 30;
// Agrega la variable nuevaTemp al array
// Tu código aquí:
temperaturas.push(nuevaTemp);
console.log("EJERCICIOS 2: ", temperaturas);

// Ejercicio 3: Múltiples elementos
let idiomas = ['español'];
// Agrega 'inglés', 'francés', 'alemán' en una sola línea
// Tu código aquí:

idiomas.push("inglés", "frances", "aleman");
console.log("EJERCICIOS 3: ", idiomas);

console.log("--------------------------- Ejercicios pop ---------------------------");

// Ejercicio 4: Básico
let planetas = ['Mercurio', 'Venus', 'Tierra', 'Marte'];
// Remueve el último elemento y guárdalo en una variable
// Tu código aquí:

let ultimoElemento = planetas.pop();
console.log("EJERCICIO 4: ",planetas);
console.log("EJERCICIO 4: ",ultimoElemento);

// Ejercicio 5: Pop en bucle
let edades = [18, 25, 30, 35, 40];
// Remueve los últimos 2 elementos usando pop
// Tu código aquí:

edades.pop();
edades.pop();

console.log("EJERCICIO 5: ", edades);

// Ejercicio 6: Vaciar array
let tareas = ['estudiar', 'trabajar', 'ejercitarse'];
// Remueve todos los elementos usando pop hasta que esté vacío
// Tu código aquí:

tareas.pop();
tareas.pop();
tareas.pop();
console.log("EJERCICIO 6: ", tareas);

console.log("--------------------------- Ejercicios map ---------------------------");

// Ejercicio 7: Números al triple
let valores = [2, 4, 6, 8];
// Crea un nuevo array con cada número multiplicado por 3
// Tu código aquí:

let newValores = valores.map(x => x * 3);
console.log("EJERCICIO 7: ", newValores);

// Ejercicio 8: Nombres a minúsculas
let paises = ['COLOMBIA', 'ARGENTINA', 'CHILE'];
// Convierte todos los nombres a minúsculas
// Tu código aquí:

let newPaises = paises.map(x => x.toLowerCase());
console.log("EJERCICIO 8: ", newPaises);

// Ejercicio 9: Objetos a strings
let empleados = [
    {nombre: 'Ana', salario: 3000},
    {nombre: 'Luis', salario: 2500},
    {nombre: 'María', salario: 3500}
];
// Crea un array de strings: "Ana gana $3000"
// Tu código aquí:);

let newEmpleados = empleados.map(x => `${x.nombre} gana $${x.salario}`);
console.log("EJERCICIO 9: ", newEmpleados);

console.log("--------------------------- Ejercicios concat ---------------------------");

// Ejercicio 10: Básico
let numPares = [2, 4, 6];
let numImpares = [1, 3, 5];
// Une ambos arrays
// Tu código aquí:

let newNum = numImpares.concat(numPares).sort();
console.log("EJERCICIO 10: ", newNum);

// Ejercicio 11: Múltiples arrays
let frutas = ['manzana', 'banana'];
let verduras = ['lechuga', 'tomate'];
let carnes = ['pollo', 'res'];
// Une los tres arrays
// Tu código aquí:

let newArrays = frutas.concat(verduras, carnes);
console.log("EJERCICIO 11: ", newArrays);

// Ejercicio 12: Con elementos individuales
let inicio = [10, 20];
// Concatena el array con los números 30, 40, 50 como elementos individuales
// Tu código aquí:

let newInicio = inicio.concat(30, 40, 50);
console.log("EJERCICIO 12: ", newInicio);

console.log("--------------------------- Ejercicios forEach ---------------------------");

// Ejercicio 13: Mostrar elementos
let marcas = ['Nike', 'Adidas', 'Puma'];
// Imprime cada marca en consola con el formato: "Marca: Nike"
// Tu código aquí:

console.log("EJERCICIO 13: ");
marcas.forEach(x => console.log(`Marca: ${x}`));

// Ejercicio 14: Multiplicar elementos
let numeros = [3, 7, 2, 9];
let producto = 1;
// Multiplica todos los números usando forEach para tener producto total
// Tu código aquí:

numeros.forEach(x => producto *= x);
console.log("EJERCICIO 14: ", producto);

// Ejercicio 15: Modificar array original
let notas = [6, 7, 8, 5];
// Aumenta cada nota en 2 puntos (modifica el array original)
// Tu código aquí:

console.log("EJERCICIO 15: ");
notas.forEach(x => console.log( x + 2));


console.log("--------------------------- Ejercicios filter ---------------------------");

// Ejercicio 16: Números mayores que 5
let lista = [2, 8, 1, 9, 4, 12, 3];
// Obtén solo los números mayores que 5
// Tu código aquí:

let newLista = lista.filter(x => x > 5);
console.log("EJERCICIO 16: ", newLista);

// Ejercicio 17: Filtrar por primera letra
let nombres = ['Andrea', 'Bruno', 'Ana', 'Carlos', 'Alberto'];
// Obtén solo los nombres que empiecen con 'A'
// Tu código aquí:

let newNombres = nombres.filter(x => x.startsWith("A"));
console.log("EJERCICIO 17: ", newNombres);

// Ejercicio 18: Filtrar objetos complejos
let productos = [
    {nombre: 'Camisa', precio: 45, disponible: true},
    {nombre: 'Pantalón', precio: 80, disponible: false},
    {nombre: 'Zapatos', precio: 120, disponible: true}
];
// Obtén solo los productos disponibles y con precio menor a 100
// Tu código aquí:

let newProductos = productos.filter(x => x.disponible == true && x.precio < 100);
console.log("EJERCICIO 18: ", newProductos);

console.log("--------------------------- Ejercicios reduce ---------------------------");

// Ejercicio 19: Promedio de números
let calificaciones = [85, 90, 78, 92, 88];
// Calcula el promedio de las calificaciones
// Tu código aquí:

let newCalificaciones = calificaciones.reduce((accum, x) => {
    accum += x;
    return accum;
}, 0)

console.log("EJERCICIO 19: ", newCalificaciones / 5);

// Ejercicio 20: Concatenar strings
let palabras = ['Hola', 'mundo', 'desde', 'JavaScript'];
// Une todas las palabras en una sola frase con espacios
// Tu código aquí:

let newPalabras = palabras.reduce((acumulador, valor) => {
    acumulador.push(valor);

    return acumulador;
}, [])

console.log("EJERCICIO 20: ", newPalabras.join(" "));

// Ejercicio 21: Agrupar por longitud
let animales = ['gato', 'elefante', 'perro', 'mariposa', 'león', "otorrinonaringologo"];
// Agrupa los animales por longitud de nombre: {4: ['gato', 'león'], 5: ['perro'], ...}
// Tu código aquí:

let newAnimales = animales.reduce((acumulador, valor) =>{
    if(!acumulador[valor.length]){
        acumulador[valor.length] = [];
    }
    acumulador[valor.length].push(valor);
    return acumulador
}, {})

console.log("EJERCICIO 21: ", newAnimales);

// Ejercicio 22: Encontrar el menor
let precios = [45, 23, 67, 12, 89];
// Encuentra el precio más bajo usando reduce
// Tu código aquí:

let newPrecios = precios.reduce((acumulador, valor) => {
    if(acumulador > valor){
        return acumulador;
    }else{
        return valor;
    }

}, 0)

console.log("EJERCICIO 22: ", newPrecios);

console.log("--------------------------- Ejercicios find y findIndex ---------------------------");

// Ejercicio 23: Encontrar por condición
let años = [2018, 2020, 2019, 2023, 2021];
// Encuentra el primer año mayor a 2020
// Tu código aquí:

let newAño = años.find(x => x > 2020);
console.log("EJERCICIO 23:", newAño);

// Ejercicio 24: Encontrar objeto por propiedad
let libros = [
    {titulo: 'Don Quijote', autor: 'Cervantes', páginas: 500},
    {titulo: 'Cien años de soledad', autor: 'García Márquez', páginas: 400},
    {titulo: '1984', autor: 'Orwell', páginas: 350}
];
// Encuentra el libro de García Márquez
// Tu código aquí:

let newLibros = libros.find( x => x.autor == "García Márquez")
console.log("EJERCICIO 24: ", newLibros);

// Ejercicio 25: Encontrar con múltiples condiciones
let coches = [
    {marca: 'Toyota', modelo: 'Corolla', año: 2020, precio: 15000},
    {marca: 'Honda', modelo: 'Civic', año: 2019, precio: 18000},
    {marca: 'Toyota', modelo: 'Camry', año: 2021, precio: 22000}
];
// Encuentra el primer Toyota con precio menor a 20000
// Tu código aquí:

let newCoches = coches.find( x => x.marca == "Toyota" && x.precio < 20000)
console.log("EJERCICIO 25: ", newCoches);

// Ejercicio 26: Índice por valor exacto
let meses = ['enero', 'febrero', 'marzo', 'abril'];
// Encuentra el índice de 'marzo'
// Tu código aquí:

let newMeses = meses.findIndex( x => x == "marzo")
console.log("EJERCICIO 26: el indice es", newMeses);

// Ejercicio 27: Índice por condición numérica
let puntajes = [45, 67, 89, 23, 78];
// Encuentra el índice del primer puntaje mayor a 80
// Tu código aquí:

let newPuntajes = puntajes.findIndex( x => x > 80);
console.log("EJERCICIO 27: ", newPuntajes);

// Ejercicio 28: Índice de objeto
let ciudades = [
    {nombre: 'Bogotá', población: 8000000},
    {nombre: 'Medellín', población: 2500000},
    {nombre: 'Cali', población: 2200000}
];
// Encuentra el índice de la ciudad con más de 7000000 habitantes
// Tu código aquí:

let newCiudades = ciudades.findIndex(x => x.población > 7000000)
console.log("EJERCICIO 28: ", newCiudades);

console.log("--------------------------- Ejercicios combinados ---------------------------");

// Ejercicio 29: Pipeline numérico
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// 1. Filtra números divisibles por 3
// 2. Multiplícalos por 2
// 3. Suma todos los resultados
// Tu código aquí (en una cadena):

let newNumeros2 = numeros2.filter( x => x % 3 === 0).map(x => x * 2).reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0)
console.log("EJERCICIO 29: ", newNumeros2);

// Ejercicio 30: Procesamiento de estudiantes
let estudiantes = [
    {nombre: 'Carlos', edad: 20, nota: 85},
    {nombre: 'María', edad: 19, nota: 72},
    {nombre: 'Pedro', edad: 21, nota: 90},
    {nombre: 'Ana', edad: 18, nota: 68}
];
// 1. Filtra estudiantes con nota mayor a 75
// 2. Obtén solo los nombres
// 3. Ordena alfabéticamente
// Tu código aquí:

let newEstudiantes = estudiantes.filter(x => x.nota > 75).map(x => x.nombre).sort();
console.log("EJERCICIO 30: ", newEstudiantes);


// Ejercicio 31: Análisis de palabras
let textos = [
    'JavaScript es poderoso',
    'Los arrays facilitan el trabajo',
    'Programar requiere práctica constante',
    'La lógica es fundamental'
];
// 1. Encuentra el texto con más de 25 caracteres
// 2. Convierte ese texto en array de palabras
// 3. Cuenta cuántas palabras tienen más de 5 letras
// Tu código aquí:

let newTexto = textos.find(x => x.length > 25).split(" ").reduce((acumulador, valor) => {
    if(!acumulador[valor.length]){
        acumulador[valor.length] = [];
    }

    if(valor.length > 5){
        acumulador[valor.length].push(valor);
    }

    return acumulador;
}, {})

console.log("EJERCICIO 32: ", newTexto);


console.log("--------------------------- Desafío finales ---------------------------");

let biblioteca = [
    {id: 1, titulo: 'El principito', autor: 'Saint-Exupéry', género: 'ficción', disponible: true, prestamos: 15},
    {id: 2, titulo: 'Sapiens', autor: 'Harari', género: 'historia', disponible: false, prestamos: 8},
    {id: 3, titulo: 'Don Quijote', autor: 'Cervantes', género: 'ficción', disponible: true, prestamos: 22},
    {id: 4, titulo: 'El arte de la guerra', autor: 'Sun Tzu', género: 'filosofía', disponible: true, prestamos: 12},
    {id: 5, titulo: 'Breve historia del tiempo', autor: 'Hawking', género: 'ciencia', disponible: false, prestamos: 6}
];

// Desafío 1: Libros por género
// Crea un objeto que agrupe libros por género
// Resultado esperado: {ficción: [libros...], historia: [libros...], ...}


let newBiblioteca = biblioteca.reduce((acumulador, valor) =>  {
    if(!acumulador[valor.género]){
        acumulador[valor.género] = {
            Titulos: [],
            total: 0
        };
    }

    acumulador[valor.género].Titulos.push(valor.titulo);
    acumulador[valor.género].total++;
    return acumulador;
}, {})

console.log(newBiblioteca);

// Desafío 2: Estadísticas de biblioteca
// Calcula:
// - Total de préstamos de todos los libros
// - Promedio de préstamos por libro
// - Libro más popular (mayor préstamos)

// Desafío 3: Libros disponibles por popularidad
// Encuentra libros disponibles con más de 10 préstamos
// Ordénalos por número de préstamos (descendente)

// Desafío 4: Buscador de libros
// Crea una función que busque libros por:
// - Título (búsqueda parcial, sin distinguir mayúsculas)
// - Autor (búsqueda parcial)
// - Género exacto

// Tu código aquí para todos los desafíos: