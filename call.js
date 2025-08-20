
const USER_ID = "YOUR_USER_ID";     
const SERVICE_ID = "YOUR_SERVICE_ID";    
const TEMPLATE_ID = "template_f99j7p5";


emailjs.init(USER_ID);

const form = document.getElementById("contact-form");
const status = document.getElementById("status");


form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }


  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, this)
    .then(() => {
      status.innerHTML = "<p class='text-success'>✅ پیام شما با موفقیت ارسال شد.</p>";
      form.reset();
      form.classList.remove("was-validated");
    })
    .catch((error) => {
      status.innerHTML = "<p class='text-danger'>❌ ارسال پیام با خطا مواجه شد.</p>";
      console.error("EmailJS Error:", error);
    });
});

