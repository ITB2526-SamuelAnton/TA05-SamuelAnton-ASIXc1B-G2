// JavaScript para manejar las animaciones y la interactividad de la página
document.addEventListener('DOMContentLoaded', function() {
    // --- Menú desplegable ---
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menuDropdown');

    // Abre y cierra el menú al hacer clic en el icono
    if (menuIcon && menu) {
        menuIcon.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
            menu.classList.toggle('show');
        });

        // Cierra el menú si se hace clic fuera de él
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
                menu.classList.remove('show');
            }
        });

        // Evita que el evento de clic en el menú lo cierre
        menu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }

    // --- PROJECT LIST (expandable for future scalability) ---
    const projects = [
        {
            name: "Project 1 - Name Project",
            img: "https://via.placeholder.com/300x200",
            what: "Descripción de WHAT IS del proyecto 1.",
            why: "Explicación de WHY del proyecto 1."
        },
        {
            name: "Project 2 - Name Project",
            img: "https://via.placeholder.com/300x200",
            what: "Descripción de WHAT IS del proyecto 2.",
            why: "Explicación de WHY del proyecto 2."
        }
    ];

    // Inject projects dynamically (Este bloque solo se ejecuta si el contenedor existe)
    const container = document.getElementById("projectsContainer");

    if (container) {
        projects.forEach((project, index) => {
            const card = document.createElement("div");
            card.classList.add("project-card");

            card.innerHTML = `
                <h3>${project.name}</h3>
                <img src="${project.img}" alt="Project image" />

                <div class="flip-card" data-id="${index}-what">
                    <div class="flip-inner">
                        <div class="flip-front">WHAT IS</div>
                        <div class="flip-back">${project.what}</div>
                    </div>
                </div>

                <div class="flip-card" data-id="${index}-why">
                    <div class="flip-inner">
                        <div class="flip-front">WHY</div>
                        <div class="flip-back">${project.why}</div>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    }


    // --- LÓGICA DEL GIRO DE BOTONES (Aplica a botones estáticos y dinámicos) ---

    // El selector busca todos los contenedores de tarjeta giratoria.
    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            // Añade o quita la clase 'flipped', lo que activa la rotación en CSS
            card.classList.toggle('flipped');
        });
    });
});