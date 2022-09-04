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
        console.log("Yo elegi:",elec);
        console.log("La Maquina eligio:",elecMaquina)
        d.getElementById("loader").classList.toggle("ocultar");
        if (elec === elecMaquina){
            const $div = d.createElement("div");
            $div.classList.add("resultado");
            let html = 
            `
                <div class="resultado">
                    <div>
                        <h3>You Picked</h3>
                        <div class="resultado-targeta" id="${elec}"></div>
                    </div>
                    <div>
                        <h3>Draw</h3>
                        <button>Play Again</button>
                    </div>
                    <div>
                        <h3>The house Picked</h3>
                        <div class="resultado-targeta" id="${elec}"></div>
                    </div>
                </div>
            `
            $div.innerHTML = html;
            d.querySelector("main").insertAdjacentElement("afterbegin",$div)
        }
        if (((elec =="tijera")&&(elecMaquina=="papel"))||((elec =="papel")&&(elecMaquina=="piedra"))||((elec =="piedra")&&(elecMaquina=="tijera"))){
            actualizarScore("gano");
            const $div = d.createElement("div");
            $div.classList.add("resultado");
            let html = 
            `
                <div class="resultado">
                    <div>
                        <h3>You Picked</h3>
                        <div class="resultado-targeta" id="${elec}"></div>
                    </div>
                    <div>
                        <h3>You Win</h3>
                        <button>Play Again</button>
                    </div>
                    <div>
                        <h3>The house Picked</h3>
                        <div class="resultado-targeta" id="${elecMaquina}"></div>
                    </div>
                </div>
            `
            $div.innerHTML = html;
            d.querySelector("main").insertAdjacentElement("afterbegin",$div)
        }
        if (((elec =="tijera")&&(elecMaquina=="piedra"))||((elec =="papel")&&(elecMaquina=="tijera"))||((elec =="piedra")&&(elecMaquina=="papel"))){
            actualizarScore("perdio");                                                        
            const $div = d.createElement("div");
            $div.classList.add("resultado");
            let html = 
            `
                <div class="resultado">
                    <div>
                        <h3>You Picked</h3>
                        <div class="resultado-targeta" id="${elec}"></div>
                    </div>
                    <div>
                        <h3>You Lose</h3>
                        <button>Play Again</button>
                    </div>
                    <div>
                        <h3>The house Picked</h3>
                        <div class="resultado-targeta" id="${elecMaquina}"></div>
                    </div>
                </div>
            `
            $div.innerHTML = html;
            d.querySelector("main").insertAdjacentElement("afterbegin",$div)
        }
    }, 1000);
}

function actualizarScore(res){
    const score = d.getElementById("puntuacion");
    let ls = localStorage
    if (!ls.getItem("res")){
        ls.setItem("res",res)
    } else {
        ls.setItem("res",res)
        if (ls.getItem("res") == "gano"){
            const puntActual = score.textContent,
             nuevaPuntuacion = (parseInt(puntActual) + 1);
            score.textContent = nuevaPuntuacion.toString();
        }
        if (ls.getItem("res") == "perdio"){
            score.textContent = "0";
        }

    }



    console.log(ls)
}