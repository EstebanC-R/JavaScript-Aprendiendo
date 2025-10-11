//  Generador de Contraseñas

let vocales = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U" ];

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let caracteresEspeciales = ["¡", "!", "%", "@", "#", "&", "/", "|", ")", "("];

let password = [];

function inicializador(){
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    generador(rl)
}

function numeroAlAzar(){
    let numero = Math.floor(Math.random() * 10);
    return numero;
}

function numeroAlAzarParaCombinacionMultiple(){
    let numeroRandom = Math.floor(Math.random() * 3);
    return numeroRandom;
}

function soloLetras(largo){
    if(password.length < largo){
        let newLetras = vocales[numeroAlAzar()];
        password.push(newLetras);
        soloLetras(largo);
    }else{
        console.log();
        return console.log("Su nueva contraseña es: ", password.join(""));
    }
}

function soloNumeros(largo){
    if(password.length < largo){
        let newNumeros = numeros[numeroAlAzar()];
        password.push(newNumeros);
        soloNumeros(largo);
    }else{
        console.log();
        return console.log("Su nueva contraseña es: ", password.join(""));
    }
}

function soloCaracteresEspeciales(largo){
    if(password.length < largo){
        let newCaracteresEspeciales = caracteresEspeciales[numeroAlAzar()];
        password.push(newCaracteresEspeciales);
        soloCaracteresEspeciales(largo);
    }else{
        console.log();
        return console.log("Su nueva contraseña es: ", password.join(""));
    }
}

function combinacionDeCaracteresYNumeros(largo){
    let random = [vocales, numeros, caracteresEspeciales]

    if(password.length < largo){
        let seleccion = random[numeroAlAzarParaCombinacionMultiple()];
        let newCombinacion = seleccion[numeroAlAzar()];
        password.push(newCombinacion);
        combinacionDeCaracteresYNumeros(largo);
    }else{
        console.log();
        return console.log("Su nueva contraseña es: ", password.join(""));
    }
}

function generador(rl){
    rl.question("De cuantos digitos quiere que sea su contraseña?: ", (num) =>{
        let digitos = parseInt(num);
        console.log("Entiendo...");
        rl.question("Elija una opción: 1). Solo letras. 2). Solo números. 3). Solo Caracteres especiales. 4). Combinación de todos (más seguro): ", (res) =>{
            let respuesta = parseInt(res);
            switch(respuesta){
                case 1:
                    soloLetras(digitos);
                    rl.close();
                    break;
                case 2:
                    soloNumeros(digitos);
                    rl.close();
                    break;
                case 3:
                    soloCaracteresEspeciales(digitos);
                    rl.close();
                    break;
                case 4:
                    combinacionDeCaracteresYNumeros(digitos);
                    rl.close();
                    break;
                default:
                    console.log("Tiene que escoger una opción valida  :( ");
                    console.log();
                    for( let i = 1; i < 5; i++){
                        setTimeout(()=>{
                            if(i == 1){
                                console.log("Restaurando datos de inicialización, espere un momento.");
                            }else{
                                console.log("...");
                            }
                        }, 900 * i)
                    }
                    setTimeout(()=>{
                        console.log();
                        generador(rl);
                    }, 4000)
            }
        })
    })
}



inicializador();