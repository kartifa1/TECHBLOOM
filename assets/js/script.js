// ===== JS BY HASAN ~ TECHBLOOM =====
const openBtn = document.getElementById("openBtn");
const openSound = document.getElementById("openSound");
const curtainLeft = document.getElementById("curtainLeft");
const curtainRight = document.getElementById("curtainRight");


if (openBtn) {
  openBtn.addEventListener("click", () => {
    try {
      openSound.play(); 
    } catch (e) {
      console.log("SFX tidak bisa diputar");
    }

    openBtn.disabled = true;
    openBtn.innerHTML = '<span class="loader-dot"></span> Loading...';
    openBtn.style.opacity = "0.7";

    setTimeout(() => {
      curtainLeft.classList.add("open-left");
      curtainRight.classList.add("open-right");
      curtainLeft.style.opacity = 1;
      curtainRight.style.opacity = 1;

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 2000);
    }, 1500);
  });
}

const openButton = document.getElementById('openButton');
if (openButton) {
  openButton.addEventListener('click', function () {
    curtainLeft.style.transform = 'translateX(-100%)';
    curtainRight.style.transform = 'translateX(100%)';
    try {
      openSound.play();
    } catch (e) {
      console.log("SFX tidak bisa diputar");
    }
  });
}

