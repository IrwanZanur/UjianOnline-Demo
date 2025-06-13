
// Cek session
if (!sessionStorage.getItem("nis")) {
  alert("Kamu belum login.");
  window.location.href = "login.html";
}

// Timer mundur 60 menit
let duration = 3600;
const display = document.getElementById("countdown");

const timer = setInterval(() => {
  const m = String(Math.floor(duration / 60)).padStart(2, '0');
  const s = String(duration % 60).padStart(2, '0');
  display.textContent = `${m}:${s}`;
  duration--;

  if (duration < 0) {
    clearInterval(timer);
    alert("Waktu habis! Ujian berakhir.");
    window.location.href = "https://google.com";
  }
}, 1000);

// Fullscreen
document.addEventListener("DOMContentLoaded", () => {
  const doc = document.documentElement;
  if (doc.requestFullscreen) doc.requestFullscreen();
});

// Deteksi tab keluar
let blurCount = 0;
window.addEventListener("blur", () => {
  blurCount++;
  alert(`Peringatan: kamu keluar dari tab ${blurCount}x`);
  if (blurCount >= 3) {
    alert("Ujian dihentikan karena terlalu sering keluar tab.");
    window.location.href = "https://google.com";
  }
});
