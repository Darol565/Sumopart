function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav-active');
}

// Menü schließen, wenn die Fenstergrösse geändert wird
window.addEventListener('resize', () => {
    const nav = document.querySelector('.nav');
    if (window.innerWidth > 768) {
        nav.classList.remove('nav-active');
    }
});
