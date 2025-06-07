// ===== JS BY HASAN ~ TECHBLOOM =====
document.addEventListener("DOMContentLoaded", function () {

    AOS.init();

    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    const contactForm = document.getElementById("contactForm");
    const contactModalEl = document.getElementById("contactModal");
    let contactModal;
    if (contactModalEl) {
        contactModal = new bootstrap.Modal(contactModalEl);
    }

    if (contactForm && contactModal) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");
            const kategori = document.getElementById("kategori");

            let valid = true;

            if (!name || name.value.trim() === "") {
                name.classList.add("is-invalid");
                valid = false;
            } else {
                name.classList.remove("is-invalid");
            }

            if (!email || email.value.trim() === "" || !email.value.includes("@")) {
                email.classList.add("is-invalid");
                valid = false;
            } else {
                email.classList.remove("is-invalid");
            }

            if (!message || message.value.trim() === "") {
                message.classList.add("is-invalid");
                valid = false;
            } else {
                message.classList.remove("is-invalid");
            }

            if (valid) {
                const kategoriPesan = document.getElementById("kategoriPesan");
                if (kategori && kategoriPesan) {
                    kategoriPesan.textContent = kategori.value;
                }

                contactForm.reset();
                contactForm.classList.remove("was-validated");

                contactModal.show();
            } else {
                contactForm.classList.add("was-validated");
            }
        });
    }

    const cards = document.querySelectorAll('#features .card');
    cards.forEach(card => {
        card.addEventListener('focus', () => {
            card.classList.add('shadow-lg', 'border', 'border-primary');
        });
        card.addEventListener('blur', () => {
            card.classList.remove('shadow-lg', 'border', 'border-primary');
        });
    });

    function revealFeatures() {
        const featureCards = document.querySelectorAll('#features .card');
        featureCards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, i * 300);
        });
    }
    function onScroll() {
        const featuresSection = document.getElementById('features');
        if (!featuresSection) return;
        const rect = featuresSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            revealFeatures();
            window.removeEventListener('scroll', onScroll);
        }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    const features = [
        { id: "feature-ai", msg: "Anda yakin akan belajar Artificial Intelligence?", key: "showAiWelcome", url: "./assets/html/ai.html" },
        { id: "feature-iot", msg: "Anda yakin akan belajar Internet of Things?", key: "showIotWelcome", url: "./assets/html/iot.html" },
        { id: "feature-web", msg: "Anda yakin akan belajar Web Development?", key: "showWebWelcome", url: "./assets/html/webdev.html" },
        { id: "feature-sensor", msg: "Anda yakin ingin mempelajari Sensor Otomatis?", key: "showSensorWelcome", url: "./assets/html/sensor.html" },
        { id: "feature-analytics", msg: "Anda yakin ingin mempelajari Analitik IoT?", key: "showAnalitikWelcome", url: "./assets/html/analitik.html" },
        { id: "feature-cyber", msg: "Anda yakin ingin mempelajari Cyber Security?", key: "showCyberWelcome", url: "./assets/html/cyber.html" },
        { id: "feature-ar", msg: "Anda yakin ingin belajar Augmented Reality?", key: "showArWelcome", url: "./assets/html/ar.html" },
        { id: "feature-uiux", msg: "Anda yakin ingin belajar UI/UX Design?", key: "showUiuxWelcome", url: "./assets/html/uiux.html" },
        { id: "feature-cloud", msg: "Anda yakin ingin belajar Cloud Computing?", key: "showCloudWelcome", url: "./assets/html/cloud.html" }
    ];

    features.forEach(feature => {
        const element = document.getElementById(feature.id);
        if (element) {
            element.addEventListener('click', () => {
                const confirmed = confirm(feature.msg);
                if (confirmed) {
                    sessionStorage.setItem(feature.key, "yes");
                    window.location.href = feature.url;
                }
            });
        }
    });

    cards.forEach(card => {
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    const mapOverlay = document.querySelector('.map-overlay');
    const mapIframe = document.querySelector('.map-iframe');

    if (mapOverlay && mapIframe) {
        const mapContainer = mapOverlay.parentElement;

        mapOverlay.addEventListener('mouseenter', () => {
            mapIframe.style.filter = 'brightness(0.85) saturate(1.2)';
            mapContainer.style.boxShadow = '0 0 30px 5px rgba(57, 73, 171, 0.8)';
            mapOverlay.style.background = 'rgba(57, 73, 171, 0.15)';
            mapOverlay.style.transition = 'background 0.4s ease';
        });

        mapOverlay.addEventListener('mouseleave', () => {
            mapIframe.style.filter = 'brightness(1) saturate(1)';
            mapContainer.style.boxShadow = '0 0 20px rgba(57, 73, 171, 0.4)';
            mapOverlay.style.background = 'transparent';
        });
    }

    const slider = document.querySelector('.testimoni-slider');
    if (slider) {
        let scrollAmount = 0;
        const scrollStep = 300;
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        function autoScroll() {
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0;
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollAmount += scrollStep;
                slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            }
        }

        setInterval(autoScroll, 3000);
    }

    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const sections = document.querySelectorAll('.hero, #features, #about, #contact');
    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.9;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible-section');
                if (section.classList.contains('hero')) section.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);
});
