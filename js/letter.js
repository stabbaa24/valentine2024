function openEnvelope() {
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');

    flap.style.transform = 'rotateX(180deg)';
    setTimeout(() => {
        letter.classList.add('open');
    }, 500); // Temps pour commencer l'animation après que le flap est ouvert.
}

// Ajoutez ce script pour gérer les interactions avec le cœur
document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');

    heart.addEventListener('click', () => {
        openEnvelope();
    });
});
