
(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('artehub-theme');
  if (savedTheme) root.dataset.theme = savedTheme;

  document.addEventListener('click', (event) => {
    const themeButton = event.target.closest('[data-theme-toggle]');
    if (themeButton) {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('artehub-theme', next);
      themeButton.textContent = next === 'dark' ? '☀️ Claro' : '🌙 Escuro';
    }
    const menuButton = event.target.closest('[data-menu-toggle]');
    if (menuButton) document.querySelector('.nav-links')?.classList.toggle('open');
  });

  const themeButton = document.querySelector('[data-theme-toggle]');
  if (themeButton) themeButton.textContent = root.dataset.theme === 'dark' ? '☀️ Claro' : '🌙 Escuro';

  const slides = [
    ['imagens/uniao-dos-povos.png', 'Arte, união e diversidade'],
    ['imagens/natureza-brasil.png', 'Natureza e identidade brasileira'],
    ['imagens/miscigenacao-brasil.png', 'A formação cultural do Brasil'],
    ['imagens/culturas-brasileiras.png', 'Encontros entre diferentes culturas'],
    ['imagens/mosaico-culturas.png', 'O Brasil como mosaico de culturas'],
    ['imagens/saberes-e-tradicoes.png', 'Saberes, crenças e tradições'],
    ['imagens/dancas-culturais.png', 'Danças e manifestações culturais'],
    ['imagens/pluralidade.png', 'A riqueza da pluralidade'],
    ['imagens/entre-outras-mil.png', 'Entre outras mil culturas']
  ];
  const img = document.querySelector('[data-carousel-image]');
  if (img) {
    let index = 0;
    const caption = document.querySelector('[data-carousel-caption]');
    const show = () => {
      const assetRoot = /\/(en|esp)\//.test(location.pathname) ? '../assets/img/' : 'assets/img/';
      img.src = assetRoot + slides[index][0];
      img.alt = slides[index][1];
      caption.textContent = slides[index][1] + ' — ' + (index + 1) + '/' + slides.length;
    };
    document.querySelector('[data-carousel-prev]')?.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length; show();
    });
    document.querySelector('[data-carousel-next]')?.addEventListener('click', () => {
      index = (index + 1) % slides.length; show();
    });
    show();
  }
})();
