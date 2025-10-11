/* Haz una función procesarUsuario(nombre, callback) que:

        - Use una arrow para transformar el nombre a mayúsculas.

        - Tenga una variable global “usuariosProcesados”.

        - Llame al callback al final mostrando el resultado.
*/ 

let usuariosProcesados = [];

const monstarUsuario = (nombre => {
    console.log("Los usuarios procesados son: ", nombre);
    usuariosProcesados.push(nombre);
    console.log(usuariosProcesados);
});

function procesarUsuario(nombre, callback){
    console.log("Procesando su nombre, deme un minuto...");
    console.log();
    setTimeout(()=>{
        let mayusculas = nombre.toUpperCase();
        callback(mayusculas);
    }, 2000)
}

procesarUsuario("milton", monstarUsuario);

/*
    Crea un flujo:

        - Usa hoisting con una función tradicional llamada iniciar().

        - Dentro, crea una arrow function que calcule algo.

        - Usa un callback dentro que se ejecute al final mostrando un mensaje de éxito.

        - Asegúrate de manejar variables con distintos scopes (var, let, const).
*/
iniciar(mensajeDeExito);

function iniciar(callback){
    // var tiene el scope de funcion
    var x = 4;

    // Let tiene el scope de bloque
    if(x > 0){
        setTimeout(()=>{
            let y = 2;
            console.log("Valor de Y = ", y);

            // Const es el valor fijo
            const calcular = (a, b) => a * b;
            let resultado = calcular(x, y);
            callback(resultado);
        }, 3000)
    }

    // si se intenta llamar "y" va a ocurrir error por ser de bloque
}

function mensajeDeExito(resultado){
    console.log("El resultado es: ", resultado);
}