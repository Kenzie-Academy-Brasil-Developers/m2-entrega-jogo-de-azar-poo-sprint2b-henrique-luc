const popUp_vitoria = document.querySelector('.pop_up_vitoria')
const img           = document.querySelector('img')
const body          = document.querySelector('body')

img.addEventListener('click', popUpControllers)

let jogoPopUp = new Jogo()

function popUpControllers() {
    jogoPopUp.abrirPopUp()
    jogoPopUp.resposta()
    jogoPopUp.receberPergunta()
    popUp_vitoria.classList.add('show')
    body.classList.add('scrollStop')
}

function fecharPopUp() {
    const inputPergunta = document.getElementById('inputPergunta')

    inputPergunta.value = ''
    popUp_vitoria.classList.remove('show')
    body.classList.remove('scrollStop')
}