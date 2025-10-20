// <!-- 🌸 Hoa rơi -->
document.addEventListener("DOMContentLoaded", () => {
  const petalCount = 25;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDelay = Math.random() * 10 + "s";
    petal.style.background = `hsl(${Math.random() * 30 + 330}, 70%, 80%)`;
    petal.style.width = petal.style.height = Math.random() * 10 + 10 + "px";
    document.body.appendChild(petal);
  }
});
// Tính số ngày yêu nhau
const startDate = new Date("2025-04-12");
const today = new Date();
const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById(
  "dayCount"
).innerText = `Hôm nay là ngày thứ ${diffDays} bên nhau 💖`;
// Password logic
const passwordScreen = document.getElementById("passwordScreen");
const mainContent = document.getElementById("mainContent");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const errorMsg = document.getElementById("errorMsg");
const bgMusic = document.getElementById("bgMusic");

const correctPassword = "02010803";

unlockBtn.addEventListener("click", () => {
  if (passwordInput.value === correctPassword) {
    passwordScreen.style.display = "none";
    mainContent.style.display = "block";
    bgMusic.play().catch(() => {});
  } else {
    errorMsg.classList.remove("hidden");
  }
});
// Hiệu ứng chữ khi cuộn
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);
fadeEls.forEach((el) => observer.observe(el));

// Nút chuyển slide
const container = document.getElementById("slideContainer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
nextBtn.addEventListener("click", () =>
  container.scrollBy({ left: 300, behavior: "smooth" })
);
prevBtn.addEventListener("click", () =>
  container.scrollBy({ left: -300, behavior: "smooth" })
);

// 🎠 Tự động chuyển slide
setInterval(() => {
  container.scrollBy({ left: 300, behavior: "smooth" });
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    container.scrollTo({ left: 0, behavior: "smooth" });
  }
}, 3500);

// Nút bật/tắt nhạc

const musicBtn = document.getElementById("musicToggle");
let playing = true;
musicBtn.addEventListener("click", () => {
  if (playing) {
    bgMusic.pause();
    musicBtn.textContent = "🔈";
  } else {
    bgMusic.play();
    musicBtn.textContent = "🔊";
  }
  playing = !playing;
});
