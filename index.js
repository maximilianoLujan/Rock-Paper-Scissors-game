import abrirReglas from "./Funcionalidad/abrirReglas.js";
import jugar from "./Funcionalidad/jugar.js";
import jugarnuevamente from "./Funcionalidad/jugarnuevamente.js";

const d = document,
 score = d.getElementById("puntuacion");
d.addEventListener("DOMContentLoaded",e =>{
    score.textContent = localStorage.getItem("res");
    abrirReglas();
    jugar();
    jugarnuevamente();
})