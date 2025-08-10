class animal {                                                                                                      
    constructor(especie, edad, color){                                                                               
        this.especie = especie;                                                                                      
        this.edad = edad;                                                                                            
        this.color = color;                                                                                          
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;              
    }

    verInfo(){                                                                                                     
        document.writeln("<br>")
        document.writeln(this.informacion);
    };
}

// TENER EN CUENTA QUE LA MAYORIA DE LOS CASOS SE DEFINE ES CON CONST Y NO CON LET
let gato = new animal("Gato", 11, "Blanco con Naranja");                                                             
let perro = new animal("Perro", 2, "Gris Oscuro");                                                                  
let pajaro = new animal("Pajaro", 13, "Amarillo y Blanco");                                                         
let ardilla = new animal("Ardilla", 3, "Naranja");                                                                  
let chinchiya = new animal("Chinchiya", 4, "Negra");                                                                 


gato.verInfo();
perro.verInfo();
pajaro.verInfo();
ardilla.verInfo();
chinchiya.verInfo();