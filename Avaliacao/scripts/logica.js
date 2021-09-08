
var botao = document.getElementById("botao")
var container = document.querySelector(".container")
var conteudo = document.getElementById("campo")
var id = 0
var id2 = 0
botao.addEventListener("click", Adicionar)


container.style.background = "#ff793f"

function Adicionar(){

    let conte02 = conteudo.value

    let campoGeral = document.createElement("div")
    campoGeral.style.width = "500px"
    campoGeral.style.height = "40px"
    campoGeral.style.background = "#fff"
    campoGeral.style.margin = "5px"
    campoGeral.style.display = "flex"
    campoGeral.style.flexDirection = "row"
    campoGeral.style.justifyContent = "space-between"
    campoGeral.style.alignItems = "center"
    campoGeral.style.border = "1px solid #000"

    let campoAtividade = document.createElement("div")
    campoAtividade.style.width = "350px"
    campoAtividade.style.height = "40px"
    //campoAtividade.style.background = "#f7f1e3"
    campoAtividade.style.fontFamily = "monospace"
    campoAtividade.style.lineHeight = "40px"
    campoAtividade.innerText = conte02
    conteudo.value = "" 

    let botaoApagar = document.createElement("button")
    botaoApagar.style.width = "40px"
    botaoApagar.style.height = "40px"
    botaoApagar.style.background = "#ff5252"
    botaoApagar.style.value = "X"
    botaoApagar.setAttribute("id", id)

    botaoApagar.addEventListener("click", () => {
        campoGeral.remove()
    })

    let botaoDestacar = document.createElement("button")
    botaoDestacar.style.width = "40px"
    botaoDestacar.style.height = "40px"
    botaoDestacar.style.background = "#ff5252"
    botaoDestacar.setAttribute("id", id2)

    
    container.appendChild(campoGeral)
    campoGeral.appendChild(campoAtividade)
    campoGeral.appendChild(botaoApagar)
    campoGeral.appendChild(botaoDestacar)

    let cor = "#fff"

    botaoDestacar.addEventListener("click", () => {

        if(cor == "#fff"){
            campoGeral.style.background = "#34ace0"
            cor = "#34ace0"
        }
        else{
            campoGeral.style.background = "#fff"
            cor = "#fff"
        }
       
    })

    id++
    id2++
}