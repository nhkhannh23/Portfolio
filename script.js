/**
 * PORTFOLIO WEBSITE - MAIN JAVASCRIPT
 * B.Tech Data Science & AI Portfolio with 3D Animations
 */

// ============================================
// LOADING SCREEN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.getElementById('progressBar');
    let progress = 0;

    // Simulate loading progress
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            progressBar.style.width = progress + '%';
            clearInterval(loadingInterval);

            // Hide loading screen after completion
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                initializeAnimations();
                initThreeJS();
            }, 500);
        } else {
            progressBar.style.width = progress + '%';
        }
    }, 200);
});

// ============================================
// NAVIGATION
// ============================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Hamburger menu toggle
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = navbar.offsetHeight;
    const scrollPosition = window.scrollY + navHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initializeAnimations() {
    initializeSmoothScroll();

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll(
        '.section-header, .about-container, .skill-category, .project-card, .timeline-item, .certification-card, .contact-card, .contact-form-container'
    );

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Animate stats counter
    animateStats();

    // Animate skill bars
    animateSkillBars();

    // Initialize project filtering
    initializeProjectFilter();
}

// ============================================
// STATS COUNTER ANIMATION
// ============================================
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.dataset.target);
                let currentValue = 0;
                const increment = targetValue / 100;

                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        currentValue = targetValue;
                        clearInterval(timer);
                    }
                    target.textContent = Math.floor(currentValue);
                }, 20);

                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
}

// ============================================
// SKILL BARS ANIMATION
// ============================================
function animateSkillBars() {
    const skillProgresses = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const percent = progress.parentElement.parentElement.dataset.percent;
                progress.style.width = percent + '%';
                observer.unobserve(progress.parentElement.parentElement);
            }
        });
    }, { threshold: 0.2 });

    skillProgresses.forEach(progress => {
        observer.observe(progress.parentElement.parentElement);
    });
}

// ============================================
// PROJECT FILTERING
// ============================================
function initializeProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Show/hide project cards based on filter
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category.includes(filter)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// CONTACT FORM
// ============================================
// Using Formspree service - form submits directly to email
// No JavaScript handling needed
/*
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Please fill in all fields!');
            return;
        }

        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}
*/

// ============================================
// 3D ANIMATIONS WITH THREE.JS
// ============================================
let scene, camera, renderer, particles, neuralNetwork, dataSphere;
let mouseX = 0, mouseY = 0;

function initThreeJS() {
    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
        console.error('Three.js not loaded');
        return;
    }

    // Initialize Hero 3D Scene
    initHeroScene();

    // Initialize Contact 3D Scene
    initContactScene();

    // Add event listeners for mouse movement
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    // Update Hero scene
    if (camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

    if (renderer) {
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Reinitialize scenes on resize
    if (document.getElementById('hero3d')) {
        initHeroScene();
    }
    if (document.getElementById('contact3d')) {
        initContactScene();
    }
}

// ============================================
// HERO SECTION 3D SCENE
// ============================================
function initHeroScene() {
    const container = document.getElementById('hero3d');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Create scene
    scene = new THREE.Scene();

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Add particles (stars/points)
    createParticles();

    // Create neural network visualization
    createNeuralNetwork();

    // Create data sphere
    createDataSphere();

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x6c5ce7, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add point light
    const pointLight = new THREE.PointLight(0x00cec9, 1, 10);
    pointLight.position.set(-1, -1, -1);
    scene.add(pointLight);

    // Start animation loop
    animateHero();
}

function createParticles() {
    const particleCount = 2000;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPrimary = new THREE.Color(0x6c5ce7);
    const colorSecondary = new THREE.Color(0x00cec9);
    const colorAccent = new THREE.Color(0xfd79a8);

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Position
        positions[i3] = (Math.random() - 0.5) * 20;
        positions[i3 + 1] = (Math.random() - 0.5) * 20;
        positions[i3 + 2] = (Math.random() - 0.5) * 20;

        // Color
        const colorChoice = Math.random();
        let color;
        if (colorChoice < 0.33) {
            color = colorPrimary;
        } else if (colorChoice < 0.66) {
            color = colorSecondary;
        } else {
            color = colorAccent;
        }

        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });

    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
}

function createNeuralNetwork() {
    const group = new THREE.Group();

    // Create layers
    const layers = [4, 5, 5, 4]; // Input, Hidden, Hidden, Output
    const layerSpacing = 3;
    const neuronSpacing = 1.5;

    for (let layer = 0; layer < layers.length; layer++) {
        for (let neuron = 0; neuron < layers[layer]; neuron++) {
            const x = (layer - (layers.length - 1) / 2) * layerSpacing;
            const y = (neuron - (layers[layer] - 1) / 2) * neuronSpacing;
            const z = 0;

            // Create neuron sphere
            const geometry = new THREE.SphereGeometry(0.3, 16, 16);
            const material = new THREE.MeshPhongMaterial({
                color: 0x6c5ce7,
                emissive: 0x3a2e8a,
                emissiveIntensity: 0.5,
                shininess: 30
            });

            const neuron = new THREE.Mesh(geometry, material);
            neuron.position.set(x, y, z);

            // Add pulsing animation
            neuron.userData = {
                originalScale: 0.3,
                pulseSpeed: Math.random() * 0.02 + 0.01,
                pulseOffset: Math.random() * Math.PI * 2
            };

            group.add(neuron);
        }
    }

    // Create connections between layers
    for (let layer = 0; layer < layers.length - 1; layer++) {
        for (let neuron1 = 0; neuron1 < layers[layer]; neuron1++) {
            for (let neuron2 = 0; neuron2 < layers[layer + 1]; neuron2++) {
                const x1 = (layer - (layers.length - 1) / 2) * layerSpacing;
                const y1 = (neuron1 - (layers[layer] - 1) / 2) * neuronSpacing;
                const x2 = (layer + 1 - (layers.length - 1) / 2) * layerSpacing;
                const y2 = (neuron2 - (layers[layer + 1] - 1) / 2) * neuronSpacing;

                const geometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(x1, y1, 0),
                    new THREE.Vector3(x2, y2, 0)
                ]);

                const material = new THREE.LineBasicMaterial({
                    color: 0x3a2e8a,
                    transparent: true,
                    opacity: 0.3
                });

                const line = new THREE.Line(geometry, material);
                group.add(line);
            }
        }
    }

    group.position.set(-8, 0, -5);
    group.rotation.y = Math.PI / 4;
    scene.add(group);

    neuralNetwork = group;
}

function createDataSphere() {
    const group = new THREE.Group();

    // Create main sphere
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00cec9,
        transparent: true,
        opacity: 0.6,
        wireframe: true,
        wireframeLinewidth: 2
    });

    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    // Create data points inside sphere
    const pointCount = 200;
    const pointsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
        const i3 = i * 3;

        // Random position inside sphere
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = Math.random() * 1.8;

        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = r * Math.cos(phi);
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pointsMaterial = new THREE.PointsMaterial({
        color: 0xfd79a8,
        size: 0.1,
        transparent: true,
        opacity: 0.8
    });

    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(points);

    group.position.set(8, 0, -5);
    scene.add(group);

    dataSphere = group;
}

function animateHero() {
    requestAnimationFrame(animateHero);

    if (!scene || !camera || !renderer) return;

    const time = Date.now() * 0.001;

    // Rotate particles
    if (particles) {
        particles.rotation.x += 0.0003;
        particles.rotation.y += 0.0005;
    }

    // Animate neural network
    if (neuralNetwork) {
        neuralNetwork.rotation.y += 0.002;

        // Pulse neurons
        neuralNetwork.children.forEach(child => {
            if (child instanceof THREE.Mesh && child.geometry.type === 'SphereGeometry') {
                const scale = child.userData.originalScale *
                    (1 + Math.sin(time * child.userData.pulseSpeed + child.userData.pulseOffset) * 0.2);
                child.scale.set(scale, scale, scale);
            }
        });
    }

    // Rotate data sphere
    if (dataSphere) {
        dataSphere.rotation.x += 0.001;
        dataSphere.rotation.y += 0.002;
    }

    // Mouse interaction
    if (camera) {
        camera.position.x += (mouseX * 0.05 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.05 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
    }

    renderer.render(scene, camera);
}

// ============================================
// CONTACT SECTION 3D SCENE
// ============================================
function initContactScene() {
    const container = document.getElementById('contact3d');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Create scene
    const contactScene = new THREE.Scene();

    // Create camera
    const contactCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    contactCamera.position.z = 5;

    // Create renderer
    const contactRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    contactRenderer.setSize(window.innerWidth, window.innerHeight);
    contactRenderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(contactRenderer.domElement);

    // Create floating AI elements
    createAIElements(contactScene);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    contactScene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00cec9, 1);
    directionalLight.position.set(1, 1, 1);
    contactScene.add(directionalLight);

    // Animation loop
    function animateContact() {
        requestAnimationFrame(animateContact);

        const time = Date.now() * 0.001;

        // Animate AI elements
        contactScene.children.forEach(child => {
            if (child.userData.isAIElement) {
                child.rotation.x += 0.005;
                child.rotation.y += 0.003;
                child.position.y += Math.sin(time * 0.5 + child.userData.offset) * 0.01;
            }
        });

        contactRenderer.render(contactScene, contactCamera);
    }

    animateContact();
}

function createAIElements(scene) {
    // Create AI/ML related 3D objects
    const objects = [
        { type: 'brain', color: 0x6c5ce7, position: [-3, 0, 0] },
        { type: 'data', color: 0x00cec9, position: [0, 0, 0] },
        { type: 'neural', color: 0xfd79a8, position: [3, 0, 0] },
        { type: 'code', color: 0x00d2d3, position: [-1.5, 2, 0] },
        { type: 'graph', color: 0xfdcb6e, position: [1.5, 2, 0] }
    ];

    objects.forEach((obj, index) => {
        let geometry;

        switch (obj.type) {
            case 'brain':
                geometry = new THREE.IcosahedronGeometry(0.8, 0);
                break;
            case 'data':
                geometry = new THREE.TorusGeometry(0.8, 0.3, 16, 100);
                break;
            case 'neural':
                geometry = new THREE.OctahedronGeometry(0.8, 0);
                break;
            case 'code':
                geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
                break;
            case 'graph':
                geometry = new THREE.DodecahedronGeometry(0.8, 0);
                break;
            default:
                geometry = new THREE.SphereGeometry(0.8, 32, 32);
        }

        const material = new THREE.MeshPhongMaterial({
            color: obj.color,
            emissive: obj.color,
            emissiveIntensity: 0.3,
            shininess: 30,
            transparent: true,
            opacity: 0.8
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(obj.position[0], obj.position[1], obj.position[2]);
        mesh.userData = {
            isAIElement: true,
            offset: index * Math.PI * 0.5
        };

        scene.add(mesh);
    });

    // Add connecting lines
    for (let i = 0; i < objects.length; i++) {
        for (let j = i + 1; j < objects.length; j++) {
            if (Math.random() > 0.5) {
                const geometry = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(objects[i].position[0], objects[i].position[1], objects[i].position[2]),
                    new THREE.Vector3(objects[j].position[0], objects[j].position[1], objects[j].position[2])
                ]);

                const material = new THREE.LineBasicMaterial({
                    color: 0xffffff,
                    transparent: true,
                    opacity: 0.1
                });

                const line = new THREE.Line(geometry, material);
                scene.add(line);
            }
        }
    }
}

// ============================================
// TYPING EFFECT FOR HERO
// ============================================
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

// ============================================
// PARALLAX EFFECT
// ============================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-3d-container, .contact-3d-container');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });
}

// ============================================
// MAGNETIC BUTTONS
// ============================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ============================================
// TOOLTIPS
// ============================================
function initTooltips() {
    const socialLinks = document.querySelectorAll('.social-link, .social-link-large');

    socialLinks.forEach(link => {
        const title = link.getAttribute('title');
        if (title) {
            link.addEventListener('mouseenter', () => {
                // Simple tooltip - can be enhanced with custom tooltip
                link.setAttribute('data-tooltip', title);
            });

            link.addEventListener('mouseleave', () => {
                link.removeAttribute('data-tooltip');
            });
        }
    });
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================
function initializeAllFeatures() {
    initTypingEffect();
    initParallax();
    initMagneticButtons();
    initTooltips();
}

// Call initialization after loading
window.addEventListener('load', initializeAllFeatures);

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log(`
%c🤖 AI & Data Science Portfolio %c
%c Welcome to my portfolio! %c
%c Built with: HTML5, CSS3, JavaScript, Three.js %c
%c Feel free to explore and connect! %c
`,
'color: #6c5ce7; font-size: 20px; font-weight: bold;',
'',
'color: #00cec9; font-size: 16px;',
'',
'color: #fd79a8; font-size: 14px;',
'',
'color: #a29bfe; font-size: 14px;',
''
);

// ============================================
// SERVICE WORKER REGISTRATION (Optional PWA)
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment below to enable PWA functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => {
        //         console.log('ServiceWorker registration successful');
        //     })
        //     .catch(err => {
        //         console.log('ServiceWorker registration failed: ', err);
        //     });
    });
}

// ============================================
// PREVENT RIGHT CLICK (Optional)
// ============================================
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Home = Scroll to top
    if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Ctrl/Cmd + End = Scroll to bottom
    if ((e.ctrlKey || e.metaKey) && e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// ============================================
// VISIBILITY CHANGE - PAUSE ANIMATIONS WHEN TAB IS INACTIVE
// ============================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Tab is inactive - pause heavy animations
        if (renderer) {
            renderer.setAnimationLoop(null);
        }
    } else {
        // Tab is active - resume animations
        if (renderer && scene && camera) {
            renderer.setAnimationLoop(() => {
                if (scene && camera && renderer) {
                    renderer.render(scene, camera);
                }
            });
        }
    }
});

// ============================================
// ERROR HANDLING FOR THREE.JS
// ============================================
window.addEventListener('error', (e) => {
    if (e.message.includes('THREE')) {
        console.error('Three.js error:', e.message);
        // Fallback for devices that don't support WebGL
        const threeContainers = document.querySelectorAll('.hero-3d-container, .contact-3d-container');
        threeContainers.forEach(container => {
            container.style.background = 'radial-gradient(circle at center, rgba(108, 92, 231, 0.1) 0%, transparent 70%)';
        });
    }
});
