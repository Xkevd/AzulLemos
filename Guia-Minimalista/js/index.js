// Manejo unificado de eventos para FAQs y Etapas (Delegación de Eventos)
document.addEventListener('click', (e) => {
    // 1. FAQ Accordion
    const faqItem = e.target.closest('.faq-quest');
    if (faqItem) {
        // Evitar que el acordeón se cierre si el usuario hace clic dentro de la respuesta (para seleccionar texto, etc.)
        if (e.target.closest('.faq-ans')) return;

        const answer = faqItem.querySelector('.faq-ans');
        if (answer) {
            answer.classList.toggle('activo');
            // Opcional: Rotar el botón '+' si se desea animar
            const btn = faqItem.querySelector('button');
            if (btn) btn.classList.toggle('rotado'); // Asumiendo que quisieras animar el botón, si no existe la clase no pasa nada.
        }
        return;
    }

    // 2. Módulos / Etapas Accordion
    const moduleItem = e.target.closest('.module-item');
    if (moduleItem) {
        // Evitar cierre si se interactúa con el detalle
        if (e.target.closest('.module-detail')) return;

        const detail = moduleItem.querySelector('.module-detail');
        if (detail) {
            detail.classList.toggle('activo');
        }
    }
});