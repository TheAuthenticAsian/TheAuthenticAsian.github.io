window.onload = () => {
    const menuButton = document.getElementById("menu-button");
    const navbarLinks = document.getElementById("nav-links");
    const contactLink = document.getElementById("contact-link");

    menuButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
        contactLink.classList.toggle("active");
    });
};
