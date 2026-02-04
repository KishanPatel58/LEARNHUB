let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // scrolling UP → hide navbar
        navbar.style.transform = "translateY(-100%)";
    } else {
        // scrolling DOWN → show navbar
        navbar.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
});
