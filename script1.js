// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Animated Section Divider
const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.section-divider').forEach(line => lineObserver.observe(line));

// Progressive Offerings - Adjusted for 180vh (faster reveal)
const lines = document.querySelectorAll(".line");
const circles = document.querySelectorAll(".circle");
const revealPoints = [0.15, 0.23, 0.29, 0.30];  // Faster progression

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    
    lines.forEach((line, i) => {
        if (scrollPos > revealPoints[i]) {
            line.classList.add("visible");
        }
    });
    
    circles.forEach((circle, i) => {
        if (scrollPos > revealPoints[i]) {
            circle.classList.add("visible");
        }
    });
});
// Benefits Timeline Scroll Reveal
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

timelineItems.forEach((item) => timelineObserver.observe(item));