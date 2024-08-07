// Инициализация EmailJS
(function () {
  emailjs.init("GkQR7oiV7MVCjW--s");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("order-form");
  console.log("fsfsfsf");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fromName = document.getElementById("from_name").value;
    const fromEmail = document.getElementById("from_email").value;
    const fromPhone = document.getElementById("from_phone").value;

    const templateParams = {
      from_name: fromName,
      from_email: fromEmail,
      from_phone: fromPhone,
    };

    emailjs.send("service_16rukhh", "template_5tn31u6", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send email.");
      }
    );
  });
});
