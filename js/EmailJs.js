// Initialize EmailJS
(function () {
  emailjs.init({
    publicKey: "qja81pMpXxr0BVGOA", 
  });
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_ne76qvf", "template_dvrdz7c", this)
    .then(function () {
      alert("Message sent successfully!");
    }, function (error) {
      alert("Failed to send message: " + error.text);
    });
});