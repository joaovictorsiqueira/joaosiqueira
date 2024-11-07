let time = 2000; //determina um inntervalo de tempo  de 2s
let currentImageIndex = 0; //o contador inicia no indice 0 (imagem 1)
let images = document.querySelectorAll(".sobre-icones img"); //importando imagens
let max = images.length; //determina o máximo de imagens no indice


function nextImage() {

    images[currentImageIndex].classList.remove("selected") //remove a class 'selected' para não exibir imagem


    currentImageIndex++ //incrementa mais um no contador

    if (currentImageIndex >= max) { // se o contador for maior que o numero de imagens ele retorna a 0
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add("selected") //adiciona a classe 'selected' para exibir imagem
}

function start() { //Repete a função com intervalo  de 2s para cada imagem
    setInterval(() => {
        //troca de imagens
        nextImage()
    }, time)
}


window.addEventListener("load", start) //inicia a ação quano a janela é carregada











/*document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.sobre-icones');
    const images = document.querySelectorAll('.sobre-icones span');
    const imageWidth = 150; // largura de uma imagem
    const totalImages = images.length;
    let currentIndex = 0;

    // Duplica o conteúdo do slider para permitir rolagem infinita
    slider.innerHTML += slider.innerHTML;

    function showNextImage() {
        currentIndex++;
        const offset = -currentIndex * imageWidth;
        slider.style.transition = 'transform 0.5s ease';
        slider.style.transform = `translateX(${offset}px)`;

        // Quando alcança o final da sequência original, reseta sem animação
        if (currentIndex === totalImages) {
            setTimeout(() => {
                slider.style.transition = 'none'; // Remove a transição para reposicionar
                slider.style.transform = 'translateX(0px)'; // Reposiciona para o início
                currentIndex = 0; // Reseta o índice
            }, 500); // Tempo exato da transição em ms para evitar salto visual
        }
    }

    // Define o intervalo para trocar a imagem a cada 2 segundos (2000 ms)
    setInterval(showNextImage, 2000);
});*/
