/* ----------------------------------------------------------------------- */
/* ----------------------------- Callbacks ------------------------------- */
/* ----------------------------------------------------------------------- */


console.log(`
    /*-----------------------------------------------------------------*/
        ------------------------ Callbacks ------------------------
    /*-----------------------------------------------------------------*/
`);

// Una callback como su nombre lo indica es como decir, "Llamada de retorno o de vuelta";'
// Se explica de una forma sencilla en el html adjunto en la carpeta, pero tambien se mostrará un ejemplo para poder ver el codigo.

function cocinar(callback){
    console.log("Cocinando...");
    setTimeout(()=> {
        console.log("Comida lista 🥞🥞");
        callback()
    }, 4000)
}

function comer(){
    console.log('A comerr 😋😋');
}

//cocinar(comer);

console.log();

console.log(`
    /*-----------------------------------------------------------------*/
        ------------------------ Ejercicios ------------------------
    /*-----------------------------------------------------------------*/
`);

// ----------------------- EJERCICIO 1 --------------------
// Crea una función saludar(nombre, callback) que imprima un saludo y luego ejecute el callback.

function saludar(instanciaRl, callback){
    console.log("----------------------- EJERCICIO 1 --------------------");
    console.log();
    console.log("PERSONA 1: Buenos días señor... Podría usted recordarme su nombre?");
    setTimeout(()=>{
        instanciaRl.question("PERSONA 2: Claro que si señor, mi nombre es: ", (nombre)=>{
            for(let i = 1; i <= 2; i++){
                setTimeout(()=>{
                    if(i == 1){
                        console.log("PERSONA 1: Ohhh ya lo recuerdo, disculpe usted, soy muy descuidado con los nombres.");
                    }else if(i == 2){
                        console.log(`PERSONA 1: Hace un día espectacular, no? señor ${nombre}.`);
                        callback();
                        instanciaRl.close();
                    }
                }, 2500 * i)
            }
        })
    }, 3000);
}

function respuesta(){
    setTimeout(()=>{
        return console.log("PERSONA 2: Tiene usted toda la razón señor Maquina, hace un día increible ☀️ ☀️ 😎");
    }, 3500)
}

// ----------------------- EJERCICIO 2 --------------------

// Simula un “descargar archivo” con setTimeout, y al terminar ejecuta un callback que diga “descarga completa”.

function descarga(instaciaRl, callback){
    console.log("----------------------- EJERCICIO 2 --------------------");
    console.log();
    instaciaRl.question("Indique el nombre del archivo a descargar: ", (archivo) =>{
        let respuesta = archivo.toLowerCase();
        console.log(`Inicializando el proceso de descarga del archivo ${respuesta}`);
        for(let i = 0; i < 5; i++){
            setTimeout(()=>{
                console.log("Descargando ...");
                if(i == 4){
                    console.log(`No hay virus en su archivo`);
                    callback(respuesta);
                }
            }, 1000 * i)
        }
        return instaciaRl.close();
    })
}

function descargaFinalizada(nombreDeArchivo){
    console.log(`La descarga de ${nombreDeArchivo}.exe a finalizado `)
}

// ----------------------- EJERCICIO 3 --------------------

// Crea una función que reciba dos números y un callback que indique qué hacer con esos números (sumarlos, restarlos, etc.).

function recibirNumeros(instaciaRl, callback){
    console.log("----------------------- EJERCICIO 3 --------------------");
    console.log();
    instaciaRl.question("Ingrese su primer número: ", (a) => {
        let numero1 = parseInt(a);
        instaciaRl.question("Ingrese su segundo número: ", (b) => {
            let numero2 = parseInt(b);
            for( let i = 0; i < 5; i++ ){
                setTimeout(()=>{
                    console.log("Ingresando al sistema...");
                    if(i == 4){
                        callback(numero1, numero2, instaciaRl);
                    }
                }, 200 * i)
            }

        })
    })
}

function calculadora(num1, num2, instaciaRl){
    instaciaRl.question("Que calculo quiere hacer? 1) ➕, 2) ➖, 3) ✖️, 4) ➗ :  ", (solucion) => {
        let respuesta = parseInt(solucion);
        if(respuesta == 1){
            console.log("El resultado es: ", num1 + num2);
            return instaciaRl.close();
        }else if(respuesta == 2){
            console.log("El resultado es: ", num1 - num2);
            return instaciaRl.close();
        }else if(respuesta == 3){
            console.log("El resultado es: ", num1 * num2);
            return instaciaRl.close();
        }else if(respuesta == 4){
            console.log("El resultado es: ", num1 / num2);
            return instaciaRl.close();
        }else{
            console.log("Escoja una opción valida :(");
            calculadora(num1, num2, instaciaRl);
        }
    })
}

// ----------------------- EJERCICIO 4 --------------------

// Haz una función procesarArray que reciba un arreglo y un callback, y ejecute el callback en cada elemento.

function validanteTipoString(indicador, lista, largo, rl, callback){
    if(lista.length >= largo){
        callback(lista, rl)
        rl.close();
        return;
    }
    rl.question(`Agregue el ${indicador + 1} dato: `, (indicadorDeDato) => {
        let dato = String(indicadorDeDato).trim();
        lista.push(dato);
        validante(indicador + 1, lista, largo, rl, callback)
    });
}

function validanteTipoNumber(indicador, lista, largo, rl, callback){
    if(lista.length >= largo){
        callback(lista, rl);
        rl.close();
        return;
    }

    rl.question(`Agregue el ${indicador + 1} dato: `, (indicadorDeDato) => {
        let dato = parseInt(indicadorDeDato);
        lista.push(dato);
        validanteTipoNumber(indicador + 1, lista, largo, rl, callback)
    })
}

function validanteTipoMixto(indicador, lista, largo, rl, callback){
    if(lista.length >= largo){
        callback(lista);
        rl.close();
        return;
    }

    rl.question(`Agregue el ${indicador + 1} dato: `, (respuesta) => {
        const limpio = respuesta.trim();
        const posibleNumero = parseInt(limpio);

        if (!isNaN(posibleNumero)) {
            lista.push(posibleNumero);
        } else {
            lista.push(limpio);
        }

        validanteTipoMixto(indicador + 1, lista, largo, rl, callback);
    });
}


function proccesarArreglo(rl, callback){
    console.log("----------------------- EJERCICIO 4 --------------------");
    console.log();
    rl.question("De que largo quieres el Arreglo?: ", (resultadoDeLargo) => {
        let largo = parseInt(resultadoDeLargo);
        setTimeout(()=>{
            console.log("Entiendo...");
        }, 1000);
        setTimeout(()=>{
            rl.question("Ahora digame, quiere que 1) Sea solo String, 2) Sea solo tipo Number ó 3) Mixto?: ", (seleccion) => {
                let tipo = parseInt(seleccion);
                let lista = [];
                let indicador = 0;
                switch(tipo){
                    case 1:
                        validanteTipoString(indicador, lista, largo, rl, callback);
                        break;
                    case 2:
                        validanteTipoNumber(indicador, lista, largo, rl, callback)
                        break;
                    case 3:
                        validanteTipoMixto(indicador, lista, largo, rl, callback);
                        break;
                    default:
                        console.log("Dato Erroneo, porfavor vuelva a intentarlo :) ");
                        proccesarArreglo(rl, callback);
                        break;
                }
            })
        }, 2000)
    })
}

function recibirLista(arreglo, rl){
    let mapeo = arreglo.map(x=> ({
        Dato: x,
        Tipo: typeof x
    }))

    console.table(mapeo);
    return;
}

// ----------------------- EJERCICIO 5 --------------------

// Crea una función que use callbacks para mostrar pasos de una receta en orden, con setTimeout.

function conseguirIngrediente(rl) {
    console.log(`
        Los ingredientes que necesitamos son los siguientes:
    `);
    
    let pasos = 3;

    for (let i = 1; i <= pasos; i++) {
        setTimeout(() => {
            if (i == 1) {
                console.log("- Toma 1 Huevo (o los que quieras hacer.)\n");
            } else if (i == 2) {
                console.log("- Después toma una olla, preferiblemente antiadherente.\n");
            } else if (i == 3) {
                console.log("- Toma de la nevera Mantequilla o Aceite (con lo que prefieras hacerlo).\n");
            }
        }, 1500 * i);
    }

    setTimeout(() => {
        tienesLosIngredientes(rl, esperar);
    }, 1500 * (pasos + 1));
}

function tienesLosIngredientes(rl, callback) {
    rl.question("¿Tienes todos los ingredientes?: ", (siono) => {
        let respuesta = String(siono).trim().toLowerCase();

        if (respuesta === 'si') {
            console.log("\nEstá bien, entonces continuemos.");
            terminada(rl); 
        } else if (respuesta === 'no') {
            callback(rl);
        } else {
            console.log("No entendí muy bien lo que dijiste, vuelve a intentarlo.");
            tienesLosIngredientes(rl, callback);
        }
    });
}

function esperar(rl) {
    console.log("No hay problema, te doy 4 segundos más...");
    setTimeout(() => {
        tienesLosIngredientes(rl, esperar);
    }, 4000);
}

function receta(rl, callback) {
    console.log("----------------------- EJERCICIO 5 --------------------");
    console.log();
    rl.question("¿Quieres aprender a hacer una receta para freír un huevo?: ", (respuesta) => {
        let indicacion = String(respuesta).trim().toLowerCase();

        switch (indicacion) {
            case "si":
                console.log("¡Esa es la actitud!\n");
                conseguirIngrediente(rl);
                break;
            case "no":
                console.log("\nNo hay problema, vuelve cuando quieras :)");
                rl.close();
                break;
            default:
                console.log("\nRespuesta no válida, por favor intenta de nuevo.\n");
                receta(rl, callback);
                break;
        }
    });
}

function terminada(rl) {
    let conteo = 3;
    for(let i = 1; i <= conteo; i++ ){
        setTimeout(()=>{
            if(i == 1){
                console.log("\n- Lo siguiente que haremos será romper el huevo en la olla.\n");
            }else if(i == 2){
                console.log("- Puedes dejarlo tal cual lo partes o si quieres lo bates.\n");
            }else if(i == 3){
                console.log("- Por ultimo simplemente lo dejamos hacerse en la olla a fuego bajo por 3 minutitos.\n");
            }
        }, 2000 * i)
    }
    setTimeout(() => {
        console.log("\n Y WALAAA ¡¡¡Felicidades, has terminado tu receta!!!, solo queda servirlo en tu plato y ¡buen provecho! 🍳 🍳\n");
    }, 2000 * (conteo + 1));
    
    rl.close();
}


// ----------------------- EJERCICIO 6 --------------------

// Simula un flujo: “Iniciar sesión → cargar datos → mostrar pantalla principal” usando 3 funciones con callbacks encadenados.

let cuentas = [
    {id: 1, Cuenta: "admin1@gmail.com", Password: "admin123"},
    {id: 2, Cuenta: "empleado@gmail.com", Password: "empleado123"},
    {id: 3, Cuenta: "mercedezBenz@gmail.com", Password: "mercedez123"},
];


function loggin(rl, callback){ // le estoy pasando datos()
    console.log("----------------------- EJERCICIO 6 --------------------");
    console.log();
    rl.question("¿Quiere ingresar?: ", (respuesta) => {
        let respu = String(respuesta).trim().toLowerCase();

        if(respu == 'si'){
            callback(rl, pantallaPrincipal);
        }else if(respu == 'no'){
            console.log("Esta bien, vuelva pronto {o_o} :P 😎");
            return rl.close();
        }else{
            console.log("Creo que se confundio, porfavor escriba Si o No. 🤔  🤨  📜");
            loggin(rl, datos);
        }
    })
}

function datos(rl, callback){
    rl.question("¿Cual es su cuenta?: ", (cuenta)=>{
        let NombreDeLaCuenta = String(cuenta).trim();
        rl.question("¿Cual es su contraseña?: ", (pass) => {
            let ContraseñaDeLaCuenta = String(pass).trim();

            let usuarioValido = cuentas.some(x => 
                x.Cuenta === NombreDeLaCuenta && x.Password === ContraseñaDeLaCuenta
            );

            if(usuarioValido){
                let contador = 2;
                console.log("\nProcesando datos, espere un momento ...\n");
                for(let i = 1; i <= contador; i++){
                    setTimeout(()=>{
                        console.log("\nProcesando datos, espere un momento ...\n");
                    }, 2000 * i)
                }
                setTimeout(() => {
                    console.log(`¡Bienvenido de nuevo señor@ ${NombreDeLaCuenta.split("@")[0]}! 😎 😎`);
                    callback(NombreDeLaCuenta, rl);
                    rl.close();
                }, 2000 * (contador + 1));
            }else{
                let contador = 2;
                console.log("\nProcesando datos, espere un momento ...\n");
                for(let i = 1; i <= contador; i++){
                    setTimeout(()=>{
                        console.log("\nProcesando datos, espere un momento ...\n");
                    }, 2000 * i)
                }
                setTimeout(()=>{
                    console.log("Tiene un error en nombre de la cuenta o en la contraseña, porfavor verifique y vuelva a intentarlo. ERROR 🤖👾\n");
                    datos(rl, pantallaPrincipal);
                }, 2000 * (contador + 1))
            }
        })
    })
}

function pantallaPrincipal(user, rl){
    let tabla = cuentas.filter(x => x.Cuenta == user);
    console.log("\nObteniendo sus datos basicos ... ...\n");
    setTimeout(() => {
        console.table(tabla);
        return rl.close();
    }, 2000);
}

function inicializarReadline(){
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //saludar(rl, respuesta);
    //descarga(rl, descargaFinalizada)
    //recibirNumeros(rl, calculadora)
    //proccesarArreglo(rl, recibirLista);
    //receta(rl, terminada)
    //loggin(rl, datos)
}

inicializarReadline();
