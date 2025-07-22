const toggleBtn = document.getElementById("theme-toggle");
const htmlTag = document.documentElement;
const icon = toggleBtn.querySelector(".icon");
let lastScrollTop = 0;

// Tema değişimi
toggleBtn.addEventListener("click", () => {
  const newTheme = htmlTag.dataset.theme === "dark" ? "light" : "dark";
  htmlTag.dataset.theme = newTheme;
  
  // İkon animasyonu
  icon.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 400, easing: "ease-in-out" }
  ).onfinish = () => {
    icon.textContent = newTheme === "dark" ? "🌙" : "☀️";
  };
});

// Sticky header ve scroll animasyonları
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.querySelector(".navbar");
  
  // Header gizleme/gösterme
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
  
  // Parallax efekti
  const parallax = document.querySelector(".parallax-bg");
  if (parallax) {
    parallax.style.transform = `translateY(${scrollTop * 0.4}px)`;
  }
});

// Ürün verilerini ekleme
const products = [
  {
    name: "Redmi Buds 6 Play",
    price: "₺649",
    image: "img/redmi-buds-6-play.jpg",
    description: "24 saat pil ömrü, aktif gürültü engelleme"
  },
  {
    name: "Anker Soundcore Life P2",
    price: "₺1.399",
    image: "img/anker-soundcore-life-p2.jpg",
    description: "Ses kalitesi ve konfor bir arada"
  },
  {
    name: "Dexim 20.000 mAh Powerbank",
    price: "₺899",
    image: "img/dexim-powerbank.jpg",
    description: "Hızlı şarj ve dayanıklı tasarım"
  },
  {
    name: "Torima 20.000 mAh Powerbank",
    price: "₺699",
    image: "img/torima-powerbank.jpg",
    description: "Çift çıkışlı, ultra ince tasarım"
  }
];

const productList = document.querySelector(".product-list");
products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" loading="lazy">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <span class="price">${product.price}</span>
  `;
  productList.appendChild(card);
  
  // Gecikmeli animasyon
  card.style.transitionDelay = `${index * 0.15}s`;
});

// Scroll animasyonu
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { 
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
});

document.querySelectorAll(".product-card, .contact h2, .products h2").forEach(el => {
  observer.observe(el);
});

// Sayfa yükleme animasyonu
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  
  // Hero animasyonu
  const hero = document.querySelector(".hero h1");
  hero.style.animation = "fadeUp 1s var(--ease-out-quart) forwards";
  
  // Parallax container ekleme
  const heroSection = document.querySelector(".hero");
  const parallaxContainer = document.createElement("div");
  parallaxContainer.className = "parallax-container";
  parallaxContainer.innerHTML = '<div class="parallax-bg"></div>';
  heroSection.insertAdjacentElement("afterend", parallaxContainer);
});