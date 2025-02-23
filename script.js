document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
  
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill out all fields.');
  } else if (!email.includes('@')) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});
let currentIndex = 0;
const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const testimonials = document.querySelectorAll('.testimonial-item');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  if (index < 0) {
    index = totalTestimonials - 1;
  } else if (index >= totalTestimonials) {
    index = 0;
  }
  currentIndex = index;
  const offset = -currentIndex * 100;
  testimonialWrapper.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.carousel-button.next').addEventListener('click', () => {
  showTestimonial(currentIndex + 1);
});

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
  showTestimonial(currentIndex - 1);
});

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
  showTestimonial(currentIndex + 1);
}, 5000);