// Canvas setup
const canvas = document.getElementById('portfolioCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Particle class for background animation
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particles
const particles = [];
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animate();

// Mobile Hamburger Menu Logic
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
        hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        hamburgerBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
        }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
        }
    });
}

// Intersection Observer for Reveal Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(section => {
    observer.observe(section);
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
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

// Typing effect for the hero title
const typeTarget = document.querySelector('.type-effect');
if (typeTarget) {
    const textToType = typeTarget.textContent;
    typeTarget.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typeTarget.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// Smooth scrolling for navigation & auto-close mobile menu
document.querySelectorAll('nav a, a.logo, .hero-scroll, a.hero-btn[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            // Auto-close mobile menu on selection
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburgerBtn.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
                hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
            }
        }
    });
});

// Projects data with links and imagery
const projects = [
    {
        title: 'App Agendamiento CID Móvil',
        description: 'Mobile application built with .NET MAUI for Language Center appointment scheduling, integrating SQL Server, Entity Framework, and ngrok tunnel.',
        technologies: ['.NET MAUI', 'C#', 'SQL Server', 'Entity Framework'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/RamiroMolina21/AppAgendamiento-CID-movil',
        url: 'https://github.com/RamiroMolina21/AppAgendamiento-CID-movil'
    },
    {
        title: 'API REST Agendamiento CID',
        description: 'RESTful API developed for the Language Center mobile scheduling system, built with ASP.NET Core, Entity Framework, and structured SQL Server database.',
        technologies: ['ASP.NET Core', 'C#', 'Entity Framework', 'REST API'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/RamiroMolina21/ApiRest-proyecto-Movil-Agendamiento-CID',
        url: 'https://github.com/RamiroMolina21/ApiRest-proyecto-Movil-Agendamiento-CID'
    },
    {
        title: 'Jesus Molina Official Website',
        description: 'Official artist website for Jesus Molina, designed and developed using React and Vite with high performance, dynamic media, and sleek modern UI.',
        technologies: ['React', 'Vite', 'JavaScript', 'CSS3'],
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/JMMusicEnt/Website-by-JesusMolina',
        url: 'https://github.com/JMMusicEnt/Website-by-JesusMolina'
    },
    {
        title: 'Predictive Stress Detection on Students',
        description: 'With the help of ML, we developed a predictive model to assess and monitor stress levels among university students.',
        technologies: ['Python', 'XGBoost', 'Scikit-learn'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/RamiroMolina21/ProyectoEstresEstudiantil.git',
        url: 'https://github.com/RamiroMolina21/ProyectoEstresEstudiantil.git'
    },
    {
        title: 'Drowsiness Detector',
        description: 'Computer vision and machine learning model detecting driver fatigue and drowsiness in real time to issue critical alerts.',
        technologies: ['Python', 'ShapePredictor', 'OpenCV'],
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/RamiroMolina21/Proyecto-Detector-de-Somnolencia.git',
        url: 'https://github.com/RamiroMolina21/Proyecto-Detector-de-Somnolencia.git'
    }
];

// Initialize Projects Carousel
const projectsTrack = document.getElementById('projectsTrack');
const carouselContainer = document.getElementById('projectsCarouselContainer');
const carouselDotsContainer = document.getElementById('carouselDots');
const prevBtn = document.getElementById('projectPrevBtn');
const nextBtn = document.getElementById('projectNextBtn');

if (projectsTrack && carouselContainer) {

    // Render project cards
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-index', index);
        projectCard.innerHTML = `
            <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="${project.title}">
                <div class="project-image-wrap">
                    <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
                    <div class="project-image-overlay"></div>
                    <div class="project-badge-action" title="Open Project">
                        <i class="fas fa-arrow-up-right-from-square"></i>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </a>
        `;
        projectsTrack.appendChild(projectCard);

        // Generate dot indicator
        if (carouselDotsContainer) {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Slide ${index + 1}`);
            dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
            dot.addEventListener('click', () => {
                scrollToSlide(index);
            });
            carouselDotsContainer.appendChild(dot);
        }
    });

    const cards = projectsTrack.querySelectorAll('.project-card');

    // Get current active slide index based on scroll position
    function getCurrentIndex() {
        const scrollPos = carouselContainer.scrollLeft;
        const trackOffset = projectsTrack.offsetLeft;
        let minDiff = Infinity;
        let activeIdx = 0;

        cards.forEach((card, idx) => {
            const cardPos = card.offsetLeft - trackOffset;
            const diff = Math.abs(cardPos - scrollPos);
            if (diff < minDiff) {
                minDiff = diff;
                activeIdx = idx;
            }
        });
        return activeIdx;
    }

    // Update dot indicators
    function updateActiveState(index) {
        if (carouselDotsContainer) {
            const dots = carouselDotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, idx) => {
                const isActive = idx === index;
                dot.classList.toggle('active', isActive);
                dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });
        }
    }

    // Scroll to specific slide
    function scrollToSlide(index) {
        if (index < 0) index = cards.length - 1;
        if (index >= cards.length) index = 0;

        const targetCard = cards[index];
        if (targetCard) {
            const scrollLeft = targetCard.offsetLeft - projectsTrack.offsetLeft;
            carouselContainer.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
            updateActiveState(index);
        }
    }

    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const currentIndex = getCurrentIndex();
            const targetIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
            scrollToSlide(targetIndex);
        });
    }

    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const currentIndex = getCurrentIndex();
            const targetIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
            scrollToSlide(targetIndex);
        });
    }

    // Sync state on user scroll/swipe
    let scrollAnimId;
    carouselContainer.addEventListener('scroll', () => {
        if (scrollAnimId) cancelAnimationFrame(scrollAnimId);
        scrollAnimId = requestAnimationFrame(() => {
            const activeIdx = getCurrentIndex();
            updateActiveState(activeIdx);
        });
    }, { passive: true });

    // Keyboard navigation (Arrow keys when focused)
    carouselContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const idx = getCurrentIndex();
            scrollToSlide(idx > 0 ? idx - 1 : cards.length - 1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            const idx = getCurrentIndex();
            scrollToSlide(idx < cards.length - 1 ? idx + 1 : 0);
        }
    });

    // Desktop Mouse Drag to Scroll
    let isMouseDown = false;
    let startX = 0;
    let scrollStartLeft = 0;
    let hasDragged = false;

    carouselContainer.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        hasDragged = false;
        startX = e.pageX - carouselContainer.offsetLeft;
        scrollStartLeft = carouselContainer.scrollLeft;
        carouselContainer.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        const currentX = e.pageX - carouselContainer.offsetLeft;
        const walk = currentX - startX;
        if (Math.abs(walk) > 6) {
            hasDragged = true;
        }
        carouselContainer.scrollLeft = scrollStartLeft - walk;
    });

    window.addEventListener('mouseup', () => {
        if (isMouseDown) {
            isMouseDown = false;
            carouselContainer.classList.remove('is-dragging');
            setTimeout(() => {
                const activeIdx = getCurrentIndex();
                updateActiveState(activeIdx);
            }, 60);
        }
    });

    // Prevent inadvertent link navigation on drag release
    carouselContainer.addEventListener('click', (e) => {
        if (hasDragged) {
            e.preventDefault();
            e.stopPropagation();
            hasDragged = false;
        }
    }, true);
}

// Core skills data with imported original logos
const skills = [
    {
        name: 'JavaScript',
        image: 'assets/skills/javascript.svg'
    },
    {
        name: 'TypeScript',
        image: 'assets/skills/typescript.svg'
    },
    {
        name: 'React',
        image: 'assets/skills/react.svg'
    },
    {
        name: 'Node.js',
        image: 'assets/skills/nodejs.svg'
    },
    {
        name: 'Python',
        image: 'assets/skills/python.svg'
    },
    {
        name: 'Java',
        image: 'assets/skills/java.svg'
    },
    {
        name: 'C#',
        image: 'assets/skills/csharp.svg'
    },
    {
        name: 'C++',
        image: 'assets/skills/cplusplus.svg'
    },
    {
        name: 'SQL',
        image: 'assets/skills/mysql.svg'
    },
    {
        name: 'MongoDB',
        image: 'assets/skills/mongodb.svg'
    },
    {
        name: 'Git',
        image: 'assets/skills/git.svg'
    },
    {
        name: 'Docker',
        image: 'assets/skills/docker.svg'
    },
    {
        name: 'AWS',
        image: 'assets/skills/aws.svg'
    },
    {
        name: '.NET',
        image: 'assets/skills/dotnet.svg'
    },
    {
        name: 'ASP.NET',
        image: 'assets/skills/aspnet.svg'
    },
    {
        name: 'Entity Framework',
        image: 'assets/skills/entityframework.svg'
    },
    {
        name: 'ADO.NET',
        image: 'assets/skills/adonet.svg'
    }
];

// Add skills to the container
const skillsContainer = document.querySelector('.skills-container');
skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-item';
    skillElement.innerHTML = `
        <div class="skill-icon">
            <img src="${skill.image}" alt="${skill.name} logo">
        </div>
        <div class="skill-name">${skill.name}</div>
    `;
    skillsContainer.appendChild(skillElement);
});

// Initialize EmailJS
emailjs.init("cqZLPccY9XXITkEyv"); // Reemplaza con tu clave pública de EmailJS

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    try {
        // Get form data
        const formData = {
            user_name: this.user_name.value,
            user_email: this.user_email.value,
            message: this.message.value
        };

        // Send email using EmailJS
        const response = await emailjs.send(
            "service_4w64tim", // Reemplaza con tu Service ID de EmailJS
            "template_yhvn4wy", // Reemplaza con tu Template ID de EmailJS
            formData
        );

        // Show success message
        formStatus.textContent = "¡Mensaje enviado con éxito! Te responderé pronto.";
        formStatus.className = 'form-status success';

        // Reset form
        this.reset();
    } catch (error) {
        // Show error message
        formStatus.textContent = "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.";
        formStatus.className = 'form-status error';
        console.error('Error:', error);
    } finally {
        // Remove loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}); 