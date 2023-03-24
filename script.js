const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const popup = document.querySelector("#popup");
const emailForm = document.querySelector("#email-newsletter");
const emailInput = document.querySelector('#email-input');
const emailError = document.querySelector('#email-error');

// Toggle between active and inactive hamburger menu
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Newsletter
function popupVisible() {
    popup.classList.add("active");
}

function popupHidden() {
    popup.classList.remove("active");
}

emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
  
    if (isValidEmail) {
      //form.submit();
      console.log("Valid email");
    } else {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.classList.add("error");
    }
  });