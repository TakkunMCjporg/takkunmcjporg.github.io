(() => {
  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Theme toggle with localStorage
  const toggle = document.getElementById('themeToggle');
  const applyTheme = (mode) => {
    const root = document.documentElement;
    const body = document.body;
    const cards = document.querySelectorAll('.card');
    if (mode === 'light') {
      root.classList.add('light');
      body.classList.add('light');
      cards.forEach(c => c.classList.add('light'));
    } else {
      root.classList.remove('light');
      body.classList.remove('light');
      cards.forEach(c => c.classList.remove('light'));
    }
  };

  // Initialize theme from storage or system
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(stored || (prefersLight ? 'light' : 'dark'));

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }

  // Reduce motion respect
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    document.querySelectorAll('*').forEach(el => el.style.scrollBehavior = 'auto');
  }
})();
