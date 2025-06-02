// Sticky Header
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

  // Active section highlighting
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Optional: Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  });
});
