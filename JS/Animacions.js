document.addEventListener('DOMContentLoaded', function() {

    // 🔧 SOLUCIÓN: RECARGAR AL VOLVER ATRÁS PARA EVITAR PANTALLA EN BLANCO
    window.addEventListener("pageshow", function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    });

    const pageContent = document.getElementById('page-content');
    const fadeElements = document.querySelectorAll('.fade-in');
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menuDropdown');
    const btnTop = document.getElementById('btnBackToTop');

    // 1. ENTRADA ESCALONADA MEJORADA
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // 2. SALIDA SUAVE AL NAVEGAR
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !this.target && !href.includes('docs.google.com')) {
                e.preventDefault();
                if (pageContent) pageContent.classList.add('content-exit');
                setTimeout(() => { window.location.href = href; }, 550);
            }
        });
    });

    // 3. MENÚ LATERAL CON EFECTO DE ROTACIÓN
    if (menuIcon && menu) {
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            menu.classList.toggle('show');
            menuIcon.style.transform = menu.classList.contains('show') ? 'rotate(90deg)' : 'rotate(0deg)';
            menuIcon.style.color = menu.classList.contains('show') ? 'var(--accent-color)' : 'white';
        });

        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
                menu.classList.remove('show');
                menuIcon.style.transform = 'rotate(0deg)';
                menuIcon.style.color = 'white';
            }
        });
    }

    // 4. ANIMACIÓN PARALLAX EN IMÁGENES DE PROYECTOS
    document.querySelectorAll('.project-item img').forEach(img => {
        img.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = img;
            const { offsetX: x, offsetY: y } = e;
            const moveX = (x / width - 0.5) * 20;
            const moveY = (y / height - 0.5) * 20;
            img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'translate(0, 0) scale(1)';
        });
    });

    // 5. FUNCIONALIDAD VOLVER ARRIBA
    if (btnTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnTop.classList.add('show');
            } else {
                btnTop.classList.remove('show');
            }
        });

        btnTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 7. TARJETAS FLIP
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('flipped'));
    });
});
