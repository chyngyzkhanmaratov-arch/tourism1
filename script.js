const translations = {
  en: {
    tagline: "Welcome to Kyrgyzstan",
    heroTitle: "A robust platform for a large tourism system",
    heroText: "Tour package database, multilingual support, online booking, and partner dashboard in one place.",
    whyTitle: "Why choose Kyrgyzstan?",
    why1Title: "Nature and mountains",
    why1Text: "Ala-Too, Issyk-Kul, and Son-Kol are world-class destinations.",
    why2Title: "Nomadic culture",
    why2Text: "Yurts, local cuisine, ethno-festivals, and immersive experiences.",
    why3Title: "Flexible journeys",
    why3Text: "Easy customization for private, group, VIP, and combo tours.",
    tourTitle: "Popular tour packages",
    tourIntro: "Each package includes itinerary, pricing, inclusions, gallery/video, and FAQ.",
    bookingTitle: "Online booking",
    bookBtn: "Book tour",
    partnerTitle: "Partner agency cabinet",
    partner1Title: "Registration and verification",
    partner1Text: "Foreign agencies can register and upload legal documents.",
    partner2Title: "Commission reports",
    partner2Text: "Automatic commission and payment history per booking.",
    partner3Title: "Manage own tours",
    partner3Text: "Update package prices and availability in real-time."
  },
  ru: {
    tagline: "Добро пожаловать в Кыргызстан",
    heroTitle: "Надёжная платформа для крупной туристической системы",
    heroText: "База туров, мультиязычность, онлайн-бронирование и кабинет партнёра в одном месте.",
    whyTitle: "Почему Кыргызстан?",
    why1Title: "Природа и горы",
    why1Text: "Ала-Тоо, Иссык-Куль и Сон-Куль — уникальные направления мирового уровня.",
    why2Title: "Кочевая культура",
    why2Text: "Юрты, национальная кухня, этно-фестивали и локальный опыт.",
    why3Title: "Гибкие форматы",
    why3Text: "Легко адаптировать под VIP, групповые и комбинированные туры.",
    tourTitle: "Популярные тур-пакеты",
    tourIntro: "Каждый тур содержит маршрут, цены, включённые услуги, галерею/видео и FAQ.",
    bookingTitle: "Онлайн-бронирование",
    bookBtn: "Забронировать",
    partnerTitle: "Кабинет для партнёрских агентств",
    partner1Title: "Регистрация и верификация",
    partner1Text: "Иностранные агентства регистрируются и загружают документы.",
    partner2Title: "Отчёты по комиссии",
    partner2Text: "Автоматический расчёт комиссии и история выплат.",
    partner3Title: "Управление турами",
    partner3Text: "Обновление цен и доступности туров в реальном времени."
  },
  tr: { tagline: "Kırgızistan'a hoş geldiniz", heroTitle: "Büyük turizm sistemi için güçlü platform" },
  cn: { tagline: "欢迎来到吉尔吉斯斯坦", heroTitle: "面向大型旅游系统的专业平台" },
  ar: {
    tagline: "مرحبًا بكم في قيرغيزستان",
    heroTitle: "منصة احترافية لنظام سياحي كبير",
    heroText: "قاعدة باقات سياحية، دعم متعدد اللغات، حجز أونلاين ولوحة شركاء في مكان واحد."
  },
  ky: {}
};

const switcher = document.querySelector("#lang-switch");

function applyLanguage(lang) {
  const dict = translations[lang] || {};
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
}

switcher.addEventListener("change", (e) => applyLanguage(e.target.value));

const form = document.querySelector("#booking-form");
const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const tour = data.get("tour");
  formMessage.textContent = `Request accepted ✅ We will contact you about: ${tour}`;
  form.reset();
});
