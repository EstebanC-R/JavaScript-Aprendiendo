
/* ----------------------------------------------- BREAK ---------------------------------------------------- */
let numero = 0;

document.writeln(
    `<h1 style="color: red;">
        Esto es el BREAK
    </h1>`
);

while (numero < 100) {

    numero++;
    document.writeln(numero);

    if (numero == 10) {
        break; // basicamente rompe el bucle para que no siga contando el while hasta numero = 100
    }

}


/*-------------------- CONTINUE ---------------------*/
// Si le decimos cuantas veces va a iterar

// Generalmente se pone la i por su traduccion increment o incrementar

document.writeln(
    `<h1 style="color: red;">
        Esto es el CONTINUE
    </h1>`
);

// Basicamente le estamos diciendo que si en la iteracion i == 2 esta la omita y continue

for (let i = 0; i < 5; i++) {

    if (i == 2) {
        continue;
    }

    document.writeln(i + '<br> <br>');
}


/*--------------------------------------------------------------- LABEL ----------------------------------------------------------------*/

document.writeln(
    `<h1 style="color: red;">
        Esto es el LABEL
    </h1>`
);


array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

// El label seria el que esta abajo: de esta forma se refiere a toda la estructura
// forFeo salta toda la iteracion entonces si la ponemos en el if 2 esta directamente acaba todo
// porque le esta diciendo que continue con el siguiente for.
forFeo:
for (let array in array2) {
    if (array == 2) {

        for (let array of array1) {


            if (array == "maria"){
                continue;  // continue forFeo; esto significa que saltas todo
            }

            /* break forFeo; // se puede utilizar continue */

            document.writeln(array + "<br>");

        }

    } else {
        document.writeln(array2[array] + "<br>");
    }
}



// EJERCICIO: haz dos arrays de frutas y verduras y en uno pon el array de verduras para que lo tome ahí

document.writeln(
    `
        <h1 style = "color: red;">
            EJERCICIO
        </h1>
        <br>
    `
);

verduras = ["Lechuga", "Zanahoria", "Papa", "Pimenton"];
frutas = ["Manzana", "Fresa", "Pera", 'Guayaba', verduras , "Banana"];


// En este solo estamos agarrando la posicion de la lista de verduras y la omitimos con continue.

document.writeln(
    `
        <h3 style = "color: black; font-weight: bold;">
            Omitimos solo la primera lista = Verduras. CONTINUE
        </h3>
        <br>
    `
);

for (let ingrediente in frutas){

    if (ingrediente == 4) {
        continue;
    }

    document.writeln(frutas[ingrediente] + "<br>");
};

document.writeln(
    `
        <h3 style = "color: black; font-weight: bold;">
            Omitimos las 2 primeras de frutas. CONTINUE
        </h3>
        <br>
    `
);

for (let ingrediente in frutas){

    if (ingrediente == 0 || ingrediente == 1) {
        continue;
    } else if ( ingrediente == 4){
        for (ingrediente of verduras){
            document.writeln(ingrediente + "<br>")
        }
    } else {
        document.writeln(frutas[ingrediente] + "<br>");
    }
};

document.writeln(
    `
        <h3 style = "color: black; font-weight: bold;">
            Rompemos despues de las 3 primeras de verduras. BREAK LABEL
        </h3>
        <br>
    `
);

forVerduraFruta:
for (let ingrediente in frutas){

    if ( ingrediente == 4){
        for (ingrediente of verduras){
            if (ingrediente == "Papa") {
                break forVerduraFruta;
            } else {
                document.writeln(ingrediente + "<br>");
            }
        }
    } else {
        document.writeln(frutas[ingrediente] + "<br>");
    }
};