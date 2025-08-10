class celular {
    constructor(color, peso, resolucionPa, resolucionCa, memoriaRam, nombre){
        this.color = color;
        this.peso = peso;
        this.resolucionPa = resolucionPa;
        this.resolucionCa = resolucionCa;
        this.memoriaRam = memoriaRam;
        this.nombre = nombre;
        this.encendido = false;
    }

    presionarBotonEncendido(){
        if(this.encendido == false){
            document.writeln(`Celular ${this.nombre} prendiendo <br>`);
            this.encendido = true;
        }else{
            document.writeln(`El celular ${this.nombre} ya está encendido </br></br></br>`);
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            document.writeln(`Reiniciando celular ${this.nombre} <br>`);
        }else {
            document.writeln(`El celular ${this.nombre} esta apagado <br>`);
        }
    }

    tomarFoto(){
        document.writeln(`Foto tomada en ${this.nombre} con una resolución de: ${this.resolucionCa}. <br>`);
    }

    grabarVideo(){
        document.writeln(`Grabando video en ${this.nombre} con una resolución de: ${this.resolucionCa}. <br>`)
    }

    verInfo(){
        return `
        Nombre: <b>${this.nombre}</b></br>
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Resolución de Cámara: <b>${this.resolucionCa}</b></br>
        Resolución de Pantalla: <b>${this.resolucionPa}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
    }

}

class celularAltaGama extends celular {
    constructor(color, peso, resolucionPa, resolucionCa, memoriaRam, nombre, camaraExtra){
        super(color, peso, resolucionPa, resolucionCa, memoriaRam, nombre)
        this.camaraExtra = camaraExtra;
    }

    grabarLento(){
        document.writeln(`Estas Grabando en camara lenta en tú ${this.nombre}`);
        // Si fuese en un ambito más real aquí es donde iría todo el codigo de como grabar en camara lenta
    }

    reconocimientoFacial(){
        document.writeln(`Vamos a iniciar un reconocimiento facial en tu ${this.nombre}`);
        // Si fuese en un ambito más real aquí es donde iría todo el codigo de como reconocer un rostro
    }

    infoAltaGama(){
        return this.verInfo() + `Resolucion de Cámara Extra: <b>${this.camaraExtra}</b> </br> </br>`;

    }
}


const iphone15ProMax = new celularAltaGama("negro/blanco/rojo", "150g", "5.2", "4k", "26G", "Iphone 15 ProMax", "HD");
const iphone16ProMax = new celularAltaGama("negro/blanco/verde", "160g", "6.0", "8k", "32G", "Iphone 16 ProMax", "Full HD");

document.writeln(`${iphone15ProMax.infoAltaGama()}`);
document.writeln(`${iphone16ProMax.infoAltaGama()}`);