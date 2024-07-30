// Mobile Menu Functionality

let mobileBtn = document.querySelector(".mobile-menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");

let isMenuOpen = false;

mobileBtn.onclick = function() {
    if (!isMenuOpen) {
        mobileMenu.style.display = "block";
        mobileBtn.style.backgroundPosition = "center left 50px, center";
        isMenuOpen = true;
    }
    else if (isMenuOpen) {
        mobileMenu.style.display = "none";
        mobileBtn.style.backgroundPosition = "center, center left 50px";
        isMenuOpen = false;
    }
}