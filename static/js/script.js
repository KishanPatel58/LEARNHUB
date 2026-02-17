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

const menu = document.getElementById("usernames")
const profilemenu = document.getElementById("profile-menu")
const closebutton = document.querySelector(".closebutton")
const logout = document.querySelector(".logout")
menu.addEventListener("click",(e)=>{
    e.preventDefault();
    profilemenu.style.display="flex";
    profilemenu.style.top=`60px`   
    profilemenu.style.right=`5px`   
})
closebutton.addEventListener("click",()=>{
    profilemenu.style.display="none"
})

logout.addEventListener("click",()=>{
    localStorage.clear();
})