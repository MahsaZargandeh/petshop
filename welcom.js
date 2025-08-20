function switchForm(formName) {
  document.getElementById("loginForm").classList.remove("active");
  document.getElementById("signupForm").classList.remove("active");

  if (formName === "login") {
    document.getElementById("loginForm").classList.add("active");
  } else {
    document.getElementById("signupForm").classList.add("active");
  }
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("ورود موفق بود!");
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("ثبت‌نام موفق بود!");
});
document.addEventListener("DOMContentLoaded", () => {
  const pet = document.querySelector('.pet-bg');
  if (pet) {
    pet.style.display = "block";
  }
});
