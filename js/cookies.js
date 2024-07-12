// Attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {
    var cookieBanner = document.getElementById('cookie-banner');
    var cookieCustomize = document.getElementById('cookie-customize');
    var acceptCookiesBtn = document.getElementById('accept-cookies');
    var declineCookiesBtn = document.getElementById('decline-cookies');
    var customizeCookiesBtn = document.getElementById('customize-cookies');
    var saveCookiesBtn = document.getElementById('save-cookies');
    var performanceCookiesCheckbox = document.getElementById('performance-cookies');
    var functionalityCookiesCheckbox = document.getElementById('functionality-cookies');

    console.log("Script de gestion des cookies chargé.");

    // Fonction pour cacher la bannière de cookies
    function hideCookieBanner() {
        console.log("Cacher la bannière de cookies.");
        cookieBanner.style.display = 'none';
    }

    // Fonction pour accepter tous les cookies
    function acceptAllCookies() {
        console.log("Accepter tous les cookies.");
        setCookie('cookies_accepted', 'true', 30); // Valable pendant 30 jours
        hideCookieBanner();
    }

    // Fonction pour refuser tous les cookies
    function declineAllCookies() {
        console.log("Refuser tous les cookies.");
        eraseCookie('cookies_accepted');
        hideCookieBanner();
    }

    // Fonction pour personnaliser les cookies
    function customizeCookies() {
        console.log("Personnaliser les cookies.");
        cookieBanner.style.display = 'none';
        cookieCustomize.style.display = 'block';
    }

    // Fonction pour sauvegarder les préférences de cookies personnalisées
    function saveCustomizedCookies() {
        console.log("Sauvegarder les préférences de cookies personnalisées.");
        // Exemple : sauvegarder les préférences de cookies dans des variables ou des cookies
        var performanceCookiesChecked = performanceCookiesCheckbox.checked;
        var functionalityCookiesChecked = functionalityCookiesCheckbox.checked;
        // Vous pouvez ici définir les cookies selon les préférences de l'utilisateur
        hideCookieBanner();
    }

    // Vérifier si le cookie `cookies_accepted` existe
    function checkCookieAccepted() {
        console.log("Vérifier si les cookies sont déjà acceptés.");
        if (getCookie('cookies_accepted') === 'true') {
            console.log("Les cookies sont déjà acceptés, cacher la bannière.");
            hideCookieBanner();
        } else {
            console.log("Les cookies ne sont pas encore acceptés.");
        }
    }

    // Gestion des événements sur les boutons
    acceptCookiesBtn.addEventListener('click', acceptAllCookies);
    declineCookiesBtn.addEventListener('click', declineAllCookies);
    customizeCookiesBtn.addEventListener('click', customizeCookies);
    saveCookiesBtn.addEventListener('click', saveCustomizedCookies);

    // Fonction pour définir un cookie avec une durée spécifiée en jours
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
        console.log("Cookie défini:", name, value);
    }

    // Fonction pour supprimer un cookie en le définissant avec une date d'expiration passée
    function eraseCookie(name) {
        console.log("Supprimer le cookie:", name);
        document.cookie = name + '=; Max-Age=-99999999;';
    }

    // Fonction pour obtenir la valeur d'un cookie spécifique
    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for(var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }

    // Au chargement de la page, vérifier si le cookie `cookies_accepted` existe
    checkCookieAccepted();
});
