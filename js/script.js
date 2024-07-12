document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#f4b41a';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = '#ffffff';
        });
    });

    // Gestion de la bannière de cookies
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptButton = document.getElementById('accept-cookies');
    var declineButton = document.getElementById('decline-cookies');
    var customizeButton = document.getElementById('customize-cookies');
    var customizePopup = document.getElementById('cookie-customize');
    var saveButton = document.getElementById('save-cookies');
    var performanceCookies = document.getElementById('performance-cookies');
    var functionalityCookies = document.getElementById('functionality-cookies');

    // Vérifie si le consentement aux cookies a déjà été donné
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    // Gère le clic sur le bouton "Accepter tous les cookies"
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        localStorage.setItem('performanceCookies', 'true');
        localStorage.setItem('functionalityCookies', 'true');
        cookieBanner.style.display = 'none';
    });

    // Gère le clic sur le bouton "Refuser les cookies"
    declineButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        localStorage.setItem('performanceCookies', 'false');
        localStorage.setItem('functionalityCookies', 'false');
        cookieBanner.style.display = 'none';
    });

    // Gère le clic sur le bouton "Personnaliser"
    customizeButton.addEventListener('click', function() {
        customizePopup.style.display = 'block';
    });

    // Gère le clic sur le bouton "Sauvegarder" dans la personnalisation
    saveButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        localStorage.setItem('performanceCookies', performanceCookies.checked);
        localStorage.setItem('functionalityCookies', functionalityCookies.checked);
        customizePopup.style.display = 'none';
        cookieBanner.style.display = 'none';
    });

    // Fonction pour vérifier le statut des cookies
    function checkCookieStatus() {
        if (localStorage.getItem('performanceCookies') === 'true') {
            // Activer les cookies de performance
        }
        if (localStorage.getItem('functionalityCookies') === 'true') {
            // Activer les cookies de fonctionnalité
        }
    }

    // Vérifier le statut des cookies au chargement de la page
    checkCookieStatus();

});

let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".carousel img");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
}
