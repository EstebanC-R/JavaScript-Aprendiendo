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
        Memoria Ram: <b>${this.memoriaRam}</b></br></br>
        `;
    }

}

const Redmi10 = new celular("negro/verde", "100gr", "HD 1080px", "40px", "6G", "Redmi Note 10");
const Redmi11 = new celular("negro/azul", "130gr", "Full HD 1080px", "60px", "8G", "Redmi Note 11");
const Redmi12 = new celular("negro/amarillo/verde/azul", "130gr", "Full HD 2k 1440px", "100px", "16G", "Redmi Note 12");

document.writeln(`${Redmi10.verInfo()}`);
Redmi10.presionarBotonEncendido();
Redmi10.tomarFoto();
Redmi10.grabarVideo();
Redmi10.reiniciar();
Redmi10.presionarBotonEncendido();



document.writeln(`${Redmi11.verInfo()}`);
Redmi11.presionarBotonEncendido();
Redmi11.tomarFoto();
Redmi11.grabarVideo();
Redmi11.reiniciar();
Redmi11.presionarBotonEncendido();



document.writeln(`${Redmi12.verInfo()}`);
Redmi12.presionarBotonEncendido();
Redmi12.tomarFoto();
Redmi12.grabarVideo();
Redmi12.reiniciar();
Redmi12.presionarBotonEncendido();