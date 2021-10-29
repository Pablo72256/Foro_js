//Crear un foro en JS
"use strict";

let texto = [
  "Alicia: Hola Tomás, ¿que tal como te va todo? Espero que te esté yendo genial :)",
  "Tomás: Muy bien, muchas gracias Alicia, ando trabajando como siempre y tu?? ",
  "Alicia: Muy bien también, sigo buscando trabajo para compaginar las horas muertas mientras acabo la carrera :(",
  "Tomás: Genial!! Espero que consigas algo y que te vaya muy bien la carrera, si necesitas algo me dices. "
];

function mostrarArray(){

  let salida = "";
  for (let i=0; i<texto.length; i++){

    salida = salida + texto[i] + "<br/>";
  }
  document.getElementById("mensaje").innerHTML = salida;

}

function añadirMensaje(){
  let usuario = document.getElementById("usuario").value;
  let mensaje = document.getElementById("mensajes").value;

  texto.push(usuario + ": " + mensaje);

  mostrarArray();
}
mostrarArray();

document.addEventListener('keypress', logKey);

function logKey(e) {
  if (e.key == "Enter"){
    añadirMensaje();
  }
}

document.getElementById("enviar").addEventListener("click", añadirMensaje);

document.getElementById("mensaje").style.fontSize = "13px";

document.getElementById("mensaje").style.fontFamily = "Consolas";
