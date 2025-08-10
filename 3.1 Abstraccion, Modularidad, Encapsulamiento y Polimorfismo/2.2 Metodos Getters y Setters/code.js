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
class Perro extends animal {
    constructor(especie, edad, color, raza, nombre){
        super(especie, edad, color)  // EL SUPER ES PARA REFERIRSE AL PADRE DE LA CLASE OSEA ANIMAL
        this.raza = null;
        this.nombre = null;
    };

    // De esta forma no se suele modificar debido a que es muy especifico para un elemento, por el contrario hacemos lo siguiente
    modificarRaza(){                              
        this.raza = "pedro"
    };

    // Set
    set setNombre(NewNombre){
        this.nombre = NewNombre;
    };

    set setRaza(NewRaza){
        this.raza = NewRaza;
    };

    // Get
    get getNomrbe(){
        return this.nombre;
    }

    get getRaza(){
        return this.raza;
    }

}

// NO SE PUEDE TENER UN OBJETO CON EL MISMO NOMBRE DE LA CLASE
// TENER EN CUENTA QUE LA MAYORIA DE LOS CASOS SE DEFINE ES CON CONST Y NO CON LET

const perro = new Perro("perro", 5, "Café", "Beagle", "Arturo");
const gato = new animal("Gato", 11, "Blanco con Naranja");
const pajaro = new animal("Pajaro", 13, "Amarillo y Blanco");                                                     


perro.modificarRaza();
document.writeln(perro.raza, "<br>", "<br>");

// La diferencia es que a los setters se les toma como propiedades, teniendole que asignar un nombre con = y no como con el modificarRaza()

// Set
perro.setNombre = "Javier";
document.writeln(perro.nombre, "<br>");

perro.setRaza = "Doberman";
document.writeln(perro.raza, "<br>", "<br>");

// Get
document.writeln(perro.getNomrbe, "<br>");
document.writeln(perro.getRaza);