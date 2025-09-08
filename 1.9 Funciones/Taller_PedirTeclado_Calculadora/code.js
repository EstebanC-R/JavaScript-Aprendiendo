const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function validarClave(contraseña){
    const minimoOchoCaracteres = contraseña.length >= 8;

    const minimoUnaMayuscula = /[A-Z]/.test(contraseña);

    const minimoUnNumero = /[0-9]/.test(contraseña);

    if(!minimoOchoCaracteres || !minimoUnaMayuscula || !minimoUnNumero){
        console.log("La contraseña debe cumplir con las siguientes caracteristicas: \n - Mínimo 8 caracteres \n - Mínimo 1 mayuscula \n - Mínimo 1 número \n");
    }

    return minimoOchoCaracteres && minimoUnaMayuscula && minimoUnNumero;
}

function intentosRestantes(){
    let contador = 0;
    const maxIntentos = 3;

    function preguntar(){
        rl.question("Ingrese una contraseña: ", (contraseña) => {
            const esCorrecta = validarClave(contraseña);

            if(esCorrecta){
                console.log("\nIngresando al Menu ...");
                menu();
            }else{
                contador++;

                if(contador < maxIntentos){
                    console.log(`Le quedan: ${maxIntentos - contador} intentos restantes`);
                    preguntar();
                }else{
                    console.log("Numero de intentos superados, vuelva más tarde");
                    rl.close();
                }
            }
        })
    }

    preguntar();
}

intentosRestantes();

function sumarDosNumeros(){
    rl.question("\nIngrese su primer número a sumar: ", (respuesta)=>{
        let num1 = parseInt(respuesta);

        rl.question("\nIngrese el segundo número: ", (respuesta)=>{
            let num2 = parseInt(respuesta);

            let total = num1 + num2;
            console.log("El resultado es: ", total);

            console.log("\nVolviendo al Menu ...");

            menu();
        });
    });
}

function restarDosNumeros(){
    rl.question("\nIngrese su primer número a restar: ", (respuesta)=> {
        let num1 = parseInt(respuesta);

        rl.question("\nIngrese su segundo número a restar: ", (respuesta)=> {
            let num2 = parseInt(respuesta);

            let total = num1 - num2;

            console.log("\nEl resultado es: ", total);

            console.log("\nVolviendo al Menu ...");
            menu();
        })
    })
}


function multiplicarDosNumeros(){
    rl.question("\nIngrese su primer número a multiplicar: ", (respuesta)=>{
        let num1 = parseInt(respuesta);
        rl.question("\nIngrese su segundo número a multiplicar: ", (respuesta)=> {
            let num2 = parseInt(respuesta);

            let total = num1 * num2;

            console.log("\nEl resultado es: ", total);

            console.log("\nVolviendo al Menu...");

            menu();
        })
    })
}


function dividirDosNumeros(){
    rl.question("\nIngrese el primer número a dividir: ", (respuesta)=>{
        let num1 = parseInt(respuesta);

        rl.question("\nIngrese el segundo número a dividir: ", (respuesta)=>{
            let num2 = parseInt(respuesta);

            if(num2 === 0){
                console.log("\n----ERRORR---- No se puede dividir entre cero, Intente de nuevo...");
                dividirDosNumeros();
            }else{
                let total = num1 / num2;
                console.log("\nEl resultado es: ", total);
                console.log("\nVolviendo al Menu...");
                menu();
            }
        })
    })
}

function tablaMultiplicar(numero){
    for(let i = 1; i <= 10; i++){
        const total = numero * i;
        console.log(`${numero} * ${i} = ${total}`);
    }

    console.log("\nVolviendo al Menu...");
    menu();
}

function menu(){
    rl.question(`\nPor favor seleccione un número del 1 al 6:\n
        1. Sumar dos números.\n
        2. Restar dos números.\n
        3. Multiplicar dos números.\n
        4. Dividir dos números.\n
        5. Ver tabla de multiplicar.\n
        6. Salir.\n
        Ingrese su respuesta: `, 
        (respuesta) => {
            switch (respuesta){
                case "1":
                    sumarDosNumeros(); 
                    break;
                case "2":
                    restarDosNumeros();
                    break;
                case "3":
                    multiplicarDosNumeros();
                    break;
                case "4":
                    dividirDosNumeros();
                    break;
                case "5":
                    rl.question("\nIngrese un número para ver su tabla de multiplicar: ", (numero)=>{
                        tablaMultiplicar(numero);
                    });
                    break;
                case "6":
                    console.log("\nHasta luego :)");
                    rl.close();
                    break;
                default:
                    console.log("\nSeleccione un número valido.");
                    menu();
            }
        }
    )
}
