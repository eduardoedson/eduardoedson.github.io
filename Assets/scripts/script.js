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
});
