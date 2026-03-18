// Navigation toggle for mobile
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Highlight current page in nav
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href').endsWith(current)) a.classList.add('active');
  });

  // Accordion for skill cards
  document.querySelectorAll('.skill-card-header').forEach(header => {
    header.addEventListener('click', () => {
      header.closest('.skill-card').classList.toggle('open');
    });
  });
})();
