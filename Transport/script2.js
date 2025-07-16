function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); // Activa o desactiva la classe "active"
}

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Mostrar o amagar el botó de scroll
window.addEventListener('scroll', function () {
    const scrollTopBtn = document.getElementById('scroll-top');
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll cap al principi
document.getElementById('scroll-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
