document.addEventListener('DOMContentLoaded', function () {
    let petalContainer = document.querySelector('.petal-container');

    function createPetal() {
        let petal = document.createElement('div');
        petal.className = 'petal';
        let size = Math.random() * (50 - 20) + 20; // Taille aléatoire entre 20px et 50px
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${Math.random() * 100}%`; // Position horizontale aléatoire
        petal.style.animationDuration = `${Math.random() * (8 - 4) + 4}s`; // Durée d'animation aléatoire entre 4s et 8s
        petal.style.animationDelay = `${Math.random() * 2}s`; // Délai d'animation aléatoire jusqu'à 2s
        petalContainer.appendChild(petal);
    }

    for (let i = 0; i < 50; i++) {
        createPetal();
    }
});
