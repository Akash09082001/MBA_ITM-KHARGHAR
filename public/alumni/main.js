const mobileMenu = document.getElementById("mobile-nav");
const openButton = document.getElementById("open"); // Assuming you have an open button
const closeButton = document.getElementById("close"); // Assuming you have a close button

// open menu
function openMenu() {
    mobileMenu.style.display = "flex";
    openButton.style.display = "none";
    closeButton.style.display = "block";
}
function closeMenu() {
    mobileMenu.style.display = "none";
    openButton.style.display = "block";
    closeButton.style.display = "none";
}
