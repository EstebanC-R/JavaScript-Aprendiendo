
/* CODIGO PROBLEMA A */
let roberto = prompt("Cuanto dinero tiene roberto?");
let numero1 = Number(roberto); /*  -----------------------> esto es para convertir los String en Number */

let pedro = prompt("Cuanto dinero tiene pedro?");
let numero2 = Number(pedro); /*  -----------------------> esto es para convertir los String en Number */

let cofla = prompt("Cuanto dinero tiene cofla?");
let numero3 = Number(cofla); /*  -----------------------> esto es para convertir los String en Number */

let dinero_total = numero1 + numero2 + numero3;

alert(dinero_total);

let resto;

let helado1 = 2000;
let helado2 = 4000;
let helado3 = 5500;
let helado4 = 10000;


if (dinero_total == ""){
    alert("No colocaste ningun precio bro, espabila");
} else if (dinero_total < helado1) {
    alert("Si no te alcanza para el helado 1, entonces no te alcanza pa ninguno");
} else if (dinero_total >= helado4){
    alert(`Te alcanza para el Helado 1 = ${helado1}, el Helado 2 = ${helado2}, el Helado 3 = ${helado3} y el Helado 4 = ${helado4}`);
    respuesta = prompt("Cual deseas comer? elige con sus respectivos numeros 1, 2, 3 o 4");
    if (respuesta == 1){
        alert("Te alcanza para el helado 1, su precio es de: " + helado1);
        alert(`El vuelto es: ${resto = dinero_total - helado1}`);
    } else if (respuesta == 2) {
        alert("Te alcanza para el helado 2, su precio es de: " + helado2);
        alert(`El vuelto es: ${resto = dinero_total - helado2}`);
    } else if (respuesta == 3) {
        alert("Te alcanza para el helado 3, su precio es de: " + helado3);
        alert(`El vuelto es: ${resto = dinero_total - helado3}`);
    } else if (respuesta == 4){
        alert("Te alcanza para el helado 4, su precio es de: " + helado4);
        alert(`El vuelto es: ${resto = dinero_total - helado4}`);
    } else {
        alert("Selecciona un número valido")
    }
} else if(dinero_total >= helado3) {
    alert(`Te alcanza para el Helado 1 = ${helado1}, el Helado 2 = ${helado2} y el Helado 3 = ${helado3}`);
    respuesta = prompt("Cual deseas comer? elige con sus respectivos numeros 1, 2 o 3");
    if (respuesta == 1){
        alert("Te alcanza para el helado 1, su precio es de: " + helado1);
        alert(`El vuelto es: ${resto = dinero_total - helado1}`);
    } else if (respuesta == 2) {
        alert("Te alcanza para el helado 2, su precio es de: " + helado2);
        alert(`El vuelto es: ${resto = dinero_total - helado2}`);
    } else if (respuesta == 3) {
        alert("Te alcanza para el helado 3, su precio es de: " + helado3);
        alert(`El vuelto es: ${resto = dinero_total - helado3}`);
    } else {
        alert("Selecciona un número valido")
    }
} else if(dinero_total >= helado2) {
    alert(`Te alcanza para el Helado 1 = ${helado1} y el Helado 2 = ${helado2}`);
    respuesta = prompt("Cual deseas comer? elige con sus respectivos numeros 1 o 2");
    if (respuesta == 1){
        alert("Te alcanza para el helado 1, su precio es de: " + helado1);
        alert(`El vuelto es: ${resto = dinero_total - helado1}`);
    } else if (respuesta == 2) {
        alert("Te alcanza para el helado 2, su precio es de: " + helado2);
        alert(`El vuelto es: ${resto = dinero_total - helado2}`);
    } else {
        alert("Selecciona un número valido")
    }
} else if(dinero_total >= helado1) {
        alert("Te alcanza para el helado 1, su precio es de: " + helado1);
        alert(`El vuelto es: ${resto = dinero_total - helado1}`);
} ;
