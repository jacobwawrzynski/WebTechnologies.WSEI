const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const popupBtn = document.querySelector(".popup-button");
const wrapper = document.querySelector(".wrapper");
const popupBox = document.querySelector(".popup-box");
const popupClose = document.querySelector(".popup-close");


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