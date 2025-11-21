// ============================================
// GLOBALS
// ============================================
let portfolioData = null;
let scene, camera, renderer, particles, particleSystem;
let geometricShapes = [];
let animationId;

// ============================================
// THEME MANAGEMENT
// ============================================
function initTheme() {
  const stored = localStorage.getItem('theme');
  const theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    // Update Three.js theme colors
    updateThreeJSTheme();
  });
}

// ============================================
// NAV ACTIVE STATE
// ============================================
function initNavActiveState() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}

// ============================================
// FETCH DATA
// ============================================
async function fetchData() {
  try {
    const response = await fetch('./mydata.json');
    if (!response.ok) throw new Error('Failed to fetch data');
    portfolioData = await response.json();
    renderAll();
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    document.getElementById('hero-title').textContent = 'Unable to load portfolio';
    document.getElementById('hero-tagline').textContent = 'Please check your data file.';
  }
}

// ============================================
// RENDER ALL SECTIONS
// ============================================
function renderAll() {
  if (!portfolioData) return;

  renderSEO();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderTestimonials();
  renderContact();
  renderFooter();
}

// ============================================
// SEO META TAGS
// ============================================
function renderSEO() {
  if (!portfolioData.seo) return;

  const { title, description, ogImage } = portfolioData.seo;
  if (title) document.title = title;
  if (description) {
    document.querySelector('meta[name="description"]').setAttribute('content', description);
    document.querySelector('meta[property="og:description"]').setAttribute('content', description);
  }
  if (title) document.querySelector('meta[property="og:title"]').setAttribute('content', title);
  if (ogImage) document.querySelector('meta[property="og:image"]').setAttribute('content', ogImage);
}

// ============================================
// HERO SECTION
// ============================================
function renderHero() {
  const { brand, tagline, contact } = portfolioData;

  const heroTitle = document.getElementById('hero-title');
  const heroTagline = document.getElementById('hero-tagline');

  // Remove skeleton classes
  heroTitle.classList.remove('skeleton');
  heroTagline.classList.remove('skeleton');

  document.getElementById('brand').textContent = brand || 'Portfolio';
  heroTitle.textContent = brand || 'Your Name';
  heroTagline.textContent = tagline || '';

  // Add resume button if resumeUrl exists
  if (contact && contact.resumeUrl) {
    const heroCta = document.getElementById('hero-cta');
    const resumeBtn = document.createElement('a');
    resumeBtn.href = contact.resumeUrl;
    resumeBtn.target = '_blank';
    resumeBtn.rel = 'noopener';
    resumeBtn.className = 'btn btn-secondary btn-lg';
    resumeBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px; vertical-align: middle;">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download Resume
    `;
    heroCta.appendChild(resumeBtn);
  }
}

// ============================================
// IMAGE HANDLING
// ============================================
function handleImageLoad(img) {
  img.classList.add('loaded');
  img.classList.remove('error');
}

function handleImageError(img) {
  img.classList.add('error');
  img.classList.remove('loaded');
  // Set a fallback gradient background
  img.style.background = 'var(--gradient-primary)';
}

function setupImageHandlers(img) {
  if (img.complete) {
    if (img.naturalWidth === 0) {
      handleImageError(img);
    } else {
      handleImageLoad(img);
    }
  } else {
    img.addEventListener('load', () => handleImageLoad(img));
    img.addEventListener('error', () => handleImageError(img));
  }
}

// ============================================
// ABOUT SECTION
// ============================================
function renderAbout() {
  if (!portfolioData.about) {
    document.getElementById('about').style.display = 'none';
    return;
  }

  const { avatar, bio } = portfolioData.about;
  const avatarEl = document.getElementById('about-avatar');

  if (avatar) {
    avatarEl.src = avatar;
    avatarEl.alt = `${portfolioData.brand} avatar`;
    avatarEl.style.display = 'block';
    setupImageHandlers(avatarEl);
  }

  document.getElementById('about-bio').textContent = bio || '';
}

// ============================================
// SKILLS SECTION
// ============================================

// Devicon mapping for common technologies
const deviconMap = {
  // Frontend
  'react': 'devicon-react-original',
  'next.js': 'devicon-nextjs-plain',
  'nextjs': 'devicon-nextjs-plain',
  'vue': 'devicon-vuejs-plain',
  'vue.js': 'devicon-vuejs-plain',
  'angular': 'devicon-angularjs-plain',
  'javascript': 'devicon-javascript-plain',
  'typescript': 'devicon-typescript-plain',
  'html': 'devicon-html5-plain',
  'html5': 'devicon-html5-plain',
  'css': 'devicon-css3-plain',
  'css3': 'devicon-css3-plain',
  'sass': 'devicon-sass-original',
  'scss': 'devicon-sass-original',
  'tailwind': 'devicon-tailwindcss-plain',
  'tailwind css': 'devicon-tailwindcss-plain',
  'bootstrap': 'devicon-bootstrap-plain',

  // Backend
  'node.js': 'devicon-nodejs-plain',
  'nodejs': 'devicon-nodejs-plain',
  'express': 'devicon-express-original',
  'express.js': 'devicon-express-original',
  'python': 'devicon-python-plain',
  'django': 'devicon-django-plain',
  'flask': 'devicon-flask-original',
  'java': 'devicon-java-plain',
  'spring': 'devicon-spring-plain',
  'php': 'devicon-php-plain',
  'laravel': 'devicon-laravel-plain',
  'ruby': 'devicon-ruby-plain',
  'rails': 'devicon-rails-plain',
  'go': 'devicon-go-plain',
  'rust': 'devicon-rust-plain',
  'c': 'devicon-c-plain',
  'c++': 'devicon-cplusplus-plain',
  'c#': 'devicon-csharp-plain',

  // Database
  'mongodb': 'devicon-mongodb-plain',
  'mysql': 'devicon-mysql-plain',
  'postgresql': 'devicon-postgresql-plain',
  'redis': 'devicon-redis-plain',
  'sqlite': 'devicon-sqlite-plain',
  'firebase': 'devicon-firebase-plain',
  'prisma': 'devicon-prisma-original',

  // DevOps & Tools
  'docker': 'devicon-docker-plain',
  'kubernetes': 'devicon-kubernetes-plain',
  'git': 'devicon-git-plain',
  'github': 'devicon-github-original',
  'github actions': 'devicon-github-original',
  'gitlab': 'devicon-gitlab-plain',
  'aws': 'devicon-amazonwebservices-original',
  'azure': 'devicon-azure-plain',
  'linux': 'devicon-linux-plain',
  'nginx': 'devicon-nginx-original',
  'webpack': 'devicon-webpack-plain',
  'vscode': 'devicon-vscode-plain',
  'vs code': 'devicon-vscode-plain',
  'figma': 'devicon-figma-plain',

  // Mobile
  'react native': 'devicon-react-original',
  'flutter': 'devicon-flutter-plain',
  'swift': 'devicon-swift-plain',
  'kotlin': 'devicon-kotlin-plain',

  // AI/ML
  'tensorflow': 'devicon-tensorflow-original',
  'pytorch': 'devicon-pytorch-original',
  'pandas': 'devicon-pandas-original',
  'numpy': 'devicon-numpy-original',
};

function getDeviconClass(skillName) {
  const normalizedName = skillName.toLowerCase().trim();
  return deviconMap[normalizedName] || null;
}

function renderSkills() {
  if (!portfolioData.skills || portfolioData.skills.length === 0) {
    document.getElementById('skills').style.display = 'none';
    return;
  }

  const container = document.getElementById('skills-grid');
  container.innerHTML = portfolioData.skills.map(skillGroup => `
    <div class="skill-group">
      <h3>${skillGroup.group}</h3>
      <div class="skill-items">
        ${skillGroup.items.map(item => {
          const iconClass = getDeviconClass(item);
          const iconHtml = iconClass ? `<i class="${iconClass}"></i>` : '';
          return `<span class="skill-tag">${iconHtml}${item}</span>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ============================================
// PROJECTS SECTION
// ============================================
function renderProjects() {
  if (!portfolioData.projects || portfolioData.projects.length === 0) {
    document.getElementById('projects').style.display = 'none';
    return;
  }

  const container = document.getElementById('projects-grid');
  container.innerHTML = portfolioData.projects.map((project, index) => `
    <article class="project-card" tabindex="0" data-project-index="${index}">
      <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.short}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener" class="btn btn-primary" onclick="event.stopPropagation()">View Demo</a>` : ''}
          ${project.links.repo ? `<a href="${project.links.repo}" target="_blank" rel="noopener" class="btn btn-secondary" onclick="event.stopPropagation()">GitHub</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');

  // Add click handlers for modal
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const index = parseInt(card.getAttribute('data-project-index'));
      openProjectModal(index);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const index = parseInt(card.getAttribute('data-project-index'));
        openProjectModal(index);
      }
    });
  });

  // Setup image handlers for all project images
  document.querySelectorAll('.project-image').forEach(img => {
    setupImageHandlers(img);
  });
}

// ============================================
// PROJECT MODAL
// ============================================
function openProjectModal(index) {
  const project = portfolioData.projects[index];
  if (!project.longText) return; // Only open modal if there's detailed content

  const modal = document.getElementById('project-modal');
  const modalImage = document.getElementById('modal-image');

  // Reset image classes and set new source
  modalImage.classList.remove('loaded', 'error');
  modalImage.src = project.image;
  modalImage.alt = project.title;
  setupImageHandlers(modalImage);

  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  document.getElementById('modal-body').textContent = project.longText;
  document.getElementById('modal-links').innerHTML = `
    ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener" class="btn btn-primary">View Demo</a>` : ''}
    ${project.links.repo ? `<a href="${project.links.repo}" target="_blank" rel="noopener" class="btn btn-secondary">GitHub</a>` : ''}
  `;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Modal event listeners
document.getElementById('modal-close').addEventListener('click', closeProjectModal);
document.getElementById('modal-overlay').addEventListener('click', closeProjectModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

// ============================================
// EXPERIENCE SECTION
// ============================================
function renderExperience() {
  if (!portfolioData.experience || portfolioData.experience.length === 0) {
    document.getElementById('experience').style.display = 'none';
    return;
  }

  const container = document.getElementById('experience-timeline');
  container.innerHTML = portfolioData.experience.map(exp => {
    const dateRange = `${formatDate(exp.start)} – ${exp.end === 'Present' ? 'Present' : formatDate(exp.end)}`;

    return `
      <article class="experience-item">
        <div class="experience-header">
          <div class="experience-company">${exp.company}</div>
          <div class="experience-role">${exp.role}</div>
          <div class="experience-date">${dateRange}</div>
        </div>
        ${exp.highlights ? `
          <ul class="experience-highlights">
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        ` : ''}
      </article>
    `;
  }).join('');
}

function formatDate(dateStr) {
  if (dateStr === 'Present') return 'Present';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
function renderTestimonials() {
  if (!portfolioData.testimonials || portfolioData.testimonials.length === 0) {
    document.getElementById('testimonials').style.display = 'none';
    return;
  }

  const section = document.getElementById('testimonials');
  section.style.display = 'block';

  const container = document.getElementById('testimonials-grid');
  container.innerHTML = portfolioData.testimonials.map(testimonial => `
    <article class="testimonial-card">
      <p class="testimonial-quote">"${testimonial.quote}"</p>
      <div class="testimonial-author">${testimonial.name}</div>
      <div class="testimonial-title">${testimonial.title}</div>
    </article>
  `).join('');
}

// ============================================
// CONTACT SECTION
// ============================================
function renderContact() {
  if (!portfolioData.contact) {
    document.getElementById('contact').style.display = 'none';
    return;
  }

  const { email, socials } = portfolioData.contact;

  // Email buttons
  if (email) {
    document.getElementById('mailto-link').href = `mailto:${email}`;

    document.getElementById('copy-email').addEventListener('click', () => {
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy email:', err);
      });
    });
  } else {
    document.querySelector('.contact-actions').style.display = 'none';
  }

  // Social links
  if (socials && socials.length > 0) {
    const container = document.getElementById('socials');
    container.innerHTML = socials.map(social => `
      <a href="${social.url}" target="_blank" rel="noopener" class="social-link">
        ${getSocialIcon(social.name)}
        ${social.name}
      </a>
    `).join('');
  }
}

function getSocialIcon(name) {
  const icons = {
    'GitHub': '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    'LinkedIn': '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
    'X': '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    'Twitter': '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    'Email': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>'
  };
  return icons[name] || '';
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ============================================
// FOOTER
// ============================================
function renderFooter() {
  const year = new Date().getFullYear();
  document.getElementById('current-year').textContent = year;
  document.getElementById('footer-brand').textContent = portfolioData.brand || '';
}

// ============================================
// THREE.JS ANIMATIONS
// ============================================
function initThreeJS() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || !window.THREE) return;

  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create particle network
  createParticleNetwork();

  // Create floating geometric shapes
  createGeometricShapes();

  // Handle window resize
  window.addEventListener('resize', onWindowResize);

  // Start animation
  animate();
}

function createParticleNetwork() {
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

    velocities.push({
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02,
      z: (Math.random() - 0.5) * 0.02
    });
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Get theme color
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
     !document.documentElement.getAttribute('data-theme'));

  const particleColor = isDark ? 0x818cf8 : 0x6366f1;

  const material = new THREE.PointsMaterial({
    color: particleColor,
    size: 2,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });

  particleSystem = new THREE.Points(geometry, material);
  particleSystem.userData.velocities = velocities;
  scene.add(particleSystem);
}

function createGeometricShapes() {
  const shapes = [
    { geometry: new THREE.TorusGeometry(3, 1, 16, 100), color: 0x667eea },
    { geometry: new THREE.OctahedronGeometry(2), color: 0x764ba2 },
    { geometry: new THREE.TetrahedronGeometry(2.5), color: 0x8b5cf6 },
  ];

  shapes.forEach((shapeData, index) => {
    const material = new THREE.MeshBasicMaterial({
      color: shapeData.color,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });

    const mesh = new THREE.Mesh(shapeData.geometry, material);

    // Position shapes
    mesh.position.x = (index - 1) * 20;
    mesh.position.y = Math.sin(index) * 10;
    mesh.position.z = -20;

    // Random rotation speeds
    mesh.userData.rotationSpeed = {
      x: Math.random() * 0.01,
      y: Math.random() * 0.01,
      z: Math.random() * 0.01
    };

    geometricShapes.push(mesh);
    scene.add(mesh);
  });
}

function animate() {
  animationId = requestAnimationFrame(animate);

  // Animate particles
  if (particleSystem) {
    const positions = particleSystem.geometry.attributes.position.array;
    const velocities = particleSystem.userData.velocities;

    for (let i = 0; i < positions.length / 3; i++) {
      positions[i * 3] += velocities[i].x;
      positions[i * 3 + 1] += velocities[i].y;
      positions[i * 3 + 2] += velocities[i].z;

      // Bounce particles within bounds
      if (Math.abs(positions[i * 3]) > 50) velocities[i].x *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 50) velocities[i].y *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 25) velocities[i].z *= -1;
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.rotation.y += 0.0002;
  }

  // Animate geometric shapes
  geometricShapes.forEach(shape => {
    shape.rotation.x += shape.userData.rotationSpeed.x;
    shape.rotation.y += shape.userData.rotationSpeed.y;
    shape.rotation.z += shape.userData.rotationSpeed.z;

    // Gentle floating motion
    shape.position.y += Math.sin(Date.now() * 0.001 + shape.position.x) * 0.01;
  });

  // Gentle camera movement based on scroll
  const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  camera.position.y = scrollPercent * 10;

  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!camera || !renderer) return;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Update Three.js colors when theme changes
function updateThreeJSTheme() {
  if (!particleSystem) return;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const particleColor = isDark ? 0x818cf8 : 0x6366f1;

  particleSystem.material.color.setHex(particleColor);
}

// ============================================
// INIT
// ============================================
function init() {
  initTheme();
  initNavActiveState();
  fetchData();

  // Initialize Three.js after a short delay to ensure DOM is ready
  setTimeout(() => {
    initThreeJS();
  }, 100);
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
