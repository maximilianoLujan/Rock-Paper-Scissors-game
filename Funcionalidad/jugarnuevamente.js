const d = document;
export default function jugarnuevamente(){
    d.addEventListener("click", e =>{
        if (e.target.matches(".jugarN")){
            d.querySelector("main").removeChild(d.querySelector("main div"))
            d.querySelector(".contenedor-botones").classList.toggle("ocultar")
        }
    })
}