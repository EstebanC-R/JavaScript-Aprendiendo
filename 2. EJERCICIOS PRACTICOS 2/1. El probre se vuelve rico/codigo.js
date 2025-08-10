

let pase = false; // para verificar despues de que alguien pase, de esta forma si se cumplen todas las condiciones la persona obtiene el pase gratis, y si otro tiene 2 de las condiciones cumplidas pero le falta la ultima ya no podra pasar porque se activo el pase a true

const nuevoNombre = () => {
    nombre = prompt("Cual es tu nombre?");
    if (nombre == "" || nombre == null){
        alert("Andate de aqui pelotudo");
    } else {
        alert(`Ok ${nombre} prosigamos`)
    }
}

const mayoresDeEdad = () => {

    let edad = prompt(`Cual es tu edad ${nombre} wacho?`);
    edad = parseInt(edad);

    if (isNaN(edad) || edad <= 0){
        alert("Esa edad no es valida gordito.")
        return;
    }


    if (edad >= 18){
        alert("Felicidades eres mayor de edad, puedes pasar");

        let hora = prompt(`Me podrias decir la hora ${nombre}? Es que se me olvido, indicamela en formato 24H y en número no en letras`)
        hora = parseInt(hora);

        if (isNaN(hora) || hora < 0 || hora > 24) {
            alert("Esa hora no es válida, bro. Debe estar entre 0 y 24.");
            return;            
        }

        if (hora >= 2 && hora < 6 && pase == false) {
            alert("Puedes pasar y es gratis bb");
            pase = true;
        } else {
            alert(`Son las ${hora}:00, puedes pasar pero tienes que pagar`);
        }

    } else {
        alert("Que dices pta, para donde andás gordo?, andate pa la casa bebe");
        return;
    }

}

nuevoNombre()
mayoresDeEdad()
nuevoNombre()
mayoresDeEdad()
nuevoNombre()
mayoresDeEdad()




let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cual es tu edad?");
    edad = parseInt(edad);

    if(edad > 18){
        if(time >= 2 && time < 7 && free == false){
            alert("Podes pasar gratis porque sos la primer persona despues de las 2 AM");
            free = true;
        }else{
            alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
        }
    }else {
        alert("Mira papu, sos menor de edad por ende no vas a pasar, MAQUINOLA");
    }
}


validarCliente(23);
validarCliente(24);
validarCliente(2);
validarCliente(2);
validarCliente(3);
validarCliente(3);


