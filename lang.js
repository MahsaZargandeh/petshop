const translations = {
  fa: {
    login: "ورود",
    register: "ثبت نام",
    myAccount: "حساب من",
    home: "خانه",
    news: "نازه ها",
    shop: "فروشگاه",
    trends: "ترندها",
    blog: "وبلاگ",
    contact: "تماس با ما",
    specialSale: "فروش ویژه این هفته برگزار می شود",
    discount: "تا 50% تخفیف برای اولین خرید",
    focusHealth: "روی سلامتیش تمرکز کن",
    buyNow: "همین حالا خرید کنید",
    securePayment: "پرداخت های 100% امن",
    support: "پشتیبانی",
    returnDays: "روز بازگشت 30",
    freeShipping: "ارسال رایگان",
    bestSellers: "پرفروش ترین کالاها",
  },
  en: {
    login: "Login",
    register: "Register",
    myAccount: "My Account",
    home: "Home",
    news: "News",
    shop: "Shop",
    trends: "Trends",
    blog: "Blog",
    contact: "Contact Us",
    specialSale: "Special Sale This Week",
    discount: "Up to 50% Off on First Purchase",
    focusHealth: "Focus on Health",
    buyNow: "Shop Now",
    securePayment: "100% Secure Payment",
    support: "Support",
    returnDays: "30 Days Return",
    freeShipping: "Free Shipping",
    bestSellers: "Best Sellers",
  },
};

let currentLang = "fa";

function toggleLanguage() {
  currentLang = currentLang === "fa" ? "en" : "fa";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "fa" ? "rtl" : "ltr";
  updateContent();
}

function updateContent() {
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}
