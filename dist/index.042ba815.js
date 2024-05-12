const btnMenu = document.querySelector(".menu__icon");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav__link");
btnMenu.addEventListener("click", ()=>{
    toggleMenu();
});
navLinks.forEach((navLink)=>{
    navLink.addEventListener("click", ()=>{
        toggleMenu();
    });
});
function toggleMenu() {
    nav.classList.toggle("hidden");
    btnMenu.classList.toggle("open");
}

//# sourceMappingURL=index.042ba815.js.map
