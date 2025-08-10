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

    ladrar(){
        if(this.especie == "Perro"){
            document.writeln(`${this.informacion} ¡Wof! <br>`)
        }else{
            document.writeln("No puede ladrar debido a que es un " + this.especie + "<br>")
        }
    }
}

let gato = new animal("Gato", 11, "Blanco con Naranja");                                                             
let perro = new animal("Perro", 2, "Gris Oscuro");                                                                  
let pajaro = new animal("Pajaro", 13, "Amarillo y Blanco");                                                         
let ardilla = new animal("Ardilla", 3, "Naranja");                                                                  
let chinchiya = new animal("Chinchiya", 4, "Negra");                                                                 


gato.ladrar();
perro.ladrar();
pajaro.ladrar();
ardilla.ladrar();
chinchiya.ladrar();
