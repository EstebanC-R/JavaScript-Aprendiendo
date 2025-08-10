// 1. ABSTRACCIÓN
// La abstracción consiste en simplificar objetos complejos seleccionando
// las características relevantes y ocultando los detalles innecesarios.

class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }
    
    // Este método es una abstracción del comportamiento "comer"
    // No nos importa CÓMO come exactamente cada animal, solo que puede hacerlo
    comer() {
        return `El ${this.especie} está comiendo`;
    }
    
    // Abstracción del comportamiento "dormir"
    dormir() {
        return `El ${this.especie} está durmiendo`;
    }
}

// Ejemplo de uso:
const perro = new Animal("perro", 3, "marrón");
console.log(perro.comer()); // "El perro está comiendo"



// 2. MODULARIDAD
// La modularidad consiste en dividir un sistema en partes más pequeñas (módulos)
// que pueden crearse y mantenerse por separado.

// Módulo para gestionar animales
class GestionAnimales {
    constructor() {
        this.listaAnimales = [];
    }
    
    agregarAnimal(animal) {
        this.listaAnimales.push(animal); // el push es para por asi decirlo empujarlo o subirlo al array
    }
    
    mostrarAnimales() {
        this.listaAnimales.forEach(animal => {
            console.log(`${animal.especie}, ${animal.edad} años, color ${animal.color}`);
            document.writeln(`${animal.especie}. ${animal.edad} años, color ${animal.color}`);
        });
    }
    
    buscarPorEspecie(especie) {
        return this.listaAnimales.filter(animal => animal.especie === especie);
    }
}

// Ejemplo de uso:
const zoologico = new GestionAnimales();
zoologico.agregarAnimal(new Animal("león", 5, "amarillo"));
zoologico.agregarAnimal(new Animal("elefante", 10, "gris"));
zoologico.mostrarAnimales();



// 3. ENCAPSULAMIENTO
// El encapsulamiento consiste en ocultar los detalles internos y proporcionar
// una interfaz controlada para interactuar con el objeto.

class AnimalEncapsulado {
    #edad; // Propiedad privada con # (JavaScript moderno)
    
    constructor(especie, edad, color) {
        this.especie = especie;
        this.#edad = edad; // Propiedad privada
        this.color = color;
    }
    
    // Getter para obtener la edad
    getEdad() {
        return this.#edad;
    }
    
    // Setter para establecer la edad con validación
    setEdad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this.#edad = nuevaEdad;
        } else {
            console.error("La edad debe ser un número positivo");
        }
    }
    
    obtenerInformacion() {
        return `Soy ${this.especie}, tengo ${this.#edad} años y soy de color ${this.color}`;
    }
}

// Ejemplo de uso:
const gato = new AnimalEncapsulado("gato", 7, "negro");
console.log(gato.obtenerInformacion());
gato.setEdad(8); // Usamos el setter para cambiar la edad
console.log(gato.getEdad()); // Usamos el getter para obtener la edad
// console.log(gato.#edad); // ERROR - No podemos acceder directamente a la propiedad privada



// 4. POLIMORFISMO
// El polimorfismo permite que clases diferentes proporcionen métodos
// con el mismo nombre pero con comportamientos diferentes.

class AnimalPolimorfismo {
    constructor(especie) {
        this.especie = especie;
    }
    
    // Método común que será sobreescrito
    hacerSonido() {
        return "Hace algún sonido";
    }
    
    presentarse() {
        return `Soy un ${this.especie} y ${this.hacerSonido()}`;
    }
}

class Perro extends AnimalPolimorfismo {
    constructor() {
        super("perro"); // lo que hace es llamar a la clase principal la cual es Animal y la asigna a especie
    }
    
    // Sobreescribimos el método hacerSonido
    hacerSonido() {
        return "hago guau guau";
    }
}

class Gato extends AnimalPolimorfismo {
    constructor() {
        super("gato");
    }
    
    // Sobreescribimos el método hacerSonido
    hacerSonido() {
        return "hago miau miau";
    }
}

// Ejemplo de uso:
const miPerro = new Perro();
const miGato = new Gato();

console.log(miPerro.presentarse()); // "Soy un perro y hago guau guau"
console.log(miGato.presentarse());  // "Soy un gato y hago miau miau"

document.writeln(miPerro.presentarse()); // "Soy un perro y hago guau guau"
document.writeln(miGato.presentarse());  // "Soy un gato y hago miau miau"

// Ejemplo de polimorfismo con un array de diferentes animales
const animales = [miPerro, miGato];

animales.forEach(animal => {
    console.log(animal.presentarse());
    document.writeln(animal.presentarse());
});