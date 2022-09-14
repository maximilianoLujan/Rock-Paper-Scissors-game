
export default function abrirReglas(){
    const $boton = document.getElementById("boton-reglas");
    document.addEventListener("click", e =>{
        if (e.target.matches("#boton-reglas")){
            document.querySelector(".contenedor-rules").classList.toggle("presentar");
            if ($boton.textContent === "Rules"){
                $boton.textContent = "Cerrar"
            } else {
                $boton.textContent = "Rules"
            }

        }
    })
}