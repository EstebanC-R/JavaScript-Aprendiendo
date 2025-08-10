
const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}


alert("¿Que operacion deseas realizar?");

let operacion = prompt("1: suma, 2: resta, 3: multiplicación, 4: división");

if (operacion == 1 ){
    let numero1 = prompt("Primer número para sumar");
    let numero2 = prompt("Segundo número para sumar");
    let resultado = sumar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`);

}
else if (operacion == 2 ){
    let numero1 = prompt("Primer número para restar");
    let numero2 = prompt("Segundo número para restar");
    resultado = restar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 3 ){
    let numero1 = prompt("Primer número para multiplicar");
    let numero2 = prompt("Segundo número para multiplicar");
    let resultado = multiplicar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 4 ){
    let numero1 = prompt("Primer número para dividir");
    let numero2 = prompt("Segundo número para dividir");
    let resultado = dividir(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else {
    alert("No se ha encontrado la operación")
}