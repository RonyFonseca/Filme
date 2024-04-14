const p = document.querySelector("#frase-filme")
const Marvel = document.querySelector("#marvel")
const Vitoria = document.querySelector("#video-vitoria")
const prin = document.querySelector("#cp-principal")

const Barbie = document.querySelector("#barbie")
let sum = 0
const Somar = () => {
    sum++
    Marvel.style.fontSize = sum + "10px"

    if(sum == 1){
        p.innerHTML = "Irei te dar outra chance"
        p.style.fontSize = "25px"
        p.style.backgroundColor = "red"
    }
    else if(sum == 2) {
        p.innerHTML = "Olha! Como sou um bom namorado toma outra chance."
    }
    else if(sum == 3) {
        p.innerHTML = "Você é teimosa em ?!"
    }
    else if(sum == 4) {
        p.innerHTML = "Não me restou escolha"
        Barbie.style.display = "none"
    }
}

const GanhamoFamilia = () => {
    Vitoria.style.display = "flex"
    Vitoria.style.alignItems = "center"
    Vitoria.style.justifyContent = "center"
    prin.style.display = "none"
}