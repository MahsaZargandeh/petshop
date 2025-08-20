let cartCount = 0;
let totalPrice = 0;

function addToCart(button) {
  const productCard = button.parentElement;
  const priceText = productCard.querySelector("p").innerText;
  const price = parseInt(priceText.replace(/[^0-9]/g, ""));
  const count = parseInt(productCard.querySelector(".counter span").innerText);

  cartCount += count;
  totalPrice += price * count;

  document.getElementById("cart-count").innerText = cartCount;
  alert(`محصول اضافه شد! مجموع قیمت: ${totalPrice.toLocaleString()} تومان`);
}

function increase(btn) {
  const span = btn.parentElement.querySelector("span");
  let count = parseInt(span.innerText);
  span.innerText = count + 1;
}

function decrease(btn) {
  const span = btn.parentElement.querySelector("span");
  let count = parseInt(span.innerText);
  if (count > 1) span.innerText = count - 1;
}

// Swiper Init
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
