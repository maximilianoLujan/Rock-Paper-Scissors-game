const d = document;
export default function jugar(){
    d.addEventListener("click", e => {
        if (e.target.matches(".contenedor-botones div")){
            let random = Math.random()*10;
            let elecMaquina
            console.log(random)
            if (random < 3.3){
                elecMaquina = "tijera";
            } else if ((random >= 3.3) && (random < 6.6)){
                elecMaquina = "piedra";
            } else if ((random >= 6.6)){
                elecMaquina = "papel";
            }
            comprobarRes(e.target.id,elecMaquina);
        }
    })
}
function comprobarRes(elec,elecMaquina){
    console.log(elec,elecMaquina)
    d.querySelector(".contenedor-botones").classList.toggle("ocultar");
    d.getElementById("loader").classList.toggle("ocultar")


    let tempo = setTimeout(() => {
        d.getElementById("loader").classList.toggle("ocultar");
        if (elec === elecMaquina){
            const $div = d.createElement("div");
            $div.classList.add("resultado");
            let html = 
            `
                <div class="resultado">
                    <div>
                        <h3>You Picked</h3>
                        <p>${elec}</p>
                    </div>
                    <div>
                        <h3>Draw</h3>
                        <button>Play Again</button>
                    </div>
                    <div>
                        <h3>The house Picked</h3>
                        <p>${elecMaquina}</p>
                    </div>
                </div>
            `
            $div.innerHTML = html;
            d.querySelector("main").insertAdjacentElement("afterbegin",$div)
        }
    }, 1000);
}