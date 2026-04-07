function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModalDirect(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

function closeModal(event, id) {
    const modal = document.getElementById(id);
    if (event.target === modal) {
        closeModalDirect(id);
    }
}

const observerOptions = {
    threshold: 0.12
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => {
    observer.observe(el);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal-overlay.open');
        openModals.forEach((modal) => {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        });
    }
});