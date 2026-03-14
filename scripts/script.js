document.addEventListener('DOMContentLoaded', () => {

    // 1. Efeito do Cursor Glow
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // 2. Animação de Scroll Reveal
    const reveals = document.querySelectorAll('.section-reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => revealOnScroll.observe(reveal));

    // 3. Menu Mobile (Hambúrguer) + Bloqueio de Scroll
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const body = document.body;

    function toggleMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
        // Bloqueia ou libera o scroll do fundo ao abrir o menu
        if (navMenu.classList.contains("active")) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }

    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }

    // Fecha o menu ao clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // 4. Link Ativo no Scroll (Highlight no Menu)
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150; // Ajuste para ativar antes
            const sectionId = current.getAttribute("id");
            const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add("active");
                } else {
                    navLink.classList.remove("active");
                }
            }
        });
    }
    
    window.addEventListener("scroll", scrollActive);
});
