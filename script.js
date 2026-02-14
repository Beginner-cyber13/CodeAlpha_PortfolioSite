const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

const menuBtn = document.getElementById('menu-btn');
const navLinksContainer = document.querySelector('.nav-links');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    const isOpen = navLinksContainer.classList.contains('active');

    if (isOpen) {
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;

        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        await new Promise(resolve => setTimeout(resolve, 1500));

        const formData = new FormData(contactForm);
        const name = formData.get('name');

        submitBtn.innerText = 'Message Sent!';
        submitBtn.style.background = '#22c55e';

        alert(`Thanks for reaching out, ${name}! Your message has been "sent" (demo mode).`);

        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    });
}

const revealElements = document.querySelectorAll('[data-aos]');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translate(0, 0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'all 0.8s ease-out';
    if (el.getAttribute('data-aos') === 'fade-up') {
        el.style.transform = 'translateY(50px)';
    } else if (el.getAttribute('data-aos') === 'fade-left') {
        el.style.transform = 'translateX(50px)';
    }
    observer.observe(el);
});
