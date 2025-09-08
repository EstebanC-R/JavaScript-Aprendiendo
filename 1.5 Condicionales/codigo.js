/* Las llaves determinan un bloque

{

    alert('Hola');
    document.writeln("Pedro")

}

Se ejecuta siempre y cuando sea true y no false


if (false) {
    alert('Hola')
}

Como es false no se va a ejecturar, caso contrario de si pondría True

*/

if (10 > 15) {
    alert("Hola")
}

let nombre = "Milton";
let apellido = "CastMiltonño"

/* EJEMPLO 1 */

if (nombre == "Molto") {
    console.log("Hola");
}else {
    console.log("No es igual");
};

/* EJEMPLO 2 Se puede poner tantos else if comno se quiera*/

if (nombre == "Milton") {
    console.log("Tu nombre es: " + nombre);
} else if (nombre == "Castaño"){
    console.log("Tu nombre es: " + nombre);
}else{
    console.log("Tu nombre es otro");
}

/* EJEMPLO 3 = utilizamos el prompt para pedir un dato y lo almacenamos en una variable, despues lo mostramos en el condicional */

let nombre2;
nombre2 = prompt("Cual es tu nombre?");


if (nombre2 == "Milton Castaño" || nombre2 == "Milton" || nombre2 == "Castaño"){
    alert("Hola Admin Milton Castaño");
} else if (nombre2 == "Mauricio"){
    alert("Hola Asesor Virtual " + nombre2);
} else {
    alert("Coloca un nombre valido");
}


/* EJEMPLO 4 = esto entra tambien en condicionales pero el while es agregado por experimentar, cabe recalcar que alparecer el while se rompe con break*/


if (nombre == "Milton" && apellido == "Castaño"){
    console.log(`Tu nombre es: ${nombre} ${apellido}`);
}else if (nombre ) {
    console.log("Tu nombre es distinto");
    let nombre2 = prompt("Cual es tu nombre?");
    if (nombre == nombre2) {
        alert("Hola " + nombre2);
    }else {
        while (nombre2 == ""){
            alert("Coloca un nombre valido pendejo");
            let nombre2 = prompt("Cual es tu nombre?");
            alert("Hola " + nombre2);
            break;
        };
    };
};

/* ---------------------- */
/* CONDCIONAL SWITCH CASE */
/* ---------------------- */

/*
switch(VALOR){

    case VALOR1:
        //CODIGO A EJECUTAR
        //break;

    case VALOR2:
        //CODIGO A EJECUTAR
        //break;

    case VALOR3:
        //CODIGO A EJECUTAR
        //break;

    case VALOR4:
        //CODIGO A EJECUTAR
        //break;

    default:
        //CODIGO A EJECUTAR
        //break;

}
*/

let variableFruta = 'Mango'.toLowerCase()

switch(variableFruta){

    case 'mango':
        console.log(`Precio: $100 el kg de ${variableFruta}`)
        break;

    case 'fresa':
        console.log(`Precio: $200 el kg de ${variableFruta}`)
        break;

    case 'banano':
        console.log(`Precio: $300 el kg de ${variableFruta}`)
        break;

    case 'mandarina':
        console.log(`Precio: $400 el kg de ${variableFruta}`)
        break;

    case 'aguacate':
        console.log(`Precio: $500 el kg de ${variableFruta}`)
        break;

    default:
        console.log(`NO está dispobible ${variableFruta}`)
        break;
}