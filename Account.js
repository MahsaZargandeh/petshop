function showTab(event, tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');

  document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');
}
document.addEventListener("DOMContentLoaded", function () {
  const pet = document.getElementById("pet-animation");

  // اطمینان از وجود تصویر
  if (pet) {
    pet.style.display = "block";
  }
});
