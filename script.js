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

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Sample projects data with images
const projects = [
    {
        title: 'Predictive Stress Detection on Students',
        description: 'With the help ML, we developed a model that predicts the stress level of students.',
        technologies: ['Python', 'XGBoost', 'Scikit-learn'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/RamiroMolina21/ProyectoEstresEstudiantil.git',
        url: 'https://github.com/RamiroMolina21/ProyectoEstresEstudiantil.git'
    },
    {
        title: 'Drowsiness Detector',
        description: 'Using machine learning, we developed a model that detects drowsiness in drivers and alerts them when they are drowsy.',
        technologies: ['Python', 'ShapePredictor', 'OpenCV'],
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/RamiroMolina21/Proyecto-Detector-de-Somnolencia.git',
        url: 'https://github.com/RamiroMolina21/Proyecto-Detector-de-Somnolencia.git'
    },
    {
        title: 'Api Rest Necli',
        description: 'With Entity Framework, we developed a REST API for a make transactions between users and banks.',
        technologies: ['C#', 'Entity Framework', '.NET Core'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/RamiroMolina21/Web-II-Necli2-.git',
        url: 'https://github.com/RamiroMolina21/Web-II-Necli2-.git'
    },
    {
        title: 'AI Chat Assistant',
        description: 'Intelligent chatbot powered by machine learning algorithms',
        technologies: ['Python', 'TensorFlow', 'Flask'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/RamiroMolina21/Proyecto-Chatbot-Necli.git',
        url: 'https://github.com/RamiroMolina21/Proyecto-Chatbot-Necli.git'
    }
    ,
    {
        title: 'AI Chat Assistant',
        description: 'Intelligent chatbot powered by machine learning algorithms',
        technologies: ['Python', 'TensorFlow', 'Flask'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/RamiroMolina21/Proyecto-Chatbot-Necli.git',
        url: 'https://github.com/RamiroMolina21/Proyecto-Chatbot-Necli.git'
    }
    ,
    {
        title: 'AI Chat Assistant',
        description: 'Intelligent chatbot powered by machine learning algorithms',
        technologies: ['Python', 'TensorFlow', 'Flask'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        repository: 'https://github.com/yourusername/ai-chat-assistant'
    }
];

// Add projects to the grid
const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <a href="${project.url}" target="_blank" class="project-link">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </a>
    `;
    projectsGrid.appendChild(projectCard);
});

// Sample skills data with logo images
const skills = [
    { 
        name: 'JavaScript',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
        name: 'TypeScript',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    { 
        name: 'React',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
        name: 'Node.js',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
        name: 'Python',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
        name: 'Java',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
        name: 'C#',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    { 
        name: 'C++',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    { 
        name: 'SQL',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    { 
        name: 'MongoDB',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
        name: 'Git',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
        name: 'Docker',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    { 
        name: 'AWS',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
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

contactForm.addEventListener('submit', async function(e) {
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