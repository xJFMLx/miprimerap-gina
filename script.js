//alert("Hola este es mi Javascript");
//let nombre = "Batman"
//console.log(nombre);
//let contenidoTitulo = "Nombre";
//let titulo = document.querySelector(".logo . fuente-");
//titulo.innerHTML = contenidoTitulo;
//CONDICONALES
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo)
//if (textoTitulo == "Nombre") {
 //   titulo.innerHTML = "Otro";
//} else {
   // console.log("no se cumple")
//}


let nombre1 = "Bruno Diaz";
let ciudad1 = "Metropolis";
let gusto1 = "luchar";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto (nombre1, ciudad1, gusto1){
    let contenido = `Me llamo ${nombre1}, nací en ${ciudad1} y soy Batman. Me gusta ${gusto1} por la justicia.`;

    return contenido;
}

parrafo.innerText= cambiarTexto(nombre1,ciudad1,gusto1);
