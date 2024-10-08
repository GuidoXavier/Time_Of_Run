document.addEventListener('DOMContentLoaded', () => {
const btnIniciar = document.getElementById('btnIniciar');
const btnrecord = document.getElementById('btnRecord');
const btnSair = document.getElementById('btnSair');

const iniciarJogo = () => {
alert("O jogo começera em 1 segundo")
setTimeout(() => {
    window.location.href = 'index.html'
},1000)
}

const verRecords = () => {

}

const sairJogo = () => {

}

btnIniciar.addEventListener('click', iniciarJogo);
});