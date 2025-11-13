// Simulación de datos
const repos = [
  { nombre: "Ana Torres", proyecto: "Gestor de Tareas", url: "https://github.com/anatorres/gestor-tareas" },
  { nombre: "Carlos Pérez", proyecto: "E-commerce JS", url: "https://github.com/carlosperez/ecommerce-js" },
  { nombre: "Laura Gómez", proyecto: "API Clima", url: "https://github.com/lauragomez/api-clima" },
  { nombre: "Miguel Ruiz", proyecto: "Chat en Tiempo Real", url: "https://github.com/miguelruiz/chat-realtime" },
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
