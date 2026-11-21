// === НАСТРОЙКИ МОНЕТИЗАЦИИ ===
// Вставьте сюда свою ссылку на оплату (Gumroad, Boosty, Hipolink, ЮKassa, Stripe Payment Link и т.д.)
const PAYMENT_LINK = "https://hipolink.net/ares_pro/products/startovyy-nabor-frilansera";
const CONTACT_EMAIL = ""; // пример: "you@example.com"
const TELEGRAM_LINK = ""; // пример: "https://t.me/yourchannel"

function openPayment() {
  if (!PAYMENT_LINK) {
    alert(
      "Ссылка на оплату пока не настроена. Откройте файл script.js и вставьте вашу ссылку в PAYMENT_LINK."
    );
    return;
  }
  window.open(PAYMENT_LINK, "_blank", "noopener,noreferrer");
}

function setupLinks() {
  document.querySelectorAll("[data-payment]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openPayment();
    });
  });

  const contact = document.getElementById("contact-link");
  if (contact) {
    contact.href = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "#contact";
    if (!CONTACT_EMAIL) {
      contact.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }

  const tg = document.getElementById("telegram-link");
  if (tg) {
    if (TELEGRAM_LINK) {
      tg.href = TELEGRAM_LINK;
      tg.target = "_blank";
      tg.rel = "noopener noreferrer";
    } else {
      tg.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Добавьте ссылку на Telegram в script.js (TELEGRAM_LINK).");
      });
    }
  }
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((i) => obs.observe(i));
}

document.addEventListener("DOMContentLoaded", () => {
  setupLinks();
  setupReveal();
});
