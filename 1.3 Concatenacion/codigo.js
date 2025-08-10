/* Para concatenar su utiliza + */
num1 = 10;
saludo = "¡Hola pedro!";
pregunta = " ¿Como estas?";

respuesta = "El dia es: " + num1 + " " + saludo + pregunta + ".";

document.writeln(respuesta);

/* Tambien existe el CONCAT para concatenar este sirve solo para Strings obligatoriamente */

respuesta = saludo.concat(pregunta);
document.writeln(respuesta);


/* Tambien Se puede concatenar con backtiks(BASICAMENTE SON LOS ``, ESTE NOS PERMITE TAMBIEN PONER CODIGO HTML) y variable entre ${} */
/* Esto seria la forma usual de hacerlo: */

let frase1 = "Milton Castaño";

let frase2 = "Soy " + frase1 + " y estoy caminando";
document.writeln(frase2)

/* Y esta la forma recomendada */

let nombre = "Milton Castaño";

let frase = `Soy ${nombre} y estoy caminando`;
document.writeln(frase2)