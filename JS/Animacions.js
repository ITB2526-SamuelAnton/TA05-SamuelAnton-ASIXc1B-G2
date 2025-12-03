// PROJECT LIST (expandable for future scalability)
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

// Inject projects dynamically
const container = document.getElementById("projectsContainer");

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

// Add flip animation listeners
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});