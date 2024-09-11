// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scroll for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Social media links animation
document.querySelectorAll('.social-media a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.2)';
        link.style.transition = 'transform 0.3s';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
        link.style.transition = 'transform 0.3s';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById("typed-text");
    const phrases = ["Web Developer", "Designer", "Programmer", "Tech Enthusiast"];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = "";
    let currentLetters = "";

    function type() {
        if (letterIndex === 0) {
            currentPhrase = phrases[phraseIndex];
        }
        currentLetters = currentPhrase.slice(0, ++letterIndex);
        typedText.textContent = currentLetters;

        if (currentLetters.length === currentPhrase.length) {
            setTimeout(() => {
                phraseIndex = (phraseIndex + 1) % phrases.length;
                letterIndex = 0;
                setTimeout(type, 1000);
            }, 2000);
        } else {
            setTimeout(type, 150);
        }
    }

    type();
});