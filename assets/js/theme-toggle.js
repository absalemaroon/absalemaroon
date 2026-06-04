// Theme Toggle Script
// Handles light/dark mode switching with localStorage persistence

(function initTheme() {
  const HTML = document.documentElement;
  const THEME_KEY = 'theme-preference';
  const THEME_TOGGLE = document.getElementById('theme-toggle');
  const PREFIXES = ['dark', 'light'];

  // Check for system preference or stored preference
  function getThemePreference() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) {
      return stored;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }

  // Set theme
  function setTheme(theme) {
    HTML.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeIcon(theme);
  }

  // Update theme icon
  function updateThemeIcon(theme) {
    if (THEME_TOGGLE) {
      const icon = theme === 'dark' ? '☀️' : '🌙';
      THEME_TOGGLE.innerHTML = `<span class="theme-icon">${icon}</span>`;
      THEME_TOGGLE.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = HTML.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Initialize
  function init() {
    const theme = getThemePreference();
    setTheme(theme);

    if (THEME_TOGGLE) {
      THEME_TOGGLE.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
