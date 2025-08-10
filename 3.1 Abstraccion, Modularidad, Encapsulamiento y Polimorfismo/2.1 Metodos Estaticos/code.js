class animal {                                                                                                      
    constructor(especie, edad, color){                                                                               
        this.especie = especie;                                                                                      
        this.edad = edad;                                                                                            
        this.color = color;                                                                                          
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;              
    };

    verInfo(){                                                                                                     
        document.writeln("<br>")
        document.writeln(this.informacion);
    };
}

// LA HERENCIA SE VE CON EL EXTENDS, ESTE LO QUE HACE ES QUE LE HEREDA
// TODA LA INFORMACION PERO ADEMAS SE LE PUEDE AGREGAR ALGO NUEVO A LA MISMA CLASE
class perro extends animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color)  // EL SUPER ES PARA REFERIRSE AL PADRE DE LA CLASE OSEA ANIMAL
        this.raza = raza;
        this.infoPerro = `Soy un ${this.especie}, tengo ${this.edad} años, soy de color ${this.color} y mi raza es ${this.raza}`;
    };

    static ladrar(){                                /*   --------->IMPORTANTEEEE:  Ya que no estoy utilizando el contructor para crear un objeto tranquilamente puede ser un metodo static */
        document.writeln("Wof");
        console.log("Wof");
    };

    verInfoPerro(){           
        document.writeln("<br>");
        document.writeln(this.infoPerro);
        this.ladrar();                              /* ---------------> si quieres agregar un metodo a otro lo tienes que llamar por separado, de esta forma  */
    };
}

// NO SE PUEDE TENER UN OBJETO CON EL MISMO NOMBRE DE LA CLASE
// TENER EN CUENTA QUE LA MAYORIA DE LOS CASOS SE DEFINE ES CON CONST Y NO CON LET

/* let PerroIn = new perro("Perro", 2, "Gris Oscuro", "Buldog"); */   /* ---------> Referencia para el constructor del objeto */
let gato = new animal("Gato", 11, "Blanco con Naranja");
let pajaro = new animal("Pajaro", 13, "Amarillo y Blanco");                                                     

/* PerroIn.verInfoPerro(); */      /* ----------------> simplemente no lo ponemos ya que no definimos nada en el contructor para el objeto PerroIn */
perro.ladrar();                /* ----------------> se pone el nombre de la clase y se ejecuta normal, ya que no necesita del contructor para poder ejecutarse, eso lo hace static */
gato.verInfo();
pajaro.verInfo();