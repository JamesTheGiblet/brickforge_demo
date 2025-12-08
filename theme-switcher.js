document.addEventListener('DOMContentLoaded', () => {
    const navHub = document.querySelector('.nav-hub');
    if (!navHub) return;

    // 1. Create and inject the theme toggle button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'theme-toggle';
    toggleButton.className = 'theme-toggle-btn';
    toggleButton.title = 'Toggle Dark/Light Mode';
    // Place it before the "Back to Hub" button for better layout
    navHub.insertBefore(toggleButton, navHub.firstChild);

    // 2. Define theme functions
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            toggleButton.innerHTML = '☀️'; // Sun icon for switching to light
        } else {
            document.body.classList.remove('dark-mode');
            toggleButton.innerHTML = '🌙'; // Moon icon for switching to dark
        }
    };

    const toggleTheme = () => {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    };

    // 3. Set initial theme based on saved preference or system setting
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    let initialTheme = 'light';
    if (savedTheme) {
        initialTheme = savedTheme;
    } else if (prefersDark) {
        initialTheme = 'dark';
    }

    applyTheme(initialTheme);

    // 4. Add event listener
    toggleButton.addEventListener('click', toggleTheme);
});