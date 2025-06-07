// ===== JS BY HASAN ~ TECHBLOOM =====


function showWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    const box = modal.querySelector('.modal-box');
    modal.classList.remove('hidden');
    setTimeout(() => {
        box.classList.remove('scale-90', 'opacity-0');
        box.classList.add('scale-100', 'opacity-100');
    }, 100);
}


function closeWelcome() {
    const modal = document.getElementById('welcome-modal');
    const box = modal.querySelector('.modal-box');

    box.classList.remove('scale-100', 'opacity-100');
    box.classList.add('scale-90', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}


window.addEventListener('load', () => {
    showWelcomeModal();
});
function showModal(title, content) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalContent').textContent = content;
    document.getElementById('uiuxModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // disable scroll saat modal terbuka
}
function closeModal() {
    document.getElementById('uiuxModal').classList.add('hidden');
    document.body.style.overflow = ''; // enable scroll kembali
}
window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
    }
});


const cards = document.querySelectorAll('.fade-slide-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


const beforeAfterContainer = document.getElementById('beforeAfterContainer');
const afterWrapper = document.getElementById('afterImageWrapper');
const slider = document.getElementById('slider');

let isDragging = false;

slider.style.left = '50%';
afterWrapper.style.width = '50%';

slider.addEventListener('mousedown', () => {
    isDragging = true;
});
window.addEventListener('mouseup', () => {
    isDragging = false;
});
window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const rect = beforeAfterContainer.getBoundingClientRect();
    let posX = e.clientX - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;
    const percent = (posX / rect.width) * 100;
    slider.style.left = `${percent}%`;
    afterWrapper.style.width = `${percent}%`;
});


slider.addEventListener('touchstart', () => {
    isDragging = true;
});
window.addEventListener('touchend', () => {
    isDragging = false;
});
window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const rect = beforeAfterContainer.getBoundingClientRect();
    let posX = touch.clientX - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;
    const percent = (posX / rect.width) * 100;
    slider.style.left = `${percent}%`;
    afterWrapper.style.width = `${percent}%`;
});
