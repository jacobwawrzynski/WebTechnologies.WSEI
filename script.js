const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const popupNewsletter = document.querySelector(".popupNewsletter");
const emailForm = document.querySelector("#email-newsletter");
const emailInput = document.querySelector('#email-input');
const emailError = document.querySelector('#email-error');
const newsletterSuccess = document.querySelector("#newsletterSuccess");

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

// Newsletter (for demonstration purposes only)
function popupNewsletterVisible() {
    if (newsletterSuccess.classList.contains("active")) {
        popupSuccessHide();
        popupNewsletter.classList.add("active");
    } else {
        popupNewsletter.classList.add("active");
    }
    
}

function popupNewsletterHidden() {
    popupNewsletter.classList.remove("active");
}

function popupSuccess() {
    popupNewsletterHidden();
    newsletterSuccess.classList.add("active");
}

function popupSuccessHide() {
    newsletterSuccess.classList.remove("active");
}

// Newsletter validation
emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
  
    if (isValidEmail) {
        popupSuccess();
    } else {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.classList.add("error");
    }
});

// Pricing plans
// TODO
let price = 0;

function pricingPlan(plan) {
    if (plan === 'basic') {
        price = 299.99;
    }
    if (plan === 'advanced') {
        price = 599.99;
    }
    if (plan === 'premium') {
        price = 1499.99;
    }
}

function getPrice() {
    return price;
}