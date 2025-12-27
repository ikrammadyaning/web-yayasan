// Ganti background & teks otomatis
const heroBg = document.getElementById("hero-bg");
const heroTeks = document.querySelector(".hero-teks");

const slides = [
  {
    image: "img/bg.jpeg",
    h1: "Selamat Datang!!",
    h2: "Di PT.Karisma Melati Sedayu Group",
    p: "Kami Hadir untuk Meringankan Langkah Anda."
  },
  {
    image: "img/bg2.jpeg",
    h1: "Mitra Terpercaya Anda",
    h2: "Kami siap membantu kebutuhan tenaga kerja Anda",
    p: "Pelayanan cepat, profesional, dan terpercaya sejak 2007."
  },
  {
    image: "img/bg3.jpeg",
    h1: "Kualitas Terjamin",
    h2: "SDM unggul untuk masa depan cerah",
    p: "Kami menyeleksi tenaga kerja dengan standar internasional."
  }
];

let currentSlide = 0;

function changeSlide() {
  const slide = slides[currentSlide];
  heroBg.style.backgroundImage = `url(${slide.image})`;

  // Ganti teks juga
  heroTeks.querySelector("h1").textContent = slide.h1;
  heroTeks.querySelector("h2").textContent = slide.h2;
  heroTeks.querySelector("p").textContent = slide.p;

  currentSlide = (currentSlide + 1) % slides.length;
}

changeSlide();
setInterval(changeSlide, 3000); // Ganti setiap 3 detik


const faders = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
faders.forEach(fade => observer.observe(fade));


