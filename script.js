document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check if dark mode was previously set
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('bg-gray-900', 'text-gray-100');
        toggle.checked = true;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('bg-gray-900', 'text-gray-100');
            body.classList.remove('bg-white', 'text-gray-900');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.remove('bg-gray-900', 'text-gray-100');
            body.classList.add('bg-white', 'text-gray-900');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
