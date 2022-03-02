class Jogo {
    constructor(pergunta) {
        this._pergunta = pergunta;
        this._resposta = ['É certo.', 'Sem dúvida.', 'Sim, definitivamente.', 'A meu ver, sim', 'Concerteza vai acontecer',
            'Muito provavelmente.', 'Sim!', 'A bola indica que sim.', 'Resposta nebulosa, tente novamente.',
            'Pergunte novamente mais tarde.', 'Melhor não contar com isso.', 'Não é possivel prever agora.',
            'Concentre-se e pergunte novamente.', 'Não conte com isso.', 'Minha resposta é não',
            'Minhas fontes dizem que não', 'Perspectiva não tão boa.', 'Duvido muito que aconteça']
    }

    abrirPopUp() {

        const sectionToAppend     = document.querySelector('.pop_up_vitoria')

        sectionToAppend.innerHTML = ''

        const p1                  = document.createElement('p');
        const p2                  = document.createElement('p');
        const button              = document.createElement('button');
        
        button.id                 = 'outra_pergunta';
        button.innerText          = 'Fazer outra pergunta';
        
        p1.innerText              = this.receberPergunta()
        p2.innerText              = this.resposta()

        sectionToAppend.appendChild(p1)
        sectionToAppend.appendChild(p2)
        sectionToAppend.appendChild(button)

        button.addEventListener('click', fecharPopUp)

    }

    receberPergunta() {

        const input      = document.querySelector('input')

        const valorInput = input.value;

        this._pergunta   = valorInput;

        return valorInput
    }

    resposta() {
        const aleatorio = Math.floor(Math.random() * (18))

        for (let i = 0; i < this._resposta.length; i++) {
            if (i === aleatorio) {
                return this._resposta[i]
            }
        }

    }

}


