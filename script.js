// Fade-in sections on scroll
const sections = document.querySelectorAll('.fade-in');
function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Navbar active link on scroll
const navLinks = document.querySelectorAll('nav a');
const allSections = document.querySelectorAll('section, #hero');

function activateNav() {
  let currentIndex = allSections.length - 1;
  allSections.forEach((sec, i) => {
    if(window.scrollY < sec.offsetTop - 100) {
      currentIndex = i - 1;
      return;
    }
  });
  navLinks.forEach(link => link.classList.remove('active'));
  if(currentIndex >= 0) navLinks[currentIndex].classList.add('active');
}

window.addEventListener('scroll', activateNav);

// Smooth scroll for nav links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
