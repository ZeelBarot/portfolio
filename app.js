// Project data
const projectsData = [
  {
    title: "Forest Fire Prediction Using ResNet50",
    date: "Oct - Nov 2024",
    description: "Built a deep learning model using ResNet-50 architecture to predict forest fire occurrence with remarkable 98.52% accuracy. The project involved comprehensive data preprocessing, feature scaling, and model training on Canada climate datasets. Evaluated model performance using precision, recall, and F1-score metrics to ensure reliability in real-world scenarios.",
    techStack: ["Python", "TensorFlow", "ResNet50", "Pandas", "NumPy"],
    highlights: [
      "Achieved 98.52% prediction accuracy",
      "Processed and analyzed large-scale climate datasets from Canada",
      "Implemented advanced preprocessing and feature engineering techniques",
      "Comprehensive model evaluation with multiple performance metrics"
    ]
  },
  {
    title: "AgriSense AI - Multilingual Smart Farming Assistant",
    date: "Mar - Apr 2025",
    description: "Developed an intelligent farming assistant using Streamlit and Firebase that provides AI-powered crop guidance in multiple languages (English, Hindi, and Gujarati). The application integrates live weather and soil APIs to provide real-time, context-aware farming recommendations. Successfully processed over 100 farmer queries with comprehensive analytics and insights.",
    techStack: ["Python", "Streamlit", "Firebase", "Weather APIs", "Soil APIs"],
    highlights: [
      "Multilingual support for English, Hindi, and Gujarati",
      "Real-time weather and soil data integration",
      "Processed 100+ farmer queries with AI-powered recommendations",
      "Interactive analytics dashboard for farming insights"
    ]
  },
  {
    title: "QR-Based Citizen Feedback System - Gujarat Police",
    date: "2020 - Present",
    description: "Developed a scalable citizen feedback system deployed at 5+ police stations across Gujarat, handling over 500 surveys per month. The system features real-time sentiment analysis, automated reporting, and an intuitive analytics dashboard that helps police administration make data-driven decisions to improve public service quality.",
    techStack: ["PHP", "MySQL", "Firebase", "JavaScript", "QR Code"],
    highlights: [
      "Deployed at 5+ police stations in Gujarat",
      "Processes 500+ citizen surveys monthly",
      "Real-time sentiment analysis and reporting",
      "Comprehensive analytics dashboard for decision-making",
      "Scalable architecture supporting multiple locations"
    ]
  }
];

// Typing animation
const typingText = document.getElementById('typingText');
const roles = ['Frontend Developer', 'AI/ML Engineer', 'Full Stack Developer', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typeSpeed = isDeleting ? 50 : 100;
  
  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500;
  }
  
  setTimeout(typeRole, typeSpeed);
}

typeRole();

// Navigation
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Active section highlighting
const sections = document.querySelectorAll('.section, .hero');

const observerOptions = {
  threshold: 0.3,
  rootMargin: '-100px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Download Resume
const downloadResumeBtn = document.getElementById('downloadResume');

downloadResumeBtn.addEventListener('click', () => {
  const resumeContent = `ZEEL BAROT
Computer Engineering Graduate | Software Developer | AI/ML Enthusiast

Contact Information:
Email: zeelpbarot@gmail.com
Phone: +91 9510115895
Location: Vadodara, Gujarat, India
LinkedIn: https://www.linkedin.com/in/zeel-barot-94058b26b/
GitHub: https://github.com/ZeelBarot
Portfolio: https://zeelbarot.dev

---

PROFESSIONAL SUMMARY
${projectsData[2].description}

---

EDUCATION

B.E. - Computer Engineering | 2023 - 2026
Government Engineering College, Bharuch
CGPA: 8.70 / 10
Coursework: Machine Learning, Data Structures & Algorithms, DBMS, Web Technologies
Note: Extended QR-Based Citizen Feedback System project: AI sentiment analytics, dashboard optimization

Diploma - Computer Engineering | 2020 - 2023
Government Polytechnic for Girls, Surat
CGPA: 8.57 / 10
Project: QR Code-Based Citizen Feedback System for Gujarat Police
Note: Designed prototype for real-time citizen feedback (PHP, MySQL, QR code)

---

WORK EXPERIENCE

ReactJS Development Intern | Jul - Oct 2024
Crystaline Software | Remote
• Developed 10+ dynamic UI components in ReactJS, improving render speed by 25%
• Integrated RESTful APIs for live data; reduced load latency by 30%
• Collaborated in Agile sprints, closed 15+ issues, contributed to weekly releases

---

TECHNICAL SKILLS

Languages: Python, Java, JavaScript, PHP, C++
Web Technologies: ReactJS, Node.js, Express.js, HTML5, CSS3, Bootstrap, Tailwind CSS, Firebase
Database: MySQL, MongoDB
AI/ML: TensorFlow, Scikit-learn, ResNet50, Pandas, NumPy
Tools: Git, GitHub, Canva, Recharts, PowerPoint, Postman

---

PROJECTS

${projectsData.map((project, index) => `
${index + 1}. ${project.title} | ${project.date}
${project.description}
Tech Stack: ${project.techStack.join(', ')}
`).join('\n')}

---

CERTIFICATIONS

• AI Agent Architect - IBM SkillsBuild (Jul 2025)
• Generative AI for Youth - Koenig (Apr 2025)
• Microsoft Copilot Studio - Koenig (Apr 2025)
• Project Management Simulation - CBRE (Mar 2025)
• Getting Started with AI - IBM SkillsBuild (Nov 2024)

---

LEADERSHIP & ACTIVITIES

• Coordinated "Ad-hoc Arena" at TechTonic 2025 (300+ participants); led event operations
• Participant in Smart India Hackathon 2024, SSIP Hackathon 2022
• Mentored juniors in AI/ML workshops, presented research at GTU Ventures 2025
• Captain, NABHAM 2024 Cricket Champions (7-member team)

---

Generated on ${new Date().toLocaleDateString()}`;

  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Zeel_Barot_Resume.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// Project Modal
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.querySelector('.modal-overlay');
const projectDetailButtons = document.querySelectorAll('.project-details-btn');

projectDetailButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectCard = button.closest('.project-card');
    const projectIndex = parseInt(projectCard.dataset.project);
    const project = projectsData[projectIndex];
    
    modalBody.innerHTML = `
      <h2 style="font-size: var(--font-size-3xl); margin-bottom: var(--space-12); color: var(--color-text);">${project.title}</h2>
      <p style="color: var(--accent-blue); font-weight: var(--font-weight-medium); margin-bottom: var(--space-24);">${project.date}</p>
      
      <h3 style="font-size: var(--font-size-xl); margin-bottom: var(--space-12); color: var(--color-text);">Description</h3>
      <p style="line-height: 1.8; color: var(--color-text-secondary); margin-bottom: var(--space-24);">${project.description}</p>
      
      <h3 style="font-size: var(--font-size-xl); margin-bottom: var(--space-12); color: var(--color-text);">Key Highlights</h3>
      <ul style="list-style: none; padding: 0; margin-bottom: var(--space-24);">
        ${project.highlights.map(highlight => `
          <li style="position: relative; padding-left: var(--space-20); margin-bottom: var(--space-12); color: var(--color-text-secondary); line-height: 1.6;">
            <span style="position: absolute; left: 0; color: var(--accent-blue); font-size: var(--font-size-lg);">▹</span>
            ${highlight}
          </li>
        `).join('')}
      </ul>
      
      <h3 style="font-size: var(--font-size-xl); margin-bottom: var(--space-12); color: var(--color-text);">Technology Stack</h3>
      <div style="display: flex; flex-wrap: wrap; gap: var(--space-8);">
        ${project.techStack.map(tech => `
          <span style="background: var(--color-secondary); color: var(--color-text); padding: var(--space-6) var(--space-12); border-radius: var(--radius-full); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">${tech}</span>
        `).join('')}
      </div>
    `;
    
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
  });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.remove('visible');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('visible')) {
    closeModal();
  }
});

// Contact Form
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const sendAnotherBtn = document.getElementById('sendAnother');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Clear previous errors
  document.querySelectorAll('.form-error').forEach(error => {
    error.classList.remove('visible');
    error.textContent = '';
  });
  
  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // Validation
  let isValid = true;
  
  if (name.length < 2) {
    showError('nameError', 'Please enter a valid name');
    isValid = false;
  }
  
  if (!validateEmail(email)) {
    showError('emailError', 'Please enter a valid email address');
    isValid = false;
  }
  
  if (subject.length < 3) {
    showError('subjectError', 'Subject must be at least 3 characters');
    isValid = false;
  }
  
  if (message.length < 10) {
    showError('messageError', 'Message must be at least 10 characters');
    isValid = false;
  }
  
  if (isValid) {
    // Show success message
    formSuccess.classList.add('visible');
    contactForm.reset();
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.classList.add('visible');
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

sendAnotherBtn.addEventListener('click', () => {
  formSuccess.classList.remove('visible');
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.section');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(element);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});