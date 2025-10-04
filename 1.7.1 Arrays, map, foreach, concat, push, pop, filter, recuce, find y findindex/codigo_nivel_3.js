console.log("-------------------- Decisiones Técnicas con Arrays en JavaScript --------------------");
console.log();
// Problema 1: Transformación condicional
let productos = [
    {nombre: 'laptop', precio: 1200, categoria: 'tech'},
    {nombre: 'libro', precio: 15, categoria: 'educación'},
    {nombre: 'mouse', precio: 30, categoria: 'tech'},
    {nombre: 'cuaderno', precio: 5, categoria: 'educación'}
];
// PREGUNTA: Quiero aumentar 10% el precio de productos tech, ¿qué método uso?
// RESPUESTA: Método elegido y por qué: utilizo el metodo .map() ya que puedo aplicarle el aumento sin afectar el resto y tendré una lista igual de utilizable.
// IMPLEMENTACIÓN:

let newProductos = productos.map(x => {
    if(x.categoria.includes("tech")){
        return {
            ...x,
            precio: x.precio * 1.1
        }
    }else{
        return x;
    }
})
console.log("EJERCICIO 1: ");
console.table(newProductos);


// Problema 2: Búsqueda vs Filtrado
let transacciones = [
    {id: 'A1', monto: 150, tipo: 'ingreso'},
    {id: 'B2', monto: 80, tipo: 'gasto'},
    {id: 'C3', monto: 200, tipo: 'ingreso'},
    {id: 'D4', monto: 45, tipo: 'gasto'}
];
// PREGUNTA A: Necesito la primera transacción de más de 100, ¿find o filter?
// PREGUNTA B: Necesito todas las transacciones de más de 100, ¿find o filter?
// IMPLEMENTACIÓN:

let newTransaccion = transacciones.find(x => x.monto > 100);
let newTransaccion2 = transacciones.filter(x => x.monto > 100);
console.log("EJERCICIO 2: ");
console.table(newTransaccion);
console.table(newTransaccion2);

// Problema 3: Acumulación inteligente
let ventas = [
    {vendedor: 'Ana', venta: 1500},
    {vendedor: 'Luis', venta: 800},
    {vendedor: 'Ana', venta: 1200},
    {vendedor: 'Carlos', venta: 900},
    {vendedor: 'Luis', venta: 600}
];
// PREGUNTA: ¿Cómo obtengo las ventas totales por vendedor sin usar bucles?
// IMPLEMENTACIÓN:

let ventasTotales = ventas.reduce((acumulador, valor) => {
    acumulador += valor.venta;
    return acumulador;
},0)


console.log("EJERCICIO 3: las ventas totales son: ", ventasTotales);

console.log();
console.log("-------------------- Optimizaciíon de Código con Métodos de Arrays --------------------");

// Código Ineficiente 1:
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}
// TU VERSIÓN MEJORADA:

numeros = numeros.filter(x => x % 2 == 0);
console.log("EJERCICIOS 4: ", numeros);

// Código Ineficiente 2:
let palabras = ['casa', 'auto', 'computadora', 'sol'];
let resultado = '';
for(let i = 0; i < palabras.length; i++) {
    if(i === palabras.length - 1) {
        resultado += palabras[i];
    } else {
        resultado += palabras[i] + ', ';
    }
}
// TU VERSIÓN MEJORADA:

palabras = palabras.join(", ");
console.log("EJERCICIO 5: ", palabras);


// Código Ineficiente 3:
let empleados = [
    {nombre: 'Pedro', salario: 3000},
    {nombre: 'Ana', salario: 3500},
    {nombre: 'Luis', salario: 2800}
];
let totalSalarios = 0;
let contador = 0;
for(let emp of empleados) {
    totalSalarios += emp.salario;
    contador++;
}
let promedio = totalSalarios / contador;
// TU VERSIÓN MEJORADA:

let newTotalSalarios = empleados.reduce((acumulador, valor) => {
    acumulador += valor.salario;
    return acumulador;
}, 0);
console.log("EJERCICIO 6: ", newTotalSalarios / empleados.length);

console.log();
console.log("-------------------- Problemas del mundo real para resolver con Arrays --------------------");

// Dataset para los siguientes ejercicios:
let ecommerce = [
    {id: 1, producto: 'iPhone', precio: 999, categoria: 'electronics', stock: 50, rating: 4.5},
    {id: 2, producto: 'Camiseta', precio: 25, categoria: 'ropa', stock: 0, rating: 4.2},
    {id: 3, producto: 'Laptop', precio: 1299, categoria: 'electronics', stock: 30, rating: 4.7},
    {id: 4, producto: 'Zapatos', precio: 89, categoria: 'ropa', stock: 15, rating: 4.0},
    {id: 5, producto: 'Auriculares', precio: 199, categoria: 'electronics', stock: 25, rating: 4.3}
];

// Ejercicio A: Dashboard de inventario
// Crea un reporte que muestre:
// 1. Productos agotados (stock = 0)
// 2. Productos con bajo stock (stock < 20)
// 3. Valor total del inventario por categoría

let stockAgotado = ecommerce.filter(x => x.stock == 0);
let bajoStock = ecommerce.filter(x => x.stock < 20);
let valorTotal = ecommerce.reduce((acumulador, valor) => {
    if(!acumulador[valor.categoria]){
        acumulador[valor.categoria] = valor.precio;
    }else{
        acumulador[valor.categoria] += valor.precio;
    }

    return acumulador;
}, {});
console.log("EJERCICIO 7: ");
console.log("El stock agotado es: ");
console.table(stockAgotado);
console.log("El stock bajo es: ");
console.table(bajoStock);
console.log("El valor total en inventario es de: ");
console.table(valorTotal);


// Ejercicio B: Sistema de recomendaciones
// Implementa una función que reciba una categoría y devuelva:
// 1. Los 3 productos mejor valorados de esa categoría
// 2. Que tengan stock disponible
// 3. Ordenados por rating (descendente)

function recomendaciones(cat, rlInstance){
    console.log("EJERCICIO 8:");

    let resultado = ecommerce.filter(x => x.categoria.toLowerCase().includes(cat));
    if(resultado.length === 0){
        console.log("Lo sentimos, no tenemos de momento esta categoria");
        return rlInstance.close();
    }

    resultado = resultado.filter(x => x.stock > 0 && x.rating).sort((a, b) => b.rating - a.rating).slice(0, 3);
    console.log("EJERCICIO 8: ");
    console.table(resultado);
    rlInstance.close();
}

function preguntarRecomendaciones(){
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("Porfavor indiqueme la categoría que quiere ver: ", (categoria) => {
        recomendaciones(categoria.toLowerCase(), rl);
    });
}


// Ejercicio C: Análisis de precios
// Calcula:
// 1. El precio promedio por categoría
// 2. El producto más caro y más barato
// 3. Qué porcentaje de productos cuesta más de $100

console.log("EJERCICIO 9: ");
let largoDeLaLista = ecommerce.filter(x=> x.categoria).length;
let productoPrecio = ecommerce.reduce((acumulador, v) => {
    if(!acumulador[v.categoria]){
        acumulador[v.categoria] = 0;
    }
    acumulador[v.categoria] += v.precio;
    return acumulador;
}, {});

let producto = {};

for(let product in productoPrecio){
    producto[product] = productoPrecio[product] / largoDeLaLista;
}
console.log("El promedio de precio por categoria es de: ", producto);

let caro = ecommerce.reduce((acumulador, valor) => acumulador > valor.precio ? acumulador:valor.precio);
let barato = ecommerce.reduce((acumulador, valor) => acumulador < valor.precio ? acumulador:valor.precio);
let resultadosDeBusquedaCaroYBarato = [
    ...ecommerce.filter(x => x.precio === caro).map(x => ({ tipo: "Caro", ...x})),
    ...ecommerce.filter(x => x.precio === barato).map(x => ({tipo: "Barato", ...x}))
];
console.log();
console.log("El producto más caro y más barato es: ");
console.log("TABLA");
console.table(resultadosDeBusquedaCaroYBarato);

let totalDeProductos = ecommerce.filter(x => x.categoria).length;
let totalDeProductosCaros = ecommerce.filter(x => x.precio > 100).length;
let porcentaje = (totalDeProductosCaros / totalDeProductos) * 100;

console.log("El porcentaje de productos que cuestan más de 100 es del: ", porcentaje);

console.log();
console.log("-------------------- Desafíos Avanzados con Arrays en JavaScript --------------------");


// Desafío 1: Procesador de texto
let documento = [
    "JavaScript es un lenguaje de programación",
    "Los arrays son estructuras de datos útiles",
    "El desarrollo web requiere práctica constante",
    "La programación funcional simplifica el código"
];

// Implementa una función que:
// 1. Encuentre la palabra más repetida en todo el documento
// 2. Cuente cuántas palabras únicas hay en total
// 3. Devuelva las 5 palabras más largas

console.log("EJERCICIO 10: ");

function palabrasRepetidas(){
    let documentoSeparado = documento.map(x => x.toLowerCase().replaceAll("ó", "o").replaceAll("ú", "u").replaceAll("á", "a")).join(" ").split(" ");
    let palabraMasRepetida = documentoSeparado.reduce((acumulador, valor) => {
        if(acumulador[valor]){
            acumulador[valor] ++;
        }else{
            acumulador[valor] = 1;
        }

        return acumulador;
    }, {});

    let numeroMenor = Math.min(...Object.values(palabraMasRepetida));
    let numeroMayor = Math.max(...Object.values(palabraMasRepetida));

    let MayorNumeroDeRepeticiones = Object.entries(palabraMasRepetida).filter(([palabra, cantidad]) => cantidad === numeroMayor).map(([palabra, valor], i) => ({
        Palabras: palabra,
        Repeticiones: valor,
        Total: i + 1
    }))

    let palabrasUnicas = Object.entries(palabraMasRepetida).filter(([palabra, cantidad]) => cantidad === numeroMenor).map(([palabra, valor], i) => ({
        Palabras: palabra,
        Repeticiones: valor,
        Total: i + 1
    }))

    let palabrasMasLargas = Object.entries(palabraMasRepetida).sort((a, b) => b[0].length - a[0].length).slice(0, 5).map(([palabra]) => palabra);
    
    console.log("Mayor número de repeticiones: ");
    console.table(MayorNumeroDeRepeticiones);
    console.log("Palabras únicas: ");
    console.table(palabrasUnicas);
    console.log("Las 5 palabras más largas son: ");
    console.table(palabrasMasLargas);
}
palabrasRepetidas();

// Desafío 2: Analizador de datos financieros
let transaccionesBank = [
    {fecha: '2024-01-15', tipo: 'ingreso', monto: 2500, categoria: 'salario'},
    {fecha: '2024-01-16', tipo: 'gasto', monto: 800, categoria: 'alquiler'},
    {fecha: '2024-01-17', tipo: 'gasto', monto: 150, categoria: 'comida'},
    {fecha: '2024-01-18', tipo: 'ingreso', monto: 300, categoria: 'freelance'},
    {fecha: '2024-01-19', tipo: 'gasto', monto: 50, categoria: 'transporte'},
    {fecha: '2024-01-20', tipo: 'gasto', monto: 200, categoria: 'comida'}
];

// Crea un análisis financiero que calcule:
// 1. Balance total (ingresos - gastos)
// 2. Gasto promedio por categoría
// 3. El día con mayor movimiento de dinero
// 4. Porcentaje de gastos vs ingresos

function balanceTotal(){
    let balanceT = transaccionesBank.reduce((acumulador, valor) => {
        if(!acumulador[valor.tipo]){
            acumulador[valor.tipo] = 0;
        }
        acumulador[valor.tipo] += valor.monto;
        return acumulador;
    }, {});

    let resta = (balanceT.ingreso || 0) - (balanceT.gasto || 0);
    console.log("El balance total es de: ", resta);
}

function gastoPromedioPorCategoria(){
    console.log("El gasto promedio es de: ");
    let gastos = transaccionesBank.filter(x => x.tipo == 'gasto');
    let gastoProm = gastos.map(x => {
        return { ...x, Gasto_Promedio: x.monto / gastos.length}
    });
    console.table(gastoProm);
}

function mayorMovimiento(){
    console.log("--------------------------------- Día con Mayor Movimiento ----------------------------------");

    let diaConMayorMovimiento = transaccionesBank.reduce((acum, val) => val.monto > acum ? val:acum, 0);
    console.log();
    console.log(`El día con mayor movimiento fue el: ${diaConMayorMovimiento.fecha} con un total de ${diaConMayorMovimiento.monto}, siendo este un ${diaConMayorMovimiento.tipo}.`);
    console.log();
}

function porcentajeDeGastosVsIngresos(){
    console.log("------------------------------- Porcentajes Gastos vs Ingresos ------------------------------");
    console.log();
    let porcentajeGastosVsIngresos = transaccionesBank.reduce((acumula, val) => {
        if(!acumula[val.tipo]){
            acumula[val.tipo] = 0;
        }
        acumula[val.tipo] += val.monto;
        return acumula;
    }, {});

    let ingresos = porcentajeGastosVsIngresos.ingreso || 0;
    let gastos = porcentajeGastosVsIngresos.gasto || 0;

    let porcentajeIngresos = ((ingresos / (ingresos + gastos)) * 100).toFixed(2);
    let porcentajeGastos = ((gastos / (ingresos + gastos)) * 100).toFixed(2);

    console.log(`El porcentaje de gastos es ${porcentajeGastos}% vs el porcentaje de ingresos ${porcentajeIngresos}%.`);
    console.log();
}

function salir(rlInstance){
    rlInstance.question("Quiere 1. Salir o 2. Escoger de Nuevo?: ", (seleccion) => {
        switch(seleccion){
            case '1':
                console.log("Esta bien, hasta la proxima amor mio :p :) ^_^");
                rlInstance.close();
                break;
            case '2':
                preguntar(rlInstance);
                break;
            default:
                console.log("Por favor seleccione una opcion valida :p ");
                salir(rlInstance);
        }
    });
}

function preguntar(rlInstance){
    console.log("--------------------------------------");
    console.log("EJERCICIO 11: ");

    rlInstance.question(`Que quieres ver? (Selecciona de la opción 1 a la 5)
        1). Balance Total
        2). Gasto Promedio por Categoria
        3). Día con mayor movimiento y dinero
        4). Porcentaje de Gastos vs Ingresos
        5). Salir o Escoger otra opcion
    Seleccione su opción deseada: `, (seleccion) => {
        switch(seleccion){
            case "1":
                balanceTotal();
                salir(rlInstance);
                break;
            case "2":
                gastoPromedioPorCategoria();
                salir(rlInstance);
                break;
            case "3":
                mayorMovimiento();
                salir(rlInstance);
                break;
            case '4':
                porcentajeDeGastosVsIngresos();
                salir(rlInstance);
                break;
            case '5':
                salir(rlInstance);
                break;
            default:
                console.log("Por favor seleccione una opcion valida :) ");
                console.log();
                preguntar(rlInstance);
        }
    })
}

function iniciarAnalisisFinanciero() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    preguntar(rl);
}

// Desafío 3: Motor de búsqueda
let biblioteca = [
    {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967, tags: ['realismo', 'latino', 'clásico']},
    {titulo: '1984', autor: 'George Orwell', año: 1949, tags: ['distopía', 'político', 'clásico']},
    {titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', año: 1943, tags: ['infantil', 'filosofía', 'aventura']},
    {titulo: 'Don Quijote', autor: 'Miguel de Cervantes', año: 1605, tags: ['aventura', 'clásico', 'español']}
];

// Implementa un motor de búsqueda que:
// 1. Busque por título, autor o tag (búsqueda parcial, insensible a mayúsculas)
// 2. Permita filtrar por rango de años
// 3. Ordene los resultados por relevancia (más coincidencias primero)

function buscarPorTitulo(){
    console.log("--------------------------------------");
    console.log("EJERCICIO 12: ");
    
    function quitarTildes(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Busque por Titulo, Autor o Tag: ", (busqueda) => {
        let resultado = quitarTildes(busqueda.toLowerCase());

        let resultados = biblioteca.filter(x => {
            let titulo = quitarTildes(x.titulo.toLowerCase());
            let autor = quitarTildes(x.autor.toLowerCase());
            let tags = x.tags.map(x => quitarTildes(x.toLowerCase()));

            return (
                titulo.includes(resultado) || autor.includes(resultado) || tags.some(x => x.includes(resultado))
            );
        });

        if(resultados.length > 0){
            console.table(resultados);
            return rl.close();
        }else{
            console.log("No se encontraron resultados :(");
            return rl.close();
        }
    });
}


console.log("-------------------- Evaluación de Comprensión de Métodos de Arrays -------------------- ");

// Pregunta 1: Rendimiento
// ¿Cuál es más eficiente para encontrar UN elemento?
// a) filter()[0]  b) find()  c) Son iguales
// Explica tu respuesta:

// Pregunta 2: Inmutabilidad
let original = [1, 2, 3];
let resultado1 = original.push(4);
let resultado2 = original.concat(5);
// ¿Qué contiene 'original' después de estas operaciones?
// ¿Qué contienen resultado1 y resultado2?

// Pregunta 3: Casos de uso
// Para cada escenario, ¿qué método usarías?
// A) Convertir temperaturas de Celsius a Fahrenheit: _____
// B) Encontrar usuarios menores de edad: _____
// C) Calcular el total de una factura: _____
// D) Verificar si existe un producto con ID específico: _____
// E) Combinar arrays de diferentes APIs: _____

// Pregunta 4: Debugging
// ¿Qué está mal en este código?
let precios = [10, 20, 30];
let total = precios.reduce((sum, precio) => sum + precio);
// Problema: _____
// Solución: _____

/* ===================================================================
    ------------------------ Descomente para probar ----------------
=================================================================== */

//preguntarRecomendaciones(); // Este es del ejercicio 8 descomentalo si lo quieres probar
//iniciarAnalisisFinanciero(); // Este es del ejercicio 11 descomentalo si lo quieres probar
buscarPorTitulo();