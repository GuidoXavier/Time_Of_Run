const finn = document.querySelector('.finn');
const donuts = document.querySelector('.donuts');
const tela = document.getElementById('Tela');
const score = document.getElementById('pontuacao');
const Recorde = document.getElementById('recorde');

let pontuacao = 0;
let record = localStorage.getItem('record') ? parseInt(localStorage.getItem('record')) : 0;
let pulou = false;
let velocidade = parseFloat(window.getComputedStyle(donuts).animationDuration) * 1000;

const jump = () => {
    finn.classList.add('jump')

    setTimeout(() => {
       finn.classList.remove('jump')
       pulou = false;

    }, 1000)
}

const loop = setInterval(() => {
    


    const donutsPosition = donuts.offsetLeft;
    const finnPosition = +window.getComputedStyle(finn).bottom.replace('px', '');

    if(donutsPosition <= 54 && donutsPosition>0 && finnPosition < 70 ) {
        donuts.style.animation = 'none';
        donuts.style.left = `${donutsPosition}px`;
        finn.style.animation = 'none';
        finn.style.bottom = `${finnPosition}px`

        clearInterval(loop);
        const txtGameOver = document.createElement('h1');
        const btnGameOver = document.createElement('button');
        btnGameOver.innerHTML = "Voltar para o menu"
        txtGameOver.innerHTML = "Você Perdeu :("
        btnGameOver.classList.add('btnGameOver');
        txtGameOver.classList.add('txtGameOver');
        btnGameOver.addEventListener('click', () => {
            window.location.href = "Menu.html";
        });
        tela.appendChild(btnGameOver);
        tela.appendChild(txtGameOver);
    }
    
    if(donutsPosition <= 54 && donutsPosition>30 && finnPosition > 70 && !pulou){
        pontuacao += 1;
        console.log
        score.textContent = pontuacao;
        if(pontuacao > record){
            record = pontuacao;
            Recorde.textContent = record;
            localStorage.setItem('record', record);
        }
        pulou = true;
    }

}, 10);

function inicializarRecord() {
 Recorde.textContent = record; 
}

const ajustarVelocidade = () => {
    if(velocidade > 300) {
        velocidade -= 1000;
        console.log(velocidade);
        donuts.style.animationDuration = `${velocidade}ms`
    }
}

document.addEventListener('keydown', jump);
inicializarRecord();
donuts.addEventListener('animationiteration', ajustarVelocidade);
