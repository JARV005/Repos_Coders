// Simulación de datos
const repos = [
  { nombre: "Tomas Salazar Ruiz", proyecto: "Perfil Github", url: "https://github.com/Tomy20050211" },
  { nombre: "Juan Pablo Olarte Alvarez", proyecto: "Perfil Github", url: "https://github.com/sixorca00-collab" },
  { nombre: "Valeria Coy Ibarra ", proyecto: "Perfil Github", url: "https://github.com/valeriinfinito-creator" },
  { nombre: "Jose Daniel Gutiérrez Echavarría", proyecto: "Perfil de Github", url: "https://github.com/Frosty2801" },
];

// Render dinámico
const repoContainer = document.getElementById('repoContainer');
const searchInput = document.getElementById('searchInput');

function renderRepos(filtered = repos) {
  repoContainer.innerHTML = '';
  filtered.forEach(repo => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3 class="card__name">${repo.nombre}</h3>
      <p class="card__repo">${repo.proyecto}</p>
      <a href="${repo.url}" target="_blank" class="card__link">Ver Repositorio</a>
    `;
    repoContainer.appendChild(card);
  });
}

// Filtro de búsqueda
searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = repos.filter(repo =>
    repo.nombre.toLowerCase().includes(value) ||
    repo.proyecto.toLowerCase().includes(value)
  );
  renderRepos(filtered);
});

// Render inicial
renderRepos();
