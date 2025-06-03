function sendMail () {
   let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,

  }

  emailjs.send("service_ne76qvf, template_dvrdz7c", parms).then(alert("Your message sent successfully!"))
}



// Slideshow Images
const images = [
    "images/ace.jpg",
    "images/code.jpg",
    "images/slide.jpg"
  ];
  
  let index = 0;
  const blob = document.querySelector(".profile-blob .bg-cover");
  
  function changeImage() {
    index = (index + 1) % images.length;
    if (blob) {
      blob.style.backgroundImage = `url(${images[index]})`;
    }
  }
  
  // Change every 4 seconds
  setInterval(changeImage, 4000);
  
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
    }
  
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-link");
  
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  });
  
