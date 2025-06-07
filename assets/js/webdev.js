// ===== JS BY HASAN ~ TECHBLOOM =====
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalCloseBtn = document.getElementById('modal-close');
const modalOkBtn = document.getElementById('modal-ok');
const clickSound = document.getElementById('click-sound');

function showModal(title, description) {
    modalTitle.textContent = title;
    modalDesc.textContent = description;
    modal.classList.remove('hidden');
    modal.querySelector('.modal-content').focus();
    clickSound.play().catch(() => { });
}

function closeModal() {
    modal.classList.add('hidden');
}


modalCloseBtn.addEventListener('click', () => {
    closeModal();
    clickSound.play().catch(() => { });
});
modalOkBtn.addEventListener('click', () => {
    closeModal();
    clickSound.play().catch(() => { });
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
        clickSound.play().catch(() => { });
    }
});


document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') {
        closeModal();
        clickSound.play().catch(() => { });
    }
});


document.getElementById('open-website-btn').addEventListener('click', () => {
    clickSound.play().catch(() => { });
    alert("Anda yakin akan kembali ke beranda?");
    window.location.href = "../../dashboard.html";
});


const welcomeModal = document.getElementById('welcomeModal');
const closeWelcomeBtn = document.getElementById('closeWelcomeModal');


window.addEventListener('load', () => {
    welcomeModal.classList.remove('hidden');
    closeWelcomeBtn.focus();
});


closeWelcomeBtn.addEventListener('click', () => {
    welcomeModal.classList.add('hidden');
    clickSound.play().catch(() => { });
});