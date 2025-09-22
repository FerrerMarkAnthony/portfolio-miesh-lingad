// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  let params = {
    subject: document.getElementById("subject").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  console.log("Sending email with params:", params);

  emailjs
    .send("service_qqqo1j4", "template_aa6g21d", params)
    .then((response) => {
      console.log("✅ EmailJS response:", response);
      alert("Email Sent!");
      form.reset(); // clear form after sending
    })
    .catch((error) => {
      console.error("❌ Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    });
});
