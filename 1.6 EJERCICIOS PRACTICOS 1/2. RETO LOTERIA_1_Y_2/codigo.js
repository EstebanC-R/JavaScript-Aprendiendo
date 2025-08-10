
/* CODIGO PROBLEMA B */

alert("Ël boleto de loteria cuesta 1500");
let dinero = prompt("Cuanto dinero tienes?");

let boleto = 1500;
let resta;

if (dinero < boleto){
    alert("A quien quieres engañar bobo, anda pasha bobo");
} else if (dinero >= boleto) {
    respuesta = prompt("Cuantos boletos quieres comprar 1, 2 o 3? Solo puedes comprar hasta 3 por persona");
    if(respuesta == 1){
        alert(`Haz comprado un boleto su precio es de ${boleto} y lo que te sobra es: ${resta = dinero - boleto}`);
    } else if (respuesta == 2) {
        if (dinero < 3000){
            pregunta = prompt("Solo te alcanza para 1, quieres comprarlo? selecciona el numero correspondiente 1(SI) o 2(NO)");
            if (pregunta == 1){
                alert(`Haz comprado un boleto su precio es de ${boleto} y lo que te sobra es: ${resta = dinero - boleto}`);
            } else {
                alert("No haz seleccionado ningun boleto, tacaño");
            }
        } else {
            alert(`Haz comprado 2 boletos su precio es de ${boleto *= 2} y lo que te sobra es: ${resta = dinero - boleto}`);
        }
    } else if (respuesta == 3) {
        if (dinero < 4500){
            pregunta = prompt("Solo te alcanza para 2, quieres comprarlos? selecciona el numero correspondiente 1(SI) o 2(NO)");
            if (pregunta == 1){
                alert(`Haz comprado un boleto su precio es de ${boleto *= 2} y lo que te sobra es: ${resta = dinero - boleto}`);
            } else {
                alert("No haz seleccionado ningun boleto, tacaño");
            }
        } else {
            alert(`Haz comprado 3 boletos su precio es de ${boleto *= 3} y lo que te sobra es de: ${resta = dinero - boleto}`);
            if (resta > 0){
                alert("Acabas de donar lo que te sobraba lo que es de: " + resta + " gracias por tu colaboración");
            }
        }
    } else if (respuesta > 3){
        alert("Gracias por la caridad pero recuerda que solo puedes comprar hasta 3")
    } else {
        alert("No haz seleccionado ningun boleto, tacaño");
    }
};
