// Acostumbrase a usar el LET en las variables es mucho mejor que usar var ya que es mas seguro 
// en cuanto a que no se puedan reasignar el valor de la variable.

/*------------------------------------------- ARRAY ------------------------------------------*/
let persona = ["Milton", 21, "Colombia"];
let frutas = ["Manzana", "Naranja", "Lima"];


// Si copias una posicion de un array que no esta definida dentro del contenido del array
// va a aparecer undefined devido a que el array no tiene esa posicion, las posiciones se empiezan desde 0.

document.writeln(persona[0] + "<br>" + "<br>");

/*------------------------------- ARRAY ASOCIATIVOS -----------------------------------*/

let pc1 = {
    nombre: "UsuarioPc",
    procesador: "Ryzen 5800",
    ram: "24 GB",
    espacio: "512 GB"
};

pc2 = ["ÜsuarioPc", "Ryzen 5800", "24 GB", "512 GB"];

document.writeln(pc1["ram"]+ "<br>"+ "<br>")

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

let frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
    el procesador es: <b>${procesador}</b> <br>
    la memoria es: <b>${ram}</b> <br>
    el espacio es de: <b>${espacio}</b> <br>`;

document.writeln(frase);