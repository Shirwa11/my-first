document.querySelectorAll('.submenu-toggle').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const submenu = item.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});
