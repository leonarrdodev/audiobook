//Variaveis botões
const botaoPlayPause = document.getElementById('play-pause');
const botaoProximo = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior')

//Variaveis Titulo, faixa e quantidade de capitulos
const capituloTitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');
const numeroCapitulos = 10;

//Variaveis true/false está tocando e capitulo atual 
let taTocando = 0;
let capituloAtual = 1;

//Função executar faixa e alterar icone botão play-pause
function tocarFaixa() {
    audioCapitulo.play();
    taTocando = 1;
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle');
}

//Função pausar faixa e alterar icone play-pause
function pausarFaixa() {
    audioCapitulo.pause();
    taTocando = 0;
    botaoPlayPause.classList.remove('bi-pause-circle');
    botaoPlayPause.classList.add('bi-play-circle');
}

//Função que define se irá tocar ou pausar
function tocarOuPausar() {
    if (taTocando === 0){
        tocarFaixa();
    } else {
        pausarFaixa();
    }
}

//Função trocar nome da faixa 
function trocarNomeFaixa(){
    capituloTitulo.innerText = 'Capitulo ' + capituloAtual;
}

//Função proxima faixa, executa também a função trocar nome e executar faixa
function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
    capituloAtual += 1;
    }
    audioCapitulo.src = './assets/books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    trocarNomeFaixa();
}

//Função voltar faixa, executa também a função trocar nome e executar faixa
function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = 1;
    } else {
        capituloAtual -= 1;
    }
    audioCapitulo.src = './assets/books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    trocarNomeFaixa();
}

//Eventos de clique nos botões 
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximo.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', voltarFaixa);