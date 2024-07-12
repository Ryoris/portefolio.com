document.addEventListener('DOMContentLoaded', function() {
    // Sélection des liens dans la navigation
    const links = document.querySelectorAll('nav ul li a');

    // Ajout des événements pour changer la couleur des liens au survol
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#f4b41a';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = '#ffffff';
        });
    });
});


// Fonction pour changer de diapositive (exemple)
slideIndex = 0;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".carousel img");
    if (slides.length === 0) {
        console.warn("Aucune image trouvée dans le carousel.");
        return;
    }
    slideIndex = (n + slides.length) % slides.length; // Gestion du défilement infini
    slides.forEach(slide => slide.classList.remove("active"));
    slides[slideIndex].classList.add("active");
}
