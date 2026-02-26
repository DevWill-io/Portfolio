document.addEventListener('DOMContentLoaded', () => {

    // 1. Efeito do Cursor Glow (Sombra verde seguindo o mouse)
    const cursorGlow = document.querySelector('.cursor-glow');
    
    // Atualiza a posição da div de brilho com base na posição do mouse
    document.addEventListener('mousemove', (e) => {
        // Usamos clientX e clientY para pegar a posição exata da tela
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // 2. Animação de Scroll (Revelar elementos ao rolar a página)
    const reveals = document.querySelectorAll('.section-reveal');

    const revealOptions = {
        threshold: 0.15, // Dispara quando 15% do elemento está visível
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Faz a animação acontecer apenas uma vez
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Opcional: Efeito extra de crescimento no botão do header ao clicar
    const navBtn = document.querySelector('.nav-btn');
    if (navBtn) {
        navBtn.addEventListener('mousedown', () => {
            navBtn.style.transform = 'scale(0.95)';
        });
        navBtn.addEventListener('mouseup', () => {
            navBtn.style.transform = 'scale(1)';
        });
    }
});
