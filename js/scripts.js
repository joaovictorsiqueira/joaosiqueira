// Detecta quando a section 'projetos' entra na tela
document.addEventListener("DOMContentLoaded", function() {
    // Selecione a section e o card que queremos animar
    const projetosSection = document.querySelector('.projetos');
    const card1 = document.querySelector('.card1');

    // Crie o Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando a section 'projetos' for visível, adicione a classe 'visible'
                card1.classList.add('visible');
                // Parar de observar após a animação ser ativada
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5 // Quando 50% da section estiver visível
    });

    // Inicie o observer para a section 'projetos'
    observer.observe(projetosSection);
});








//card 2: 
// Detecta quando a section 'projetos' entra na tela
document.addEventListener("DOMContentLoaded", function() {
    // Selecione a section e o card que queremos animar
    const projetosSection = document.querySelector('.projetos');
    const card1 = document.querySelector('.card2');

    // Crie o Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando a section 'projetos' for visível, adicione a classe 'visible'
                card1.classList.add('visible');
                // Parar de observar após a animação ser ativada
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5 // Quando 50% da section estiver visível
    });

    // Inicie o observer para a section 'projetos'
    observer.observe(projetosSection);
});


//card 3: 
// Detecta quando a section 'projetos' entra na tela
document.addEventListener("DOMContentLoaded", function() {
    // Selecione a section e o card que queremos animar
    const projetosSection = document.querySelector('.projetos');
    const card1 = document.querySelector('.card3');

    // Crie o Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando a section 'projetos' for visível, adicione a classe 'visible'
                card1.classList.add('visible');
                // Parar de observar após a animação ser ativada
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5 // Quando 50% da section estiver visível
    });

    // Inicie o observer para a section 'projetos'
    observer.observe(projetosSection);
});
