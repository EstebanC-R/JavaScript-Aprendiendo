const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Cuantos numeros de la serie quiere ver?: ", (respuesta) => {
    let solucion = parseInt(respuesta);
    ArrayFibbonacci = [0, 1];
    for(let i = 2; i < solucion; i++){
        ArrayFibbonacci.push(ArrayFibbonacci[i - 1] + ArrayFibbonacci[i - 2]);
    }
    console.log(ArrayFibbonacci);
    rl.close();
});


// 1. Floristeria
function menu(){
    rl.question(`Que tipo de rosa quiere? \n
        (1. Rosas rojas, 2. Claveles Blancos o de otros color, 3. Salir)
        `, (respuesta) => {
            switch (respuesta){
                case "1":
                    rl.question(`Que cantidad de flores quire (1. La Docena o menos, 2. Rojas y más de una docena, 3. De un color distinto a rojo)?: `, (cantidad) => {
                        switch (cantidad){
                            case "1":
                                rl.question("Que cantidad de flores exactas quire?: ", (cantidad) => {
                                    let solucion = cantidad * 1250;
                                    if(cantidad > 12){
                                        console.log("La cantidad es mayor a la docena, vuelva a intentarlo\n");
                                        menu();
                                    }else{
                                        console.log("El costo de su ramo sería de: ", solucion);
                                        rl.close();
                                    }
                                });
                                break;
                            case "2":
                                rl.question("Que cantidad de flores exactas quiere?: ", (cantidad) => {
                                    let solucion = cantidad * 1100;
                                    if(cantidad < 12){
                                        console.log("La cantidad es menor a la docena, vuelva a intentarlo");
                                        menu();
                                    }else{
                                        console.log("El costo de su ramo sería de: ", solucion);
                                        rl.close();
                                    }
                                });
                                break;
                            case "3":
                                rl.question("Que color quieres bb?: ", (color) => {
                                    rl.question("Y que cantidad de flores?", (cantidad) => {
                                        let solucion = cantidad * 1205;
                                        console.log("El costo de su ramo sería de: ", solucion, "y de color ", color);
                                        rl.close();
                                    });
                                });
                                break;
                        }
                    });
                case "2":
                    rl.question(`Que cantidad de flores de Clavel quiere (1. Color Blanco - La Docena o menos, 2. Color Blanco - Más de una docena, 3. De un color distinto a Blanco)?: `, (cantidad) => {
                        switch (cantidad){
                            case "1":
                                rl.question("Que cantidad de flores exactas quire?: ", (cantidad) => {
                                    let solucion = cantidad * 1050;
                                    if(cantidad > 12){
                                        console.log("La cantidad es mayor a la docena, vuelva a intentarlo");
                                        menu();
                                    }else{
                                        console.log("El costo de su ramo de Claveles blancos sería de: ", solucion);
                                        rl.close();
                                    }
                                });
                                break;
                            case "2":
                                rl.question("Que cantidad de flores exactas quiere?: ", (cantidad) => {
                                    let solucion = cantidad * 1000;
                                    if(cantidad < 12){
                                        console.log("La cantidad es menor a la docena, vuelva a intentarlo");
                                        menu();
                                    }else{
                                        console.log("El costo de su ramo de claveles blancos sería de: ", solucion);
                                        rl.close();
                                    }
                                });
                                break;
                            case "3":
                                rl.question("De que color quieres el Clavel?: ", (color) => {
                                    rl.question("Y que cantidad de flores?", (cantidad) => {
                                        let solucion = cantidad * 1200;
                                        console.log("El costo de su ramo sería de: ", solucion, "y de color del clavel sería", color);
                                        rl.close();
                                    });
                                });
                                break;
                        }
                    });
                    break;
                case "3":
                    console.log("Hasta la proxima :)");
                    break;
            }
    });
};
// menu();


// 2. Nombre del Mes
function nombreDelMes(){
    rl.question("Dame un número mayor o igual a 1 y menor o igual a 12: ", (numero) => {
        let numeroEntero = parseInt(numero)
        if(numeroEntero >= 1 && numeroEntero <= 12){
            if(numeroEntero == 1){
                console.log("Es Enero :p");
            }else if(numeroEntero == 2){
                console.log("Es Febrero :p");
            }else if(numeroEntero == 3){
                console.log("Es Marzo :p");
            }else if(numeroEntero == 4){
                console.log("Es Abril :p");
            }else if(numeroEntero == 5){
                console.log("Es Mayo :p");
            }else if(numeroEntero == 6){
                console.log("Es Junio :p");
            }else if(numeroEntero == 7){
                console.log("Es Julio :p");
            }else if(numeroEntero == 8){
                console.log("Es Agosto :p");
            }else if(numeroEntero == 9){
                console.log("Es Septiembre :p");
            }else if(numeroEntero == 10){
                console.log("Es Octubre :p");
            }else if(numeroEntero == 11){
                console.log("Es Noviembre :p");
            }else if(numeroEntero == 12){
                console.log("Es Diciembre :p");
            }
            rl.close()
        }else{
            console.log("El número ingresado no esta dentro del rango dado");
            nombreDelMes();
        }
    })
}
// nombreDelMes();


// 3. 3 Números distintos
function escribirNumero(){
    let Centenas = {1: "Ciento", 2: "Doscientos", 3: "Trescientos", 4: "Cuatrocientos", 5: "Quinientos", 6: "Seiscientos", 7: "Setecientos", 8: "Ochocientos", 9: "Novecientos",};

    let Decimales = {0: "", 1: "", 2: "veinti", 3: "treinta", 4: "cuarenta", 5: "cincuenta", 6: "sesenta", 7: "setenta", 8: "ochenta", 9: "noventa"};

    let Unidades = {0: "", 1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete", 8: "ocho", 9: "nueve"};
    
    rl.question("Escriba su primer numero: ", (numero1) => {
        let primero = parseInt(numero1);
        rl.question("Escriba su segundo número: ", (numero2) => {
            let segundo = parseInt(numero2);
            rl.question("Escriba su tercer numero: ", (numero3) => {
                let tercero = parseInt(numero3);
                let increment = segundo;
                let increment2 = tercero;
                while(increment == 1){
                    let del10al19 = {
                        0: "",
                        1: "once",
                        2: "doce",
                        3: "trece",
                        4: "catorce",
                        5: "quince",
                        6: "dieciseis",
                        7: "diecisiete",
                        8: "dieciocho",
                        9: "diecinueve"
                    }
                    if(increment != primero && increment2 != primero && increment != increment2){
                        if(increment == 1 && increment2 == 0){
                            console.log(Centenas[primero], "diez");
                            increment++, increment2++;
                            rl.close();
                        }else{
                            console.log(Centenas[primero], del10al19[tercero]);
                            increment++;
                            rl.close();
                        }   
                    }else{
                        console.log("Cada número debe ser distinto");
                        increment++;
                        rl.close();
                    }   
                }

                if(increment != primero && increment2 != primero && increment != increment2){
                    if(segundo == 0){
                        if(primero && segundo && tercero){
                            console.log(Centenas[primero], Unidades[tercero]); 
                            rl.close();
                        }else if(primero != segundo && primero != tercero && segundo != tercero){
                            console.log(Centenas[primero], Decimales[segundo], Unidades[tercero]);
                            rl.close();
                        }
                    }else if(segundo == 2){
                        if(primero != segundo && segundo != tercero && primero != tercero){
                            if(segundo == 2 && tercero == 0){
                                console.log(Centenas[primero], "veinte"); 
                                rl.close();
                            }else if(segundo == 2 && tercero != 0){
                                console.log(Centenas[primero], `${Decimales[segundo]}${Unidades[tercero]}`);
                                rl.close();
                            }
                        }
                    }
                }else{
                    console.log("Cada número debe ser distinto");
                    rl.close();
                }
            })
        })
    });
}
// escribirNumero();


// 4. Paises
function gentilicioPaises(){
    const paises = {
        1: "Colombiano",
        2: "Venezolano",
        3: "Brasileño",
        4: "Ecuatoriano",
        5: "Peruano",
        6: "Boliviano",
        7: "Chileno",
        8: "Argentino",
        9: "Uruguayo",
        10: "Paraguayo"
    };

    const sobreNombre = {
        1: "parce",
        2: "chamo",
        3: "mano",
        4: "loco",
        5: "causa",
        6: "changuito",
        7: "weón",
        8: "che boludo",
        9: "gurí",
        10: "ché"
    };

    rl.question(
        `
            Ingrese el numéro correspondiente a su pais de nacimiento: 1: Colombia, 
            2: Venezuela, 3: Brasil, 4: Ecuador, 5: Perú, 6: Bolivia, 7: Chile, 8: Argentina, 
            9: Uruguay o 10: Paraguay: `, 
            
            (numero) => { 
        
            let respuesta = parseInt(numero);

            if(respuesta === "" || respuesta < 1 || respuesta > 10){
                console.log(
                `
                    
                    Escribe un número valido :( =================> ERROR :p
                `);
                gentilicioPaises();
                

            }else{
                if(respuesta){
                    console.log(`
                        
                        Tú gentilicio es: ${paises[respuesta]} ` + `¿Que tal ${sobreNombre[respuesta]}?`); 
                    rl.close();
                }
            }
        }
    );
}
// gentilicioPaises();


// 5. Cumpleaños
function fechaCumpleAños(){
    const dias = {
        1: "uno",
        2: "dos",
        3: "tres",
        4: "cuatro",
        5: "cinco",
        6: "seis",
        7: "siete",
        8: "ocho",
        9: "nueve",
        10: "diez",
        11: "once",
        12: "doce",
        13: "trece",
        14: "catorce",
        15: "quince",
        16: "dieciseis",
        17: "diecisiete",
        18: "dieciocho",
        19: "diecinueve",
        20: "veinte",
        21: "veintiuno",
        22: "veintidós",
        23: "veintitrés",
        24: "veinticuatro",
        25: "veinticinco",
        26: "veintiséis",
        27: "veintisiete",
        28: "veintiocho",
        29: "veintinueve",
        30: "treinta",
        31: "treinta y uno",
        32: "O eres un alien o eres pelele"
    };

    const mes = {
        1: "Enero",
        2: "Febrero",
        3: "Marzo",
        4: "Abril",
        5: "Mayo",
        6: "Junio",
        7: "Julio",
        8: "Agosto",
        9: "Septiembre",
        10: "Octubre",
        11: "Noviembre",
        12: "Diciembre",
    };

    rl.question("Cual es el día de tú cumpleaños?: ", (diaDeNacimiento) => {
        let respuestaDia = parseInt(diaDeNacimiento);

        rl.question("y cual es el mes de tú nacimiento?: ", (mesDeNacimiento) => {
            let respuestaMes = parseInt(mesDeNacimiento);

            if(diaDeNacimiento == "" || mesDeNacimiento == "" || respuestaDia > 32 || respuestaDia < 1 || respuestaMes > 12 || respuestaMes < 1){
                console.log(`
                    
                    Escribe bien, no sé te entiende.
                `);
                fechaCumpleAños();
            }else if(respuestaDia == 32){
                console.log(`
                    
                    Entiendo... ${dias[respuestaDia]}.
                `);
                fechaCumpleAños();
            }else{
                if(respuestaDia && respuestaMes){
                    console.log(`

                        OK entonces cumples años el ${dias[respuestaDia]} del mes de 
                        ${mes[respuestaMes]}.
                    `);
                    rl.close();
                }
            }
        })
    })
}
// fechaCumpleAños();


// 6. Imprimir Cinco veces una palabra
function imprimirPalabra(){
    rl.question("Que palabra quieres repetir?: ", (palabra) => {
        rl.question("Cuantas veces quieres repetirla?: ", (numero) => {
            let respuestaNumero = parseInt(numero);
            for(let i = 0; i < respuestaNumero; i++){
                console.log(palabra);
            };
            rl.close();
        });
    });
}
// imprimirPalabra();


// 7. Leer el valor de N e imprimir los primeros N números naturales.
function primerosNumerosNaturales(){
    rl.question("Escribe un número natural porfavor: ", (numero) => {
        let resultadoNumero = parseInt(numero);
        if(numero < 0){
            console.log("Deben ser números naturales.");
            primerosNumerosNaturales();
        }else{
            for(let i = 0; i <= resultadoNumero; i++){
                console.log(i);
            }
            rl.close();
        }
    });
}
// primerosNumerosNaturales();


// 8. Leer el valor de N, imprimir y sumar los números de 1 a N.
function sumarNumero(){
    rl.question("Dime el número N de veces que quieres imprimir y en ultimas sumar: ", (numero) => {
        let resultadoNumero = parseInt(numero);
        let sumaTotal = 0;

        for(let i = 1; i <= resultadoNumero; i++){
            if(resultadoNumero){
                console.log(i);
                sumaTotal += i;
            }
        }
        console.log("La suma total es de: " + sumaTotal);
        rl.close();
    });
}
// sumarNumero();


// 9. Calcular la suma de los primeros N números pares. (Primera Interpretación)
/* 
===================================//=========================================
La diferencia entre ambos es que este por ejemplo si le damos un 7, el cuenta los 
impares hasta el 7, lo que resulta en 1,3,5 y 7. 
===================================//=========================================
*/
function sumarNumerosPares1(){
    rl.question("Ingresa un número: ", (numero)=> {
        let resultado = parseInt(numero);
        let sumaPar = 0;
        for(let i = 0; i <= resultado; i++){
            if(i % 2 === 0){
                console.log(i);
                sumaPar += i;
            }else{
                console.log(i);
            }
        }
        console.log("La suma de los número pares es de: ", sumaPar);
        rl.close();
    })
}
// sumarNumerosPares1();


// 9. Calcular la suma de los primeros N números pares. (Segunda Interpretación)
/* 
===================================//=========================================
La diferencia a este es que este por ejemplo a diferencia del anterior toma 
los 7 primeros impares, lo que resulta en 1,3,5,7,9,11 y 13. 
===================================//=========================================
*/
function sumarNumerosPares2(){
    rl.question("Ingresa un número: ", (numero)=> {
        let resultado = parseInt(numero);
        let i = 1;
        let numerosTotales = [];
        let sumaTotal = 0;
        while(numerosTotales.length < resultado){
            if(i % 2 == 0){
                numerosTotales.push(i);
                console.log(i);
            }else{
                console.log(i);
            }
            i++
        }
        
        for(valor of numerosTotales){
            sumaTotal += valor;
        }
        console.log(`La suma total de los primeros ${resultado} números pares es de: ` + sumaTotal);
        rl.close();
    })
}
// sumarNumerosPares2();


// 10. Imprimir la serie de los N primeros números impares y la suma de ellos.(Primera Interpretación)
// Pasa lo mismo que en los anteriores 2 ejemplos
function sumarNumeroImpares1(){
    rl.question("Ingresa un número: ", (numero)=>{
        let respuesta = parseInt(numero);
        let sumaTotal = 0;
        for(let i = 1; i <= respuesta; i++){
            if(i % 2 !== 0){
                sumaTotal += i;
                console.log(i);
            }else{
                console.log(i);
            }
        }
        console.log(`La suma de los impares es de: `, sumaTotal);
        rl.close();
    })
}
//sumarNumeroImpares1();


// 10. Imprimir la serie de los N primeros números impares y la suma de ellos. (Segunda Interpretación)
// Pasa lo mismo que en los anteriores 2 ejemplos
function sumarNumeroImpares2(){
    rl.question("Ingrese un número: ", (numero) => {
        let respuesta = parseInt(numero);
        let AgrupacionDeNumerosImpares = [];
        let i = 1;
        let sumaTotal = 0;

        while(AgrupacionDeNumerosImpares.length < respuesta){
            if(i % 2 !== 0){
                AgrupacionDeNumerosImpares.push(i);
                console.log(i);
            }else{
                console.log(i);
            }
            i++;
        }
        for(valor of AgrupacionDeNumerosImpares){
            sumaTotal += valor;
        }
        console.log(`La suma de total de los primeros ${respuesta} números impares es de: `, sumaTotal);
        rl.close();
    })
}
// sumarNumeroImpares2();

// 11. Para calcular el factorial de un número se deben multiplicar todos los números previos a él y el
// mismo número, por ejemplo, el factorial de 6 es 1*2*3*4*5*6. Dado un número N calcular su
// factorial.

function calcularFactorial(){
    rl.question("Ingresa el número al cual quieres saber su factorial: ", (numero) => {
        let respuesta = parseInt(numero);
        let total = 1;
        for(let i = 1; i <= respuesta; i++){
            total *= i;
            console.log(`El número factorial de ${respuesta} es: `, total);
        }
        
        rl.close();
    });
}
// calcularFactorial()


// 12. Generar e imprimir la serie y la suma los primero N números múltiplos de M. 

function multiplos(){
    rl.question("Por favor ingrese el número del cual quiera saber los multiplos: ", (numero) => {
        let resultado = parseInt(numero);

        rl.question(`Cuantos multiplos quiere saber del número ${resultado}?: `, (numero2) => {
            let resultado2 = parseInt(numero2);
            let lista = [];
            for(let i = 1; i <= resultado2; i++){
                lista.push(i)
            }
            console.log("Los primeros multiplos son los siguientes: ", lista);
            let multiplosDeNumero = lista.map(x => x * resultado);
            console.log("El resultado de esos multiplos es de: ", multiplosDeNumero);
            let sumaMultiplos = multiplosDeNumero.reduce((acumulador, valor) => {
                acumulador += valor;
                return acumulador;
            })
            console.log("Por ultimo su suma es de: ", sumaMultiplos);
            rl.close();
        })
    })
}
// multiplos();

// Tambien se podría en cadena

function multiplos2(){
    rl.question("Por favor ingrese el número del cual quiera saber los multiplos: ", (numero) => {
        let resultado = parseInt(numero);

        rl.question(`Cuantos multiplos quiere saber del número ${resultado}?: `, (numero2) => {
            let resultado2 = parseInt(numero2);

            let lista = [];
            for(let i = 1; i <= resultado2; i++){
                lista.push(i)
            }
            let multiplosDeNumero = lista.map(x => x * resultado).reduce((acumulador, valor) => {acumulador += valor; 
                return acumulador;
            })

            console.log("Por ultimo su suma es de: ", multiplosDeNumero);
            rl.close();
        })
    })
}
// multiplos2();

// 13. Calcular e imprimir la suma de S definida por la siguiente serie
// S = 1 – 2 + 3 – 4 + 5 – 6 ... + n

function sumaSerie(){
    rl.question("Escoga el número de la seríe que quiera ver para aplicarle la formula: ", (numero)=>{
        let respuesta = parseInt(numero);
        let suma = 0;
        let lista = [];
        for(let i = 1; i <= respuesta; i++){
            if(i % 2 !== 0){
                suma += i;
                if(i === 1){
                    lista.push(`${i}`);
                }else{
                    lista.push(`+ ${i}`);
                }
            }else if(i % 2 === 0){
                suma -= i;
                lista.push(`- ${i}`);
            }
        }
        console.log("La serie es: ", lista.join(" "), " y la suma es: ", suma);
        rl.close();
    })
}
// sumaSerie();

// 14. Calcular e imprimir el valor de S definida por la siguiente serie
// S = 1/1^2 + 1/3^2 + 1/5^2 + 1/7^2 + 1/N^2

function serieS(){
    rl.question("Dime el número para aplicarle la serie S: ", (numero)=> {
        let resultadoNum = parseInt(numero);
        let suma = 0;
        let lista = [];
        for(let i = 1; i <= resultadoNum; i++){
            if(i % 2 !== 0){
                suma += 1 / i ** 2;

                if(i === 1){
                    lista.push(`1/${i}^2`);
                }else{
                    lista.push(`+ 1/${i}^2`);
                }
            }   
        }
        console.log("La serie es: ", lista.join(" "), " y la suma es: ", suma);
        rl.close();
    })
}
// serieS();


// 15. Calcular e imprimir la serie y el valor de S definida por:
// S = 1 + 2 – 3 + 4 + 5 – 6 + 7 + 8 – 9 + … + N


function serieS2(){
    rl.question("Escribe el número que quieres aplicarle la serie S2: ", (numero)=>{
        let resultado = parseInt(numero);
        let suma = 0;
        let lista = [];
        for(let i = 1; i <= resultado; i++){
            if(i % 3 == 0 ){
                suma -= i;
                lista.push(`- ${i}`);
            }else{
                suma += i;
                if(i === 1){
                    lista.push(`${i}`);
                }else{
                    lista.push(`+ ${i}`);
                }
            }
        }
        console.log("El resultado de la secuencia es: ", lista.join(" "), " y el resultado es: ", suma);
        // .join() lo que hace es basicamente poner la lista en una sola cadena de texto, indicandole su separacion entre el parentesis (" "), su contrario sería split.
        // el cual en vez de unirlo en uno solo lo que hace es separar por un indicador, por ejemplo (" ")
        rl.close();
    })
}
// serieS2();


// 16. Calcular e imprimir la serie y el valor de S definida por:
// S = 1 – 2 + 3 + 4 – 5 + 6 + 7 + 8 – 9 + 10 + 11 + 12 + 13 – 14 + … + N

function secuenciaEnAumento(){
    rl.question("Ingrese el número al cual le quiere aplicar la serie en aumento: ", (numero)=>{
        let resultado = parseInt(numero);
        let aumento = 0;
        let restaIndice = 1;
        let suma = 0;
        let lista = [];
        for(let i = 1; i <= resultado; i++){
            aumento++;

            if(aumento === restaIndice + 1){
                suma -= i;
                restaIndice++;
                aumento = 0;
                lista.push(`- ${i}`);
            }else{
                suma += i;
                if(i === 1){
                    lista.push(`${i}`);
                }else{
                    lista.push(`+ ${i}`);
                }
            }
        }

        console.log("La serie: ", lista.join(" "), " y la suma es: ", suma);
        rl.close();
    })
}

// secuenciaEnAumento();

function test(){
    rl.question("Pon el numero para hacerle la secuencia en aumento: ", (sum) => {
        let resultado = parseInt(sum);
        let contador = 0;
        let aumento = 1;
        let acumulador = 0;
        let lista = [];

        for(let i = 1; i <= resultado; i++){
            contador++;
            if(contador === aumento + 1){
                acumulador -= i;
                aumento++;
                contador = 0;
                lista.push(`- ${i}`);
            }else{
                acumulador += i;
                if(i === 1){
                    lista.push(`${i}`);
                }else{
                    lista.push(`+ ${i}`)
                }
            }
        }
        console.log("Serie: ", lista.join(" "), " Suma = ", acumulador);
        rl.close();
    })
}
//test();


// 17. Mirar imagen de la seccion Images.
// FORMA 1
function alCuadrado(){
    rl.question("Ingresa hasta el número impar que quieres saber la suma y en ultimas su cuadrado: ", (num) => {
        let resultado = parseInt(num);
        let suma = 0;
        let serie = [];
        for(let i = 0; i <= resultado; i++){
            if(i % 2 !== 0){
                suma += i;
                if(i == 1){ 
                    serie.push(`${i}`);
                }else{
                    serie.push(`+ ${i}`);
                }
                
            }
        }
        let raiz = Math.sqrt(suma); // Raiz cuadrada
        console.log(`La serie es: ${serie.join(" ")}, lo cual da una suma de ${suma} y su Raiz cuadrada es: ${raiz}^2`);
        rl.close();
    })
}

// alCuadrado();

// FORMA 2
function alCuadrado2(){
    rl.question("Ingresa hasta el número impar que quieres saber la suma y en ultimas su cuadrado: ", (num) => {
        let resultado = parseInt(num);
        let suma = [];
        let serie = [];
        let i = 1;

        // Para que entregue el número de impares que quiere.
        while(suma.length < resultado){
            if(i % 2 !== 0){
                suma.push(i)
                if(i == 1){
                    serie.push(`${i}`);
                }else{
                    serie.push(` + ${i}`);
                }
            }
            i++;
        };

        // Para mostrar la suma que hizo "1, 1 + 3, 1 + 3 + 4".
        let sumaSerie = suma.map((x, i) => {
            return suma.slice(0, i + 1).join(" + ");
        });


        // Para que entregue el resultado de cada suma con el indice anterior, 1 = 1, 1 + 3 = 4, 1+3+5 = 9....
        let resultado2 = suma.map((x, i) => {
            if(i == 0){
                return x;
            }else{
                return suma.slice(0, i + 1).reduce((acumulador, x)=>acumulador + x, 0); 
                // El slice es para incluir valores anteriores de una lista, con + 1 es los anteriores + el actual, si solo es 0, i, seria solo anteriores.
            } 
        });

        for(let i = 0; i < sumaSerie.length; i++){
            console.log(`La suma de la raíz es: ${sumaSerie[i]} y el resultado de la raíz es: ${Math.sqrt(resultado2[i])}^2`);
        }
        rl.close();
    })
}
// alCuadrado2();


// 18. Generar e imprimir las primeras N tablas de multiplicar, desde el 1 hasta el 9.

function tablaDeMultiplicar(){
    rl.question("Hasta cual tabla de multiplicar quieres ver?: ", (numero) => {
        
        let respuesta = parseInt(numero);
        let tabla = [];
        let i = 1;
        if(respuesta < 1 || isNaN(respuesta)){
            console.log("El número debe ser mayor a 0 y un número valido");
            tablaDeMultiplicar();
            return;
        }else{
            while(tabla.length < respuesta){
                tabla.push(i);
                i++;
            }
            tabla.forEach((x)=> {
                let aum = 1;
                console.log("-------//-------");
                console.log("En la tabla del ", x);
                console.log("--------//------");
                while(aum <= 10){
                    console.log(`${x} * ${aum} = `, x * aum);
                    aum++;
                }
                console.log("--------------");
            })
            rl.close();
        }
    })
}
// tablaDeMultiplicar();

// 19. Generar e imprimir la serie y la suma definida por:
// S = 2/3 + 4/5 + 6/7 + 8/9 + …+(N*2)/(N*2 + 1)

function serieDivisionYSuma(){
    rl.question("Ingresa el valor S: ", (numero) => {
        let respuesta = parseInt(numero);
        let lista = [];
        let iteracion = 1;
        if(respuesta < 1 || isNaN(respuesta)){
            console.log("Pon un número valido pedazo de animal");
            serieDivisionYSuma();
        }else{
            while(lista.length < respuesta ){
            
                lista.push(iteracion)

                let respuesta2 = lista.slice(0, iteracion + 1).reduce((acumulador, valor) => acumulador += (valor*2)/(valor*2 + 1) ,0)
                console.log(`La serie es la ${iteracion}, la cual es: ${lista.map(x => (x*2) + "/" + (x*2 + 1)).join(" + ")} y su suma es = `, respuesta2);
                iteracion++;
            }
            rl.close();
        }
    })
}
//serieDivisionYSuma();

// 20. Genere e imprima los números y la sumatoria de la serie fibbonaci:
// S = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …, N.

function serieFibonacci() {
    rl.question("Ingresa cuántos números quieres ver de la serie Fibonacci: ", (numero) => {
        let respuesta = parseInt(numero);

        if (isNaN(respuesta) || respuesta < 1) {
            console.log("Por favor ingresa un número válido mayor que 0.");
            serieFibonacci();
        }

        let lista = [];

        for (let i = 0; i < respuesta; i++) {
            if (i === 0) {
                lista.push(0);
            } else if (i === 1) {
                lista.push(1);
            } else {
                lista.push(lista[i - 1] + lista[i - 2]);
            }
        }

        let suma = lista.reduce((acum, val) => acum + val, 0);

        console.log(`La serie Fibonacci con ${respuesta} términos es: ${lista.join(" + ")}`);
        console.log(`La suma de la serie es: ${suma}`);

        rl.close();
    });
}

// serieFibonacci();
