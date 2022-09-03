
export default function abrirReglas(){
    document.addEventListener("click", e =>{
        if (e.target.matches("#boton-reglas")){
            document.querySelector(".contenedor-rules").classList.toggle("presentar")
        }
    })
}