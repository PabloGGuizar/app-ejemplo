import React, { useState, useEffect, useCallback } from 'react';

const themes = ['light', 'dark', 'system'];
const themeIcons = { light: '☀️', dark: '🌙', system: '💻' };

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');

  const applyTheme = useCallback((themeToApply) => {
    if (themeToApply === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', systemTheme);
    } else {
      document.documentElement.setAttribute('data-theme', themeToApply);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => applyTheme(theme);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme]);

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-switcher" title={`Tema: ${theme}`}>
      {themeIcons[theme]}
    </button>
  );
};

export default ThemeSwitcher;