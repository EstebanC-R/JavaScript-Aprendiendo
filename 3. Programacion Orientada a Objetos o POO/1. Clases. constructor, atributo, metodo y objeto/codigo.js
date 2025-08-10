class animal {                                                                                                       /* -----> Clase */
    constructor(especie, edad, color){                                                                               /* -----> Constructor */
        this.especie = especie;                                                                                      /* -----> Atributo 1*/
        this.edad = edad;                                                                                            /* -----> Atributo 2*/
        this.color = color;                                                                                          /* -----> Atributo 3*/
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;              /* -----> Atributo 4*/
    }


    /*
        UN METODO ES LO MISMO QUE UNA FUNCION PERO DEPENDE DE EN QUE PARTE SE LE ASIGNE, 
        SI ES DENTRO DE LA CLASE ENTONCES ES UN METODO DE LO CONTRARIO, SI ES POR FUERA SE LE LLAMA FUNCION 
    */


    // Las funciones flecha dentro de las clases no funcionan, al igual que el THIS. o el CONST ya que no se utiliza, por el contrario
    // se debe crear un metodo a la antigua, de la siguiente forma:

    verInfo(){                                                                                                       /* -----> Metodo */
        document.writeln("<br>")
        document.writeln(this.informacion);
    };
}

// Cada que se crea un new animal, es un objeto
// TENER EN CUENTA QUE LA MAYORIA DE LOS CASOS SE DEFINE ES CON CONST, Y NO CON LET
let gato = new animal("Gato", 11, "Blanco con Naranja");                                                             /* -----> Objeto 1*/
let perro = new animal("Perro", 2, "Gris Oscuro");                                                                   /* -----> Objeto 2*/
let pajaro = new animal("Pajaro", 13, "Amarillo y Blanco");                                                          /* -----> Objeto 3*/
let ardilla = new animal("Ardilla", 3, "Naranja");                                                                   /* -----> Objeto 4*/
let chinchiya = new animal("Chinchiya", 4, "Negra");                                                                 /* -----> Objeto 5*/

console.log(gato);

/* Si queremos ver una lista sin tener que llamarlo uno por uno es de la siguiente forma: */

let animales = [gato, perro, pajaro, ardilla, chinchiya];

animales.forEach(animal => {
    document.writeln(animal.informacion + "<br>");
    console.log(animal.informacion)
});


/* Si queremos por el contrario ver cada uno por separado con el metodo verInfo, seria de la siguiente forma: */

gato.verInfo();
perro.verInfo();
pajaro.verInfo();
ardilla.verInfo();
chinchiya.verInfo();




/* Si ponemos la variable a la que se refiere el this. con el animal que acabamos de crear, estariamos accediendo a sus propiedades ejemplo::

document.writeln(gato.color) o por ejemplo document.writeln(pajaro.edad) */