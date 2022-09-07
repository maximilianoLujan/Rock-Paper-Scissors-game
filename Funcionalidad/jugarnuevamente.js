const d = document;
export default function jugarnuevamente(){
    d.addEventListener("click", e =>{
        if (e.target.matches(".jugarN")){
            d.querySelector(".resultado").classList.toggle("ocultar")
            d.querySelector(".contenedor-botones").classList.toggle("ocultar")
        }
    })
}