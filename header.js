function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuBtn = document.querySelector('.menu-btn');
    if (menu.classList.contains('active') && 
        !menu.contains(event.target) && 
        !menuBtn.contains(event.target)) {
        toggleMenu();
    }
});