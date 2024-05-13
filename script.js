const html = document.querySelector('html');
const focoBotao = document.querySelector('.app__card-button--foco');
const descansoCurtoBotao = document.querySelector('.app__card-button--curto');
const descansoLongoBotao = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const textoPrincipal = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop = true;
const botaoStartPause = document.querySelector('#start-pause');
let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;
const somPlay = new Audio('sons/play.wav');
const somPause = new Audio('sons/pause.mp3');
const somTempoAcabou = new Audio('sons/beep.mp3');
const botaoStartPauseTexto = document.querySelector('#start-pause span')
const botaoStartPauseImg = document.querySelector('#start-pause img')
const tempoNaTela = document.querySelector('#timer')

musicaFocoInput.addEventListener('change', () => {
    musica.paused ? musica.play() : musica.pause();
})

focoBotao.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco')
    focoBotao.classList.add('active');
})

descansoCurtoBotao.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto')
    descansoCurtoBotao.classList.add('active');
})

descansoLongoBotao.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo')
    descansoLongoBotao.classList.add('active');
})

function alterarContexto (contexto) {
    mostrarTempoNaTela();
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);

    switch (contexto) {
        case 'foco':
            textoPrincipal.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;

        case 'descanso-curto':
            textoPrincipal.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;

        case 'descanso-longo':
            textoPrincipal.innerHTML = `
            Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    }
}

// Lógica do temporizador

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
    botaoStartPauseTexto.textContent = "Começar";
    botaoStartPauseImg.src = "imagens/play_arrow.png";
}

const contagemRegresiva = () => {
    if (tempoDecorridoEmSegundos <= 0) { // quando o tempo acabar
        somTempoAcabou.play()
        alert('Tempo finalizado!');
        zerar();
        return
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempoNaTela();
}

function iniciarOuPausar() {
    if (intervaloId){ // significa que o temporizador já está em execução e está sendo pausado
        somPause.play();
        zerar()
        return
    }
    somPlay.play(); // else: começa o temporizador
    intervaloId = setInterval(contagemRegresiva, 1000); // tempo em milissegundos
    botaoStartPauseTexto.textContent = "Pausar";
    botaoStartPauseImg.src = "imagens/pause.png";
}

botaoStartPause.addEventListener('click', iniciarOuPausar);

// Mostrar o tempo na tela

function mostrarTempoNaTela () {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempoNaTela();