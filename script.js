
// =========================
// HER CARE - SCRIPT
// =========================

// Mobile menu
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}

// Close the mobile menu when a link is clicked
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Scroll animations
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(function (element) {
    observer.observe(element);
});

// Automatically update the copyright year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
