// ============================================
//  MAIN.JS — Portfolio interactions
// ============================================
(function () {
    "use strict";

    // ---------- DOM REFS ----------
    const loader = document.getElementById("loader");
    const navbar = document.getElementById("navbar");
    const navLinks = document.getElementById("navLinks");
    const navBurger = document.getElementById("navBurger");
    const langToggle = document.getElementById("langToggle");
    const langFlag = document.getElementById("langFlag");
    const langLabel = document.getElementById("langLabel");
    const themeToggle = document.getElementById("themeToggle");
    const backToTop = document.getElementById("backToTop");
    const typewriterEl = document.getElementById("typewriter");
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    // ---------- STATE ----------
    let currentLang = "fr";
    let currentTheme = "dark";
    let lastScrollY = 0;

    // ---------- LOADER ----------
    window.addEventListener("load", () => {
        setTimeout(() => loader.classList.add("done"), 600);
    });

    // ---------- CUSTOM CURSOR ----------
    if (globalThis.matchMedia("(pointer: fine)").matches) {
        document.addEventListener("mousemove", (e) => {
            cursorDot.style.left = e.clientX + "px";
            cursorDot.style.top = e.clientY + "px";
            cursorOutline.style.left = e.clientX + "px";
            cursorOutline.style.top = e.clientY + "px";
        });
        document.querySelectorAll("a, button, .project-card, .skill-item").forEach((el) => {
            el.addEventListener("mouseenter", () => cursorOutline.classList.add("hover"));
            el.addEventListener("mouseleave", () => cursorOutline.classList.remove("hover"));
        });
    }

    // ---------- NAVBAR HIDE/SHOW ON SCROLL ----------
    window.addEventListener("scroll", () => {
        const sy = window.scrollY;
        if (sy > lastScrollY && sy > 100) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
        }
        lastScrollY = sy;

        // back to top
        backToTop.classList.toggle("visible", sy > 600);

        // active nav link
        highlightNav();
    }, { passive: true });

    function highlightNav() {
        const sections = document.querySelectorAll("section[id]");
        let current = "";
        sections.forEach((sec) => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) current = sec.id;
        });
        document.querySelectorAll(".nav-links a").forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === "#" + current);
        });
    }

    // ---------- MOBILE NAV ----------
    navBurger.addEventListener("click", () => {
        navBurger.classList.toggle("open");
        navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
            navBurger.classList.remove("open");
            navLinks.classList.remove("open");
        });
    });

    // ---------- BACK TO TOP ----------
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ---------- THEME TOGGLE ----------
    themeToggle.addEventListener("click", () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = currentTheme === "light" ? "light" : "";
        themeToggle.innerHTML = currentTheme === "dark"
            ? '<i class="fas fa-moon"></i>'
            : '<i class="fas fa-sun"></i>';
    });

    // ---------- LANGUAGE TOGGLE ----------
    langToggle.addEventListener("click", () => {
        currentLang = currentLang === "fr" ? "en" : "fr";
        applyTranslations(currentLang);
        document.documentElement.lang = currentLang;
        document.documentElement.dataset.lang = currentLang;
        langFlag.textContent = currentLang === "fr" ? "🇬🇧" : "🇫🇷";
        langLabel.textContent = currentLang === "fr" ? "EN" : "FR";
        // restart typewriter
        startTypewriter();
    });

    function applyTranslations(lang) {
        const t = translations[lang];
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (t[key] !== undefined) {
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    // for form labels — handled by sibling label
                } else {
                    el.innerHTML = t[key];
                }
            }
        });
    }

    // ---------- TYPEWRITER ----------
    let twTimeout;
    function startTypewriter() {
        clearTimeout(twTimeout);
        const items = translations[currentLang].typewriter_items;
        let itemIdx = 0;
        let charIdx = 0;
        let deleting = false;
        const speed = 80;
        const pause = 1800;

        function tick() {
            const current = items[itemIdx];
            if (deleting) {
                typewriterEl.textContent = current.substring(0, charIdx - 1);
                charIdx--;
                if (charIdx === 0) {
                    deleting = false;
                    itemIdx = (itemIdx + 1) % items.length;
                }
            } else {
                typewriterEl.textContent = current.substring(0, charIdx + 1);
                charIdx++;
                if (charIdx === current.length) {
                    deleting = true;
                    twTimeout = setTimeout(tick, pause);
                    return;
                }
            }
            twTimeout = setTimeout(tick, deleting ? speed / 2 : speed);
        }
        typewriterEl.textContent = "";
        tick();
    }
    startTypewriter();

    // ---------- SCROLL REVEAL ----------
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    // ---------- COUNTER ANIMATION ----------
    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );
    document.querySelectorAll(".stat-number").forEach((el) => counterObserver.observe(el));

    function animateCounter(el) {
        const target = Number.parseInt(el.dataset.count, 10);
        const duration = 1500;
        const start = performance.now();
        function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
        }
        requestAnimationFrame(step);
    }

    // ---------- PROJECT FILTERS ----------
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.dataset.filter;
            projectCards.forEach((card) => {
                if (filter === "all" || card.dataset.category === filter) {
                    card.classList.remove("hidden-card");
                } else {
                    card.classList.add("hidden-card");
                }
            });
        });
    });

    // ---------- SMOOTH SCROLL FOR ANCHOR LINKS ----------
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
            const target = document.querySelector(a.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ---------- CONTACT FORM (placeholder) ----------
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector("button[type=submit]");
            const originalText = btn.textContent;
            btn.textContent = currentLang === "fr" ? "Envoyé ✓" : "Sent ✓";
            btn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = "";
                contactForm.reset();
            }, 2500);
        });
    }

})();
