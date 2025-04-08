// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Header scroll animation
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.padding = "10px 10%";
        header.style.background = "rgba(18, 18, 18, 0.95)";
    } else {
        header.style.padding = "20px 10%";
        header.style.background = "rgba(18, 18, 18, 0.7)";
    }
    
    // Scroll to top button visibility
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Scroll to top button click event
document.querySelector('.scroll-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Hero section animations
document.addEventListener('DOMContentLoaded', function() {
    // Initial loading animation
    const tl = gsap.timeline();
    
    tl.to('.greeting', {
        opacity: 1,
        duration: 0.8,
        delay: 0.3
    })
    .to('h1', {
        opacity: 1,
        y: 0,
        duration: 0.8
    })
    .to('.subtitle', {
        opacity: 1,
        duration: 0.8
    })
    .to('.role-container', {
        opacity: 1,
        y: 0,
        duration: 0.8
    })
    .to('.social-links', {
        opacity: 1,
        duration: 0.8
    });
    
    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 0.8
        });
    });
    
    // Animate title underlines
    gsap.utils.toArray('.title-underline').forEach(underline => {
        gsap.to(underline, {
            scrollTrigger: {
                trigger: underline,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.3
        });
    });
    
    // About section animations
    gsap.to('.section-image', {
        scrollTrigger: {
            trigger: '#about',
            start: "top 60%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        x: 0,
        duration: 1
    });
    
    gsap.to('.section-content', {
        scrollTrigger: {
            trigger: '#about',
            start: "top 60%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3
    });
    
    // Skill badges staggered animation
    gsap.to('.skill-badge', {
        scrollTrigger: {
            trigger: '.skills-container',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1
    });
    
    // Education section animations
    gsap.to('.education-text', {
        scrollTrigger: {
            trigger: '#education',
            start: "top 60%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.8
    });
    
    gsap.to('.education-details', {
        scrollTrigger: {
            trigger: '#education',
            start: "top 60%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3
    });
    
    // Add hover animation to education items
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach(item => {
        const icon = item.querySelector('i');
        item.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                rotation: 360,
                duration: 0.6,
                ease: "power1.out"
            });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                rotation: 0,
                duration: 0.6,
                ease: "power1.out"
            });
        });
    });
    
    // Experience items staggered animation
    gsap.to('.experience-item', {
        scrollTrigger: {
            trigger: '#experience',
            start: "top 60%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2
    });
    
    // Project cards staggered animation
    gsap.to('.project-card', {
        scrollTrigger: {
            trigger: '#projects',
            start: "top 60%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2
    });
    
    // Contact section animations
    gsap.to('.contact-subtitle', {
        scrollTrigger: {
            trigger: '#contact',
            start: "top 70%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        duration: 0.8
    });
    
    gsap.to('.contact-card', {
        scrollTrigger: {
            trigger: '.contact-grid',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2
    });
    
    // Add hover animation to contact icons
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        const icon = card.querySelector('.contact-icon i');
        card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.2,
                y: -5,
                duration: 0.4,
                ease: "back.out(1.7)"
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: "back.out(1.7)"
            });
        });
    });
    
    gsap.to('.footer-signature', {
        scrollTrigger: {
            trigger: '.footer-signature',
            start: "top 90%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        duration: 1.2
    });
    
    // Add active class for current section in navigation
    const addActiveClass = function() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (isInViewport(section)) {
                const id = section.getAttribute('id');
                document.querySelector(`a[href="#${id}"]`)?.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', addActiveClass);
    
    // Particles background effect
    createParticles();
});

// Add active class to nav links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Create particles background effect
function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 70; // Increased number of particles
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1, // Larger particles
            color: i % 2 === 0 ? 'rgba(0, 183, 255, 0.4)' : 'rgba(123, 0, 255, 0.4)', // More visible particles
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25
        });
    }
    
    // Animation loop for particles
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            // Move particles
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particles
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Add glow effect to particles
            ctx.shadowBlur = 10;
            ctx.shadowColor = particle.color;
        });
        
        // Connect particles with lines if they're close enough
        particles.forEach((particle, i) => {
            particles.forEach((particle2, j) => {
                if (i !== j) {
                    const dx = particle.x - particle2.x;
                    const dy = particle.y - particle2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 170) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 183, 255, ${0.15 - distance/1700})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particle2.x, particle2.y);
                        ctx.stroke();
                    }
                }
            });
        });
    }
    
    animate();
    
    // Resize canvas when window resizes
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Add CSS active class for nav links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

// Text typing effect for the role
document.addEventListener('DOMContentLoaded', function() {
    const roles = ['Laravel Developer', 'Backend Developer', 'Web Developer'];
    let currentRole = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    function typeRole() {
        const roleElement = document.querySelector('.subtitle');
        const role = roles[currentRole];
        
        if (isDeleting) {
            roleElement.textContent = `I am... ${role.substring(0, currentChar)}`;
            currentChar--;
            typingSpeed = 50;
        } else {
            roleElement.textContent = `I am... ${role.substring(0, currentChar)}`;
            currentChar++;
            typingSpeed = 150;
        }
        
        if (!isDeleting && currentChar === role.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at complete word
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentRole = (currentRole + 1) % roles.length;
        }
        
        setTimeout(typeRole, typingSpeed);
    }
    
    // Start the typing effect after initial animations
    setTimeout(typeRole, 3000);
}); 