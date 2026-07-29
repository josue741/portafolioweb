// --- Menú Responsive ---
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-link');

// Abrir/Cerrar menú
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Opcional: animar el icono hamburguesa
        navToggle.classList.toggle('toggle-active');
    });
}

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// --- Enlaces Activos en Scroll ---
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100; // Ajuste para el header fijo
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-list a[href*=${sectionId}]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// --- Efecto de Escritura Simple (Opcional para el Hero) ---
const textElement = document.querySelector('.hero-subtitle');
if (textElement) {
    const text = textElement.innerText;
    textElement.innerText = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            textElement.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Velocidad de escritura
        }
    }
    
    // Iniciar el efecto después de un pequeño retraso
    setTimeout(typeWriter, 500);
}