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
            let html = 
            `
                <div class="resultado">
                    <div class="flex-result eleccion">
                        <h3>You Picked</h3>
                        <div class="resultado-targeta" id="${elec}"></div>
                    </div>
                    <div class="flex-result jugar-nuevamente">
                        <h3 class="texto-grande">Draw</h3>
                        <button class="jugarN">Play Again</button>
                    </div>
                    <div class="flex-result eleccion2">
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
            let html = 
            `
                <div class="resultado">
                    <div class="flex-result eleccion">
                        <h3>You Picked</h3>
                        <div class="resultado-targeta" id="${elec}"></div>
                    </div>
                    <div class="flex-result jugar-nuevamente">
                        <h3 class="texto-grande">You Win</h3>
                        <button class="jugarN">Play Again</button>
                    </div>
                    <div class="flex-result eleccion2">
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
            let html = 
            `
                <div class="resultado">
                    <div class="flex-result eleccion">
                        <h3>You Picked</h3>
                        <div class="resultado-targeta" id="${elec}"></div>
                    </div>
                    <div class="flex-result jugar-nuevamente">
                        <h3 class="texto-grande">You Lose</h3>
                        <button class="jugarN">Play Again</button>
                    </div>
                    <div class="flex-result eleccion2">
                        <h3>The house Picked</h3>
                        <div class="resultado-targeta" id="${elecMaquina}"></div>
                    </div>
                </div>
            `
            $div.innerHTML = html;
            d.querySelector("main").insertAdjacentElement("afterbegin",$div)
        }
    }, 200);
}
function actualizarScore(res){
    const score = d.getElementById("puntuacion");
    let ls = localStorage;
    if (res == "gano"){
        ls.setItem("res",parseInt(ls.getItem("res")) + 1);
        score.textContent = parseInt(ls.getItem("res"))
    } else if (res == "perdio") {
        ls.setItem("res",0);
        score.textContent = parseInt(ls.getItem("res"))
    }


    console.log(typeof(ls.getItem("res")))
}