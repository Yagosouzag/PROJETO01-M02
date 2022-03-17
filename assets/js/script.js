const elementoNome = document.getElementById('nome'); 
const elementoSituacao = document.querySelector('#estado'); 
const elementoImagem = document.querySelector('#imagem');
let elementoBtn = document.querySelector('#alterar');


elementoBtn.addEventListener('click', () =>{
    if(elementoBtn.value == 'primeiro'){
        elementoImagem.src = './assets/img/Ben 10 Normal.jpg'      
        elementoNome.innerText = 'BEN 10' 
        elementoSituacao.innerText = 'HUMANO' 
        elementoBtn.value = 'segundo' 
    } else if(elementoBtn.value == 'segundo') { 
        elementoImagem.src = './assets/img/Diamante.png'  
        elementoNome.innerText = 'BEN 10' 
        elementoSituacao.innerText = 'DIAMANTE' 
        elementoBtn.value = 'terceiro' 
    } else { 
        elementoImagem.src = './assets/img/QuatroBraços.jpg' 
        elementoNome.innerText = 'BEN 10' 
        elementoSituacao.innerText = 'QUATRO BRAÇOS' 
        elementoBtn.value = 'primeiro' 
    }
});