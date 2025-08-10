class Animal {
    #especie;    /* ------> Atributos Privados */
    #edad;       /* ------> Atributos Privados */
    #color;      /* ------> Atributos Privados */

    constructor(especie, edad, color) {
        this.#especie = especie;
        this.#edad = edad;
        this.#color = color;
    }

    // Getters
    getEspecie() {
        return this.#especie;
    }

    getEdad() {
        return this.#edad;
    }

    getColor() {
        return this.#color;
    }

    // Setters
    setEspecie(nuevaEspecie) {
        if (nuevaEspecie) this.#especie = nuevaEspecie;
    }

    setEdad(nuevaEdad) {
        if (nuevaEdad > 0) this.#edad = nuevaEdad;
    }

    setColor(nuevoColor) {
        if (nuevoColor) this.#color = nuevoColor;
    }

    verInfo() {
        document.writeln(`<br>Soy un ${this.#especie}, tengo ${this.#edad} años y soy de color ${this.#color}`);
    }
}

// Clase heredada con encapsulación
class Perro extends Animal {
    #raza;

    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.#raza = raza;
    }

    // Getter y Setter para raza
    getRaza() {
        return this.#raza;
    }

    setRaza(nuevaRaza) {
        if (nuevaRaza) this.#raza = nuevaRaza;
    }

    ladrar() {
        document.writeln("Wof");
        console.log("Wof");
    }

    verInfoPerro() {
        document.writeln(`<br>Soy un ${this.getEspecie()}, tengo ${this.getEdad()} años, soy de color ${this.getColor()} y mi raza es ${this.#raza}`);
        this.ladrar();
    }
}

// Creación de instancias
const perroIn = new Perro("Perro", 2, "Gris Oscuro", "Buldog");
const gato = new Animal("Gato", 11, "Blanco con Naranja");
const pajaro = new Animal("Pajaro", 13, "Amarillo y Blanco");

perroIn.verInfoPerro();
gato.verInfo();
pajaro.verInfo();