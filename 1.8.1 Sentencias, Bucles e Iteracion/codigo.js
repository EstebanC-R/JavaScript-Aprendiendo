
/*---------- IF -----------*/
let numeroIF = 0;

document.writeln(
    `<h1 style="color: red;">
        Esto es el IF
    </h1>`
);

if ( 0 < 10) {
    document.writeln(`${numeroIF} Es menor que diez IF`);
};

/*-------------------- WHILE ---------------------*/
// No le decimos el numero de vueltas que van a dar o iteraciones
let numeroWHILE = 0;

document.writeln(
    `<h1 style="color: red;">
        Esto es el WHILE
        <br>
        <span style="color: black;">
            --------------------- Abre la consola -------------------------->
        </span>
    </h1>`
);

while (numeroWHILE < 10 ) {

    numeroWHILE++;

    console.log(`${numeroWHILE} es menor a diez WHILE`)

    if (numeroWHILE == 10){
        console.log("Haz llegado a 10")
    }
}

/*-------------------- DO-WHILE ---------------------*/
// En el one note se explica mucho mejor el DO-WHILE, 
// pero basicamente es que primero siempre se ejecuta el codigo del DO, 
// seguido del WHILE, en WHILE lo que pasa es que este ejecuta el condicional basado en 
// en la constante antes numeroDo_WHILE, que despues se utiliza en el DO, y el WHILE solamente
// lo que hace es poner la condicion para que se ejecute cuantas veces sea necesario.
let numeroDO_WHILE = 0;


document.writeln(
    `<h1 style="color: red;">
        Esto es el DO-WHILE
    </h1>`
);

do {
    document.writeln('<br>')
    
    document.writeln(`${numeroDO_WHILE} <br>`);
    numeroDO_WHILE++;
}

while (numeroDO_WHILE <= 6)

document.writeln('<br>')


/*-------------------- FOR ---------------------*/
// Si le decimos cuantas veces va a iterar

// Generalmente se pone la i por su traduccion increment o incrementar,
// En OneNote se explica mucho mejor, pero en general se pone la i como una varible simplemente para inicializarla, 
// despues lo que se hace es poner la condicion, y luego el incremento o decremento que se le va a dar.

document.writeln(
    `<h1 style="color: red;">
        Esto es el FOR
    </h1>`
);


for (let i = 0; i < 20; i++) {

    if (i == 12) {
        break;
    }

    document.writeln(i + '<br> <br>');
}


/*-------------------- FOR-IN ---------------------*/
//  Devuelve la POSICIÓN
// Ademas de que basicamente tienes que indicarle la lista para 
// poder que entienda los nombres o el contenido de cada uno
// SE EXPLICA MEJOR EN ONENOTE  

let animales = ['gato', 'perro', 'tiranosaurio rex'];

document.writeln(
    `<h1 style="color: red;">
        Esto es el FOR-IN
    </h1>`
);

for (animal in animales) {
    document.writeln(animal + '<br>');
}


/*-------------------- FOR-OF ---------------------*/
/* 
    Devuelve el VALOR:  Devuelve el contenido, esta es 
    la diferencia entre ambos, mientras que en uno se especifica 
    la linea 106 en el otro directamente sin hacerlo nos lo da. 
*/


document.writeln(
    `<h1 style="color: red;">
        Esto es el FOR-ON
    </h1>`
);

for (animal of animales) {
    document.writeln(animal + '<br>');
}