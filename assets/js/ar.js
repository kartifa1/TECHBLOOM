// ===== JS BY HASAN ~ TECHBLOOM =====
    function showModal(title, content) {
      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalContent").textContent = content;
      document.getElementById("arModal").classList.remove("hidden");
    }
    function closeModal() {
      document.getElementById("arModal").classList.add("hidden");
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


    function toggleTryOn() {
      const area = document.getElementById("tryon-area");
      area.classList.toggle("hidden");
    }


    let score = 0;
    function startGame() {
      const target = document.getElementById("gameTarget");
      target.classList.remove("hidden");
      moveTarget();
    }
    function moveTarget() {
      const target = document.getElementById("gameTarget");
      const top = Math.random() * (window.innerHeight - 100);
      const left = Math.random() * (window.innerWidth - 100);
      target.style.top = `${top}px`;
      target.style.left = `${left}px`;
    }
    function hitTarget() {
      score++;
      moveTarget();
      alert(`Skor kamu: ${score}`);
    }

    window.addEventListener('load', () => {
      setTimeout(showWelcomeModal, 700);
    });
