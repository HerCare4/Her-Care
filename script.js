// =================================
// HER CARE JAVASCRIPT
// =================================


// MOBILE MENU

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


// CLOSE MENU WHEN LINK IS CLICKED

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// FOOTER YEAR

const year = document.getElementById("year");


if (year) {

    year.textContent = new Date().getFullYear();

}
