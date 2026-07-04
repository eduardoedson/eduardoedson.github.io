function openLink (link) {
    window.open(link, '_blank');
}

window.addEventListener('DOMContentLoaded', () => {
    // Fade + slide in each section as it enters the viewport
    const revealEls = document.querySelectorAll('.reveal');

    if (revealEls.length && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealEls.forEach((el) => revealObserver.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('in-view'));
    }

    // Highlight the nav link that matches the section currently in view
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        navLinks.forEach((link) => link.classList.remove('active'));
                        activeLink.classList.add('active');
                    }
                }
            });
        }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

        sections.forEach((section) => navObserver.observe(section));
    }

    // Give the fixed nav a solid/blurred background once the page is scrolled
    const siteNav = document.getElementById('siteNav');

    if (siteNav) {
        const updateNavBackground = () => {
            siteNav.classList.toggle('scrolled', window.scrollY > 12);
        };

        updateNavBackground();
        window.addEventListener('scroll', updateNavBackground, { passive: true });
    }

    // Light / dark theme toggle (initial theme is already set in <head> to avoid a flash)
    const themeToggle = document.getElementById('themeToggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);

            try {
                localStorage.setItem('theme', next);
            } catch (e) {
                // localStorage unavailable, theme just won't persist across reloads
            }
        });
    }

    // Open project links, mirroring the click handler with keyboard support
    document.querySelectorAll('.project-card[data-href]').forEach((card) => {
        card.addEventListener('click', () => openLink(card.dataset.href));
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openLink(card.dataset.href);
            }
        });
    });

    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Index each tech chip within its own group, so the CSS stagger
    // animation (--chip-i) restarts at 0 for every card/entry instead of
    // climbing forever across the whole page
    document.querySelectorAll('.exp-techs, .project-techs').forEach((group) => {
        Array.from(group.children).forEach((chip, index) => {
            chip.style.setProperty('--chip-i', index);
        });
    });

    // Cursor-tracking glow on education/project cards
    const glowCards = document.querySelectorAll('.edu-card, .project-card');

    glowCards.forEach((card) => {
        card.addEventListener('mousemove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mx', `${x}%`);
            card.style.setProperty('--my', `${y}%`);
        });
    });

    // Magnetic pull on primary buttons/icons — only for users with a precise
    // pointer (mouse/trackpad) who haven't asked for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!prefersReducedMotion && hasFinePointer) {
        const strength = 0.35;

        document.querySelectorAll('.magnetic').forEach((el) => {
            el.addEventListener('mousemove', (event) => {
                const rect = el.getBoundingClientRect();
                const relX = event.clientX - rect.left - rect.width / 2;
                const relY = event.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0)';
            });
        });
    }
});
