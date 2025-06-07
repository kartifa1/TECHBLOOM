// ===== JS BY HASAN ~ TECHBLOOM =====
    function showModal(title, content) {
      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalContent").textContent = content;
      document.getElementById("cyberModal").classList.remove("hidden");
    }

    function closeModal() {
      document.getElementById("cyberModal").classList.add("hidden");
    }

    function showWelcomeModal() {
      const modal = document.getElementById('welcome-modal');
      const box = document.querySelector('.modal-box');
      modal.classList.remove('hidden');
      setTimeout(() => {
        box.classList.remove('scale-90', 'opacity-0');
        box.classList.add('scale-100', 'opacity-100');
      }, 100);
    }

    function closeWelcome() {
      document.getElementById('welcome-modal').classList.add('hidden');
    }

    window.addEventListener('load', () => {
      setTimeout(showWelcomeModal, 700);
    });
