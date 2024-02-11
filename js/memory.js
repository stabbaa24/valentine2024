let index = 0; // Le slide actuel
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(n) {
    index = (n + totalSlides) % totalSlides; // Calcul pour le cycle sans fin
    const offset = -index * 100; // Décalage en pourcentage
    document.querySelector('.carousel-slides').style.transform = 'translateX(' + offset + '%)';
}

function moveSlide(n) {
    showSlide(index + n);
}

showSlide(index); // Initialise le carrousel sur le premier slide
