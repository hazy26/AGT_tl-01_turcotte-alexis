/* MENU BURGER */ const btnMenu = document.querySelector(".menu__icon");
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
}
/* DROPDOWNS */ const dropdowns = document.querySelectorAll(".title");
dropdowns.forEach((dropdown)=>{
    dropdown.addEventListener("click", ()=>{
        dropdown.nextElementSibling.classList.toggle("hidden");
    });
});
const mainDropdowns = document.querySelectorAll(".letter-title");
mainDropdowns.forEach((dropdown)=>{
    dropdown.addEventListener("click", ()=>{
        dropdown.nextElementSibling.classList.toggle("hidden");
    });
});
/* SCROLL */ const btnRetourHaut = document.querySelector(".btn__retour-haut");
btnRetourHaut.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
});

//# sourceMappingURL=index.b4ce7916.js.map
