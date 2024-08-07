export function setupFormSubmission() {
  const form = document.getElementById("order-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      import("./email.js")
        .then(() => {
          const fromName = document.getElementById("from_name").value;
          const fromEmail = document.getElementById("from_email").value;
          const fromPhone = document.getElementById("from_phone").value;

          const templateParams = {
            from_name: fromName,
            from_email: fromEmail,
            from_phone: fromPhone,
          };

          emailjs
            .send("service_16rukhh", "template_5tn31u6", templateParams)
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Email sent successfully!");
              },
              function (error) {
                console.log("FAILED...", error);
                alert("Failed to send email.");
              }
            );
        })
        .catch((error) => {
          console.error("Ошибка при загрузке email.js", error);
        });
    });
  }
}
