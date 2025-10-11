
function randomisadorNumero(){
    let generador = Math.floor(Math.random() * 6);
    return generador;
}

function adivinaElNumero(instanciaRl){
    instanciaRl.question('Selecciona un número del 0 al 6: ', (numero) => {
        let respuesta = parseInt(numero);
        let numeroRandom = randomisadorNumero();
        if(respuesta == numeroRandom){
            console.log(`!!!!!!!!!!!!!!!!! Haz adivinado el número random ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ ${numeroRandom}, genial, acaso tienes super poderes🤔🤔?`);
            salirOJugarOtraVez(instanciaRl);
        }else{
            console.log(`Porfavor vuelve a intentarlo, yo confío en ti :), el número random era ${numeroRandom}, elige lo que desees.`);
            salirOJugarOtraVez(instanciaRl);
        }
    })
}

function salirOJugarOtraVez(instanciaRl){
    instanciaRl.question('Quieres Salir (1), o Volver a Jugar(2)? selecciona la opción que desees: ', (opcion) => {
        switch(opcion){
            case '1':
                console.log("Muchas gracias por haber jugado, espero se halla divertido, hasta la proxima :) :P :3 :O");
                return instanciaRl.close();
            case '2':
                console.log("Me alegra que lo intentes otravez, buena suerte :)");
                console.log();
                adivinaElNumero(instanciaRl);
                break;
            default:
                console.log("Seleccione una opcion valida porfavor :(");
                salirOJugarOtraVez(instanciaRl);
                break;
        }
    })
}

function llamarReadline(){
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    adivinaElNumero(rl);
    salirOJugarOtraVez(rl);
}



llamarReadline();