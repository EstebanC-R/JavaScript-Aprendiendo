/* --> traer el modulo de readline de Node.js, sirve para leer entradas de usuario 
atraves de la consola */

const readline = require('readline');
// al definirse globalmente se debe poner rl.close() a todo aunque no se pregunte

/* --> Despues se crea la interfaz de lectura la cual se llama rl (readline)

input: process.stdin --> define que la entrada será el teclado del usuario

output: process.stdout --> define que la salida será la pantalla de la crossOriginIsolated

Es como conectar el TECLADO y la CONSOLA */


const rl = readline.createInterface({ /* --> Esto de readline.createInterface, sirve para crear una interfaz de comunicacion entre tu teclado(entrada) y tu consola(salida) */
    /* --> Sin el readline.createInterface y el input y output no se puede utilizar el .question. */

    input: process.stdin, /* --> stdin = standart input (entrada estandar), representa lo que escribes con el teclado.  */      
    output: process.stdout /* --> stout = standart output (salida estandar), representa la pantalla de la consola, donde se muestran los mensajes */

})


/* Con rl.question se le hace una pregunta al usuario, es un metodo propio de readline. sirve para hacer una pregunta y obtener la respuesta del usuario,
adentro recibe un callback (funcion) que se ejecuta cuando el usuario responde.

el primer argumento es el texto de la pregunta, que se mostrará en consola,
el segundo argumento es una función callback que recibe lo que el usuario escriba
en este caso, lo que el usuario escribe se guarda en nombreDelUsuario. */


//rl.question("¿Cual es tu nombre?: ", (nombreDelUsuario) => {
    //console.log(`Hola! ${nombreDelUsuario}`)
    //rl.close() /* --> Esto es para cerrar la interfaz readline y finaliza el programa(si no se cierra se queda esperando mas entradas del usuario) */
//});


/* ------------------------------------------- PUESTO EN PRACTICA ---------------------------------------------- */

/* Esta fue facil debido a los ejercicios anteriormente hechos, solo le agregue un if para comprobar la correcta validación de todos */
function claveDefinida(clave){
    const numeroDeCaracteresPermitidos = clave.length >= 8;
    const mayusculaNecesariasEnClave = /[A-Z]/.test(clave);
    const almenosUnNumeroNecesarioEnClave = /[0-9]/.test(clave);

    if (!numeroDeCaracteresPermitidos || !mayusculaNecesariasEnClave || !almenosUnNumeroNecesarioEnClave) {
        console.log("Revisa que cumplas con tener 8 caracteres con minimo una mayuscula y un número");
    }

    return numeroDeCaracteresPermitidos && mayusculaNecesariasEnClave && almenosUnNumeroNecesarioEnClave;
}

/* Este en mi opinion fue el que más costo pero lo entendi a medida que lo hice,
ya que la constante esValida me perdía un poco pero en general entendí que tenía
que recibir la respuesta de alguna forma para utilizarla en los if sin que fuese muy
extenso, en caso de que la clave este correcta ingresa al sistema y lleva directamente
al menu, de lo contrario cuenta un intento y muestra cuantos intentos quedan, ademas
de que vuelve a preguntar, si se acaban los 3 intentos cierra el input y se tiene que
volver a correr el codigo. */
function intentosClave(){
    let contador = 0;
    const maxIntentos = 3;

    function preguntar(){
        rl.question("Ingrese la contraseña: ", (respuesta) => {
            const esValida = claveDefinida(respuesta);

            if(esValida){
                console.log("Ingresaste al sistema");
                mostrarMenu();
            }else{
                contador++;

                if(contador < maxIntentos){
                    console.log(`Clave inválida te quedan, ${maxIntentos - contador} intentos`);
                    preguntar();
                }else{
                    console.log("Se acabaron los intentos, vuelva maas tarde");
                    rl.close(); 
                }
            }

        });
    }
    
    preguntar();
}

intentosClave();

/*  Se define la funcion mostrarMenu en la cual ponemos un input para que 
    el usuario coloque su seleccion del 1 al 3, utilizando un switch que es mucho más practico que un if */
function mostrarMenu(){
    rl.question(`Has ingresado al Menu principal, elige una opcion del 1 al 3:\n
        1. Tabla de Multiplicar.\n
        2. Verificar si número es par o impar. \n
        3. Salir. \n
        Escribe tu respuesta: `, 
        (seleccion) => { /* --> se guarda la seleccion para despues utilizarla en el switch */
        switch (seleccion){
            case "1":
                console.log("\nSeleccionando Tabla de Multiplicar ...");

                /*  Se coloca otro input para que la persona coloque el número a multiplicar,
                    tambien en la funcion se le agrega parseInt para que lo convierta a numero y la funcion lo reciba bueno a ejecutar */

                rl.question(`Que número quieres Multiplicar?: `, (numero) => {
                    tablaMultiplicar(parseInt(numero));
                    console.log("\nSelección terminada, volviendo al menu... ... \n");
                    mostrarMenu();
                });
                break;
            case "2":
                //  Aqui sucede lo mismo, convertimos el numero para que funcione bien la funcion.
                console.log("\nSeleccionando Verificación de par o impar ...");
                rl.question(`\nColoque el número a validar: `, (numero) => {
                    esPar(parseInt(numero));
                    console.log("\nSelección terminada, volviendo al menu... ... \n");
                    mostrarMenu();
                });
                break;
            case "3":
                console.log("\nSaliendo del programa... ...");
                rl.close()
                break;
            default:
                /*  En caso tal seleccione algo fuera del rango mencionado se vuelve a correr
                    la funcion hasta seleccionar algo de las opciones */
                console.log("\nPor favor selecciona una opcion valida.");
                mostrarMenu();
                break;
        }
    });
}

/*  Definimos la funcion para la muiltiplicacion, la habia hecho con for,
    pero no con while por lo que fue mucho más facil con while, solo se le
    puso un contador para que se cumpla la condicion hasta 10*/

function tablaMultiplicar(numero){
    let contador = 1;

    while(contador <= 10){
        let resultado = contador * numero;
        console.log(`${contador} * ${numero} = ${resultado}`);

        contador++;
    }
}

/*  Definimos la funcion esPar con la cual utilizamos % o resto para comprobar si el resultado es exacto o no
    De esa forma sabemos si es par o no. */
function esPar(numero){
    if(numero % 2 === 0){
        return console.log("\nEs par", true);;
    }else{
        return console.log("\nEs impar", false);;
    }
}