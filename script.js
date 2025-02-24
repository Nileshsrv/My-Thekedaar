// Smooth scrolling for "Get Started" button
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

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Testimonial carousel functionality
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

// EmailJS functionality
const btn = document.getElementById('button');

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Basic form validation
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  // Change button text to "Sending..."
  btn.value = 'Sending...';

  // EmailJS service and template IDs
  const serviceID = 'service_thekedaar'; // Replace with your actual Service ID
  const templateID = 'template_rc2zgvv'; // Replace with your actual Template ID

  // Send email using EmailJS
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email'; // Reset button text
      alert('Message sent successfully!');
      this.reset(); // Clear the form
    }, (err) => {
      btn.value = 'Send Email'; // Reset button text
      alert('Error sending message. Please try again.');
      console.error('EmailJS Error:', err);
    });
});
