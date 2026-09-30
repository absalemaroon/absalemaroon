(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const savedTheme = window.localStorage.getItem('absalem-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    toggle?.setAttribute('aria-pressed', String(theme === 'dark'));
    if (toggle) toggle.querySelector('.theme-toggle-icon').textContent = theme === 'dark' ? '○' : '◐';
  };
  setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
  toggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.localStorage.setItem('absalem-theme', nextTheme);
  });
})();
