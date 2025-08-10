class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            document.writeln("App iniciada </br>")
        }
    }

    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            document.writeln("App cerrada </br>")
        }
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente")
        }
    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            document.writeln("App desinstalada correctamente </br></br>")
        }
    }

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b> </br>
        Puntuación: <b>${this.puntuacion}</b> </br>
        Peso: <b>${this.peso}</b> </br>
        `
    }
}


const app1 = new App("160.000", "3.5", "900mb");
const app2 = new App("101", "4.0", "500mb");
const app3 = new App("16.000.000", "4.5", "400mb");
const app4 = new App("1.000.000", "5.0", "700mb");
const app5 = new App("14.000", "1.2", "800mb");
const app6 = new App("1.000", "4.0", "980mb");
const app7 = new App("12.000", "3.5", "1G");

document.writeln(`
    ${app1.appInfo()} </br>
    ${app2.appInfo()} </br>
    ${app3.appInfo()} </br>
    ${app4.appInfo()} </br>
    ${app5.appInfo()} </br>
    ${app6.appInfo()} </br>
    ${app7.appInfo()} </br>
    `)

