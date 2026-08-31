document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();

  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
    });
  });
});
