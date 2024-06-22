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
});
