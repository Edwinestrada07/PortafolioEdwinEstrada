//NAVEGACIÓN BOTÓN MENÚ
const buttonMenuToggle = document.querySelector('.button-menu-toggle')
const navLinks = document.querySelector('.nav-links')

buttonMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links-responsive')
})

//PARA AGRANDAR IMAGENES DEL JOBS
function expandImage(element) {
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlay-image");

  overlayImage.src = element.querySelector("img").src;
  overlay.style.display = "flex";
  setTimeout(() => {
      overlay.classList.add("expanded");
  }, 50);
}

function closeImage() {
  const overlay = document.getElementById("overlay");

  overlay.classList.remove("expanded");
  setTimeout(() => {
      overlay.style.display = "none";
  }, 300);
}

//CÓDIGO PARA NAVEGAR DENTRO DE LA MISMA PÁGINA
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
      link.addEventListener('click', scrollToSection);
  });

  function scrollToSection(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  }
});

	







