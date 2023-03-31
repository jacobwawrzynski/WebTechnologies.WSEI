// Hemburger menu consts
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

// Newsletter consts
const popupNewsletter = document.querySelector(".popupNewsletter");
const emailInput = document.querySelector('#email-input');
const emailError = document.querySelector('#email-error');
const newsletterSuccess = document.querySelector("#newsletterSuccess");

// Form consts
const forename = document.querySelector("#forename");
const emailForm = document.querySelector("#email");
const surname = document.querySelector("#surname");
const phone = document.querySelector("#phone");


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

function submitNewsletter() {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
  
    if (isValidEmail) {
        popupSuccess();
    } else {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.classList.add("error");
    }
}

// Pricing plans
let price = 0;
let planType = "";

function pricingPlan(plan) {
    if (plan === 'basic') {
        price = 299.99;
        planType = "Basic plan";
    }
    if (plan === 'advanced') {
        price = 599.99;
        planType = "Advanced plan";
    }
    if (plan === 'premium') {
        price = 1499.99;
        planType = "Premium plan";
    }
}

function saveFormData() {
    
    // Save the input values to localStorage
    localStorage.setItem('price', price);
    localStorage.setItem('plan', planType);
    
    // Move to the next page
    window.location.href = 'contact.html';
}

let priceInput = document.getElementById('price');
let planInput = document.getElementById('plan');

priceInput.value = localStorage.getItem('price');
planInput.value = localStorage.getItem('plan');

// Sending contact form with validation
function sendForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const isValidEmail = emailRegex.test(emailForm.value);
    const isValidPhone = phoneRegex.test(phone.value);

    if (isValidEmail && isValidPhone) {
        popupSuccess();
    } else if (!isValidEmail) {
        alert("Input email in correct format");
    } else if (!isValidPhone) {
        alert("Input phone in correct format");
    }

}