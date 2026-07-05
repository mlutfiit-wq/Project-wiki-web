const menuToggle = document.getElementById('menuToggle');
const navContainer = document.getElementById('navContainer');

menuToggle.addEventListener('click', () => {
  navContainer.classList.toggle('active');
});

const track = document.querySelector('.carousel-track')