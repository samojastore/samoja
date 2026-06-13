// header.js
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Opsional: klik di luar menu bisa nutup (biar lebih nyaman)
document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const menuBtn = document.querySelector('.menu-btn');
  
  // Kalau menu aktif, dan yang diklik bukan menu & bukan tombol menu, maka tutup
  if (menu.classList.contains('active') && 
      !menu.contains(event.target) && 
      !menuBtn.contains(event.target)) {
    toggleMenu();
  }
});