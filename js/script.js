// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar');

// Theme Management
const ThemeManager = {
    init() {
        // Get saved theme or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        this.bindEvents();
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon(theme);
    },

    updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    },

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    },

    bindEvents() {
        themeToggle.addEventListener('click', () => this.toggleTheme());
    }
};

// Navigation Management
const NavigationManager = {
    init() {
        this.bindEvents();
        this.handleScroll();
    },

    bindEvents() {
        // Hamburger menu toggle
        hamburger.addEventListener('click', this.toggleMobileMenu);

        // Smooth scroll for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    this.smoothScrollTo(targetSection);
                    this.closeMobileMenu();
                }
            });
        });

        // Handle scroll events
        window.addEventListener('scroll', () => {
            this.handleScroll();
            this.updateActiveNavLink();
        });
    },

    toggleMobileMenu() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    },

    closeMobileMenu() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    },

    smoothScrollTo(target) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    },

    handleScroll() {
        const scrolled = window.pageYOffset > 50;
        navbar.classList.toggle('scrolled', scrolled);
    },

    updateActiveNavLink() {
        const scrollPosition = window.pageYOffset + navbar.offsetHeight + 100;

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
};

// Scroll Animations
const ScrollAnimations = {
    init() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.createObserver();
        this.addAnimationClasses();
    },

    createObserver() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            this.observerOptions
        );
    },

    addAnimationClasses() {
        // Add fade-in class to elements that should animate
        const animatedElements = document.querySelectorAll(`
            .section-title,
            .skill-category,
            .project-card,
            .timeline-item,
            .education-card,
            .contact-item,
            .about-text,
            .about-info,
            .hero-content,
            .hero-image
        `);

        animatedElements.forEach(el => {
            if (!el.classList.contains('hero-content') && !el.classList.contains('hero-image')) {
                el.classList.add('fade-in');
                this.observer.observe(el);
            }
        });
    },

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }
};

// Typing Animation for Hero Section
const TypingAnimation = {
    init() {
        this.typewriterElement = document.querySelector('.hero-subtitle');
        if (this.typewriterElement) {
            this.startTyping();
        }
    },

    startTyping() {
        const text = this.typewriterElement.textContent;
        this.typewriterElement.textContent = '';
        this.typewriterElement.style.borderRight = '2px solid';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                this.typewriterElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    this.typewriterElement.style.borderRight = 'none';
                }, 1000);
            }
        }, 100);
    }
};

// Skill Progress Animation
const SkillAnimation = {
    init() {
        this.bindSkillHovers();
    },

    bindSkillHovers() {
        const skillTags = document.querySelectorAll('.skill-tag');
        
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
};

// Project Card Interactions
const ProjectInteractions = {
    init() {
        this.bindProjectCards();
    },

    bindProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = 'var(--shadow-xl)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'var(--shadow-md)';
            });
        });
    }
};

// Contact Form Enhancement (if form is added)
const ContactEnhancement = {
    init() {
        this.addContactInteractions();
    },

    addContactInteractions() {
        const socialLinks = document.querySelectorAll('.social-link');
        
        socialLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
};

// Parallax Effect for Hero Section
const ParallaxEffect = {
    init() {
        this.bindParallax();
    },

    bindParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            const codeAnimation = document.querySelector('.code-animation');
            
            if (heroSection && codeAnimation) {
                const rate = scrolled * -0.5;
                codeAnimation.style.transform = `translateY(${rate}px)`;
            }
        });
    }
};

// Performance Observer for monitoring
const PerformanceMonitor = {
    init() {
        if ('PerformanceObserver' in window) {
            this.observePerformance();
        }
    },

    observePerformance() {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'navigation') {
                    console.log('Page Load Time:', entry.loadEventEnd - entry.loadEventStart);
                }
            }
        });
        
        observer.observe({ entryTypes: ['navigation'] });
    }
};

// Accessibility Enhancements
const AccessibilityManager = {
    init() {
        this.addKeyboardNavigation();
        this.addAriaLabels();
    },

    addKeyboardNavigation() {
        // Enable keyboard navigation for theme toggle
        themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                ThemeManager.toggleTheme();
            }
        });

        // Add focus management for mobile menu
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                NavigationManager.toggleMobileMenu();
            }
        });
    },

    addAriaLabels() {
        // Dynamic aria-label for theme toggle
        const updateThemeToggleLabel = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const label = currentTheme === 'dark' ? '라이트 모드로 변경' : '다크 모드로 변경';
            themeToggle.setAttribute('aria-label', label);
        };

        // Update on theme change
        new MutationObserver(updateThemeToggleLabel).observe(
            document.documentElement,
            { attributes: true, attributeFilter: ['data-theme'] }
        );
        
        updateThemeToggleLabel();
    }
};

// Error Handling
const ErrorHandler = {
    init() {
        window.addEventListener('error', this.handleError);
        window.addEventListener('unhandledrejection', this.handlePromiseRejection);
    },

    handleError(error) {
        console.error('JavaScript Error:', error.message, error.filename, error.lineno);
    },

    handlePromiseRejection(event) {
        console.error('Unhandled Promise Rejection:', event.reason);
    }
};

// SEO and Meta Management
const SEOManager = {
    init() {
        this.updateMetaOnScroll();
    },

    updateMetaOnScroll() {
        const sections = {
            'home': '황교진 - Full-Stack Developer',
            'about': '황교진 - About Me',
            'skills': '황교진 - Technical Skills',
            'projects': '황교진 - Projects',
            'experience': '황교진 - Work Experience',
            'contact': '황교진 - Contact'
        };

        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset + navbar.offsetHeight + 100;
            
            for (const [sectionId, title] of Object.entries(sections)) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        document.title = title;
                        break;
                    }
                }
            }
        });
    }
};

// Mobile Device Detection and Optimizations
const MobileOptimizer = {
    init() {
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (this.isMobile) {
            this.optimizeForMobile();
        }
    },

    optimizeForMobile() {
        // Disable hover effects on mobile
        document.body.classList.add('mobile-device');
        
        // Add touch-friendly interactions
        const interactiveElements = document.querySelectorAll('.skill-tag, .project-card, .social-link');
        
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 150);
            });
        });
    }
};

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        ThemeManager.init();
        NavigationManager.init();
        ScrollAnimations.init();
        TypingAnimation.init();
        SkillAnimation.init();
        ProjectInteractions.init();
        ContactEnhancement.init();
        ParallaxEffect.init();
        PerformanceMonitor.init();
        AccessibilityManager.init();
        ErrorHandler.init();
        SEOManager.init();
        MobileOptimizer.init();
        
        console.log('Portfolio website initialized successfully!');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
    }
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export modules for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ThemeManager,
        NavigationManager,
        ScrollAnimations,
        TypingAnimation,
        SkillAnimation,
        ProjectInteractions,
        ContactEnhancement,
        ParallaxEffect,
        AccessibilityManager,
        MobileOptimizer
    };
} 