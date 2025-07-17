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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulari es reenvii automàticament

    // Agafa el valor dels camps
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Valida si els camps estan emplenats
    const responseMessage = document.getElementById('formResponse');
    if (name && email && message) {
        // Envia les dades al servidor PHP
        fetch('enviar-formulari.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.text())
        .then(data => {
            responseMessage.style.display = 'block';
            responseMessage.textContent = data; // Mostra el missatge del servidor
            responseMessage.style.color = 'green';
        })
        .catch(error => {
            responseMessage.style.display = 'block';
            responseMessage.textContent = "Ha habido un problema al enviar el mensaje.";
            responseMessage.style.color = 'red';
        });
    } else {
        responseMessage.style.display = 'block';
        responseMessage.textContent = "Por favor rellena todos los campos antes de enviar.";
        responseMessage.style.color = 'red';
    }
});


const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});


