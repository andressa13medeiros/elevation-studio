const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

function closeNav() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.querySelector('.sr-only').textContent = 'Abrir menu';
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.querySelector('.sr-only').textContent = isOpen ? 'Fechar menu' : 'Abrir menu';
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNav();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeNav();
      toggle.focus();
    }
  });
}

const year = document.getElementById('ano');
if (year) year.textContent = String(new Date().getFullYear());
