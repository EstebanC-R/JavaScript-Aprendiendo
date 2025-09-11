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
                    if(increment == 1 && increment2 == 0){
                        console.log(Centenas[primero], "diez");
                        increment++, increment2++;
                        rl.close();
                    }else{
                        console.log(Centenas[primero], del10al19[tercero]);
                        increment++;
                        rl.close();
                    }                    
                }

                if(segundo == 0){
                    if(primero && segundo && tercero){
                        console.log(Centenas[primero], Unidades[tercero]); 
                        rl.close();
                    }else if(segundo == 0 && tercero == 0 && Centenas[1]){
                        console.log("Cien");
                        rl.close();
                    }else if(primero, segundo, tercero){
                        console.log(Centenas[primero], Decimales[segundo], Unidades[tercero]);
                        rl.close();
                    }else{
                        console.log("Escriba los valores como se le dijo");
                        escribirNumero();
                    }
                }else if(segundo == 2){
                    if(segundo == 2 && tercero == 0){
                        console.log(Centenas[primero], "veinte"); 
                        rl.close();
                    }else if(segundo == 2 && tercero != 0){
                        console.log(Centenas[primero], `${Decimales[segundo]}${Unidades[tercero]}`);
                        rl.close();
                    }
                }
            })
        })
    });
}

escribirNumero();