/* ----------------------------------------------------------- */
/*   TALLER DE FUNCIONES MIRAR ONEDRIVE PARA VER EL TALLER     */
/* ----------------------------------------------------------- */


/*  1. Saludo personalizado
    Crea una función llamada saludarUsuario que reciba como parámetro el nombre de una 
    persona y muestre un mensaje como:

    Hola, [nombre]. ¡Bienvenido(a)! */

function saludarUsuario(nombre){
    return `Hola, ${nombre}. ¡Bienvenido!`
}

console.log("Punto 1: " + saludarUsuario("Milton"));


/*  2. Suma de dos números
    Crea una función llamada sumar que reciba dos números y retorne la suma. Luego, 
    muestra el resultado en consola. */

function sumar(x, y){
    return x + y;
}

console.log("Punto 2: " + sumar(2, 3));

/*  3. Área de un triángulo
    Escribe una función calcularAreaTriangulo que reciba la base y la altura de un triángulo y 
    devuelva su área.

    Fórmula: área = (base * altura) / 2 */

function calcularAreaTriangulo(base, altura){
    const area = (base * altura) / 2;
    return area;
}

console.log("Punto 3: " + calcularAreaTriangulo(4, 7));


/*  4. Convertir grados Celsius a Fahrenheit
    Crea una función llamada convertirCelsiusAFahrenheit que reciba un número en grados 
    Celsius y retorne su equivalente en Fahrenheit.

    Fórmula: F = C * 1.8 + 32 */


function convertirCelsiusAFahrenheit(celsius){
    const f = celsius * 1.8 + 32;
    return f;
}

console.log("Punto 4: " + convertirCelsiusAFahrenheit(78));


/*  5. Número par o impar
    Crea una función llamada esPar que reciba un número y retorne true si es par y false si es 
    impar. */

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log("Punto 5: " + esPar(4));

/*  6. Precio con IVA
    Crea una función calcularPrecioConIVA que reciba un precio y un porcentaje de IVA, y 
    retorne el precio total con IVA incluido */

function calcularPrecioConIVE(precio, porcentajeDeIva){
    const iva = (precio * porcentajeDeIva) / 100;
    return precio + iva;
}

console.log("Punto 6: " + calcularPrecioConIVE(100000, 45));


/*  7. Generar tabla de multiplicar
    Crea una función tablaMultiplicar que reciba un número y muestre su tabla de multiplicar 
    del 1 al 10. */

function tablaMultiplicar(numero){
    for(let i = 1; i <= 10 ; i++ ){
        const tabla = numero * i;
        console.log(`${numero} * ${i} = ${tabla}`);
    }
}

console.log("Punto 7: ");
tablaMultiplicar(2);


/*  8. Contar vocales
    Escribe una función llamada contarVocales que reciba una palabra o frase y retorne 
    cuántas vocales tiene. */

function contarVocales(palabra){
    const vocales = ["a", "e", "i", "o", "u"];
    let contar = 0;
    for(letra of palabra){
        if(vocales.includes(letra)){ // el includes es para devolver un true or false si la varible temporal concide con 
                                    // la lista del array
            contar++;
        }
    }
    return contar;
}

console.log("Parte 8: " + contarVocales("Murcielago".toLowerCase())); 


/*  9. Validar contraseña segura
    Crea una función esContraseñaSegura que reciba una cadena y verifique que:
    • Tenga al menos 8 caracteres
    • Tenga al menos una mayúscula
    • Tenga al menos un número
    Retorna true si cumple todo, false si no. */

function esContraseñaSegura(contraseña){
    
    const tieneOchoCaracteres = contraseña.length >= 8;

    const tieneletraMayuscula = /[A-Z]/.test(contraseña);

    const tieneNumero = /[0-9]/.test(contraseña);

    return tieneOchoCaracteres && tieneletraMayuscula && tieneNumero;
}

console.log("Parte 9: " + esContraseñaSegura("1Miltons"));
console.log("Parte 9: " + esContraseñaSegura("Miltons"));
console.log("Parte 9: " + esContraseñaSegura("1miltons"));


/*  10. Simular lanzamiento de dado
    Crea una función llamada lanzarDado que simule el lanzamiento de un dado (número 
    aleatorio entre 1 y 6) y devuelva el resultado. */

/* function lanzarDado(){
    let pregunta;
    let contador = 0;
    do{
        pregunta = prompt("¿Quieres Lanzar el dado?");
        contador++;
        if(pregunta.trim().toLowerCase() == "si"){

            let lanzar = Math.floor(Math.random() * 6) + 1;

            document.writeln(
            `<h2 style="text-align: center; font-weight: bolder; color: rgba(24, 0, 243, 1)">El número del dado es: ${lanzar}</h2>
            <div class="dado" style="height: 150px; width: 150px; background: Black; margin-top:50px; margin: auto;"></div>
            `);

        }else if(pregunta.trim().toLowerCase() == "no"){
            alert("Esta bien");
        }else if(contador == 5){
            alert("LLEGASTE AL MAXIMO DE OPORTUNIDADES");
        }else{
            alert("Escoja especificamente si o no");
        }

        
    }while(pregunta !== "si" && contador < 5);
    
}

lanzarDado(); */


/* Otra forma para no utilizar el prompt y que funcione en consola */

function lanzarDado2(respuesta){
    switch (respuesta){
        case "si":
            let lanzar = Math.floor(Math.random() * 6) + 1;

            return lanzar;
        case "no":
            let estaBien = "Esta bien.";
            return estaBien;
        case "":
            let respondeBien = "Responde si o no.";
            return respondeBien;
    }
}

console.log("Parte 10: Quieres lanzar el dado? Tu resultado es: " + lanzarDado2("no"));



/*  BONUS: 
    Mini sistema de descuentos:
    Crea una función calcularDescuento que reciba:
    • el precio original,
    • un porcentaje de descuento,
    • y un booleano que indique si tiene “cupón”.
    Si tiene cupón, el descuento aumenta en un 10%. Devuelve el precio final */


function calcularDescuento(precioOriginal, porcentajeDeDescuento, tieneCupon){
    let calcularDescuento = (precioOriginal * porcentajeDeDescuento) / 100;
    let calcularCupon = porcentajeDeDescuento + 10;

    let respuesta = tieneCupon.toLowerCase();

    switch (respuesta){
        case "si":
            console.log(`Se le aplicará un descuento adicional del 10% lo que en total sería de un descuento del: ${calcularCupon}%`);
            let total = precioOriginal - (precioOriginal * calcularCupon) / 100;
            return total;
        case "no":
            console.log(`Ya que no tiene cupon se le aplicará el descuento original: ${porcentajeDeDescuento}%`);
            return calcularDescuento;
        case "":
            return "Escriba Si o No."
    }
}

console.log("Parte BONUS: " + calcularDescuento(10000, 50, ""));



/*  11. Crea una función esPrimo que reciba un 
    número y devuelva true si es primo o false si 
    no lo es.  */

/* para que se entienda, solo se divide hasta la raiz cuadrada del numero
porque despues de ahí se repite todo, si hasta ese numero de raiz, la i
no ha encontrado divisores posibles significa que es esPrimo, pero de lo contrario
si si ha encontrado divisores exacto significa que no es esPrimo, ya que
los unicos que pueden serlo son el 1 y el mismo, por lo que si entre medias hay
otro que lo divida exacto, ya no aplicaría esta condicion, por lo que no seria primo. */

function esPrimo(numero) {
    if (numero <= 1) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


console.log("Parte 11: " + esPrimo(645)); // --> false
console.log("Parte 11: " + esPrimo(45)); // --> false
console.log("Parte 11: " + esPrimo(23)); // --> false


/*  12. Invertir cadena 
    Escribe una función invertirCadena que reciba un string y retorne la cadena invertida. 
    Ejemplo: "hola" → "aloh"  */

function invertirCadena(palabra){

    let invertida = "";

    /* en el for solo estas tomando el largo, osea que lo estas convirtiendo a un
    número y adicionalmente estas empezando desde el final, por el -1 ya que las posiciones
    se dan desde 0, por lo que al decirle -1, le estas diciendo que empieze desde el final,
    por si no se entiende muy bien es que basicamente la palabra "Kratos" tiene 6 letras pero
    al tomar las posiciones en realidad serían del 0 al 5, por lo que se le pone -1 para que
    no de error, seguido le dices que mientras que el tamaño de la i sea mayor o igual a 0,
    entonces reste en 1, dentro del for solo le adicionamos la palabra y lo que se esta haciendo
    con i, osea el decremento */

    for(let i = palabra.length - 1; i >= 0; i--){
        invertida += palabra[i];
    }

    return invertida;
}

console.log("Parte 12: " + invertirCadena("Kratos"));



/*  12. Invertir cadena 
    Escribe una función invertirCadena que reciba un string y retorne la cadena invertida. 
    Ejemplo: "hola" → "aloh"  */

    


