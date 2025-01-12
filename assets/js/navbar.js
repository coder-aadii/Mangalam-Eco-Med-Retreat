// Add active class to the current page's navigation link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
