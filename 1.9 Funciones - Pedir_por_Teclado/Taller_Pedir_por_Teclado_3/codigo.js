const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* rl.question("Cuantos numeros de la serie quiere ver?: ", (respuesta) => {
    let solucion = parseInt(respuesta);
    ArrayFibbonacci = [0, 1];
    for(let i = 2; i < solucion; i++){
        ArrayFibbonacci.push(ArrayFibbonacci[i - 1] + ArrayFibbonacci[i - 2]);
    }
    console.log(ArrayFibbonacci);
    rl.close();
});
 */

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

