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

    function hideCookieBanner() {
        console.log("Cacher la bannière de cookies.");
        cookieBanner.style.display = 'none';
    }

    function acceptAllCookies() {
        console.log("Accepter tous les cookies.");
        setCookie('cookies_accepted', 'true', 30); // Valable pendant 30 jours
        hideCookieBanner();
    }

    function declineAllCookies() {
        console.log("Refuser tous les cookies.");
        eraseCookie('cookies_accepted');
        hideCookieBanner();
    }

    function customizeCookies() {
        console.log("Personnaliser les cookies.");
        cookieBanner.style.display = 'none';
        cookieCustomize.style.display = 'block';
    }

    function saveCustomizedCookies() {
        console.log("Sauvegarder les préférences de cookies personnalisées.");
        var performanceCookiesChecked = performanceCookiesCheckbox.checked;
        var functionalityCookiesChecked = functionalityCookiesCheckbox.checked;
        // Vous pouvez ici définir les cookies selon les préférences de l'utilisateur
        hideCookieBanner();
    }

    // Vérifier si le cookie `cookies_accepted` existe
    function checkCookieAccepted() {
        console.log("Vérifier si les cookies sont déjà acceptés.");
        if (getCookie('cookies_accepted') === 'true') {
            console.log("Les cookies sont acceptés");
            if (cookieBanner){
                hideCookieBanner();
            }
        } else {
            console.log("Les cookies ne sont pas acceptés.");
        }
    }

    function checkButton() {
        if (acceptCookiesBtn) {
            acceptCookiesBtn.addEventListener('click', acceptAllCookies);
        }
        if (declineCookiesBtn) {
            declineCookiesBtn.addEventListener('click', declineAllCookies);
        }
        if (customizeCookiesBtn) {
            customizeCookiesBtn.addEventListener('click', customizeCookies);
        }
        if (saveCookiesBtn) {
            saveCookiesBtn.addEventListener('click', saveCustomizedCookies);
        }
    }

    // __________Au chargement de la page______________

    checkButton();
    checkCookieAccepted();

    // Vérifier et appliquer le thème au chargement de la page
    var theme = getCookie('site_theme');
    if (theme) {
        applyTheme(theme);
    } else {
        console.log("Pas de thème prédéfini:");
    }
});

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

// Fonction pour appliquer le thème à partir du cookie
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    console.log("Thème défini:", theme);
}

// Fonction pour définir et appliquer le thème
function setTheme(theme) {
    setCookie('site_theme', theme, 30);
    applyTheme(theme);
}
