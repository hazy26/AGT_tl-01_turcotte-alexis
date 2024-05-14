
/* MENU BURGER */
const btnMenu = document.querySelector('.menu__icon');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav__link');

btnMenu.addEventListener('click', () => {
    toggleMenu();
});

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        toggleMenu();
    });
});

function toggleMenu(){
    nav.classList.toggle('hidden');
};


/* DROPDOWNS */
const links = document.querySelectorAll('.title');
const arrows = document.querySelector('.down-arrow');
links.forEach(link => {
    link.addEventListener('click', () => {
        link.nextElementSibling.classList.toggle('hidden');
        link.lastElementChild.classList.toggle('up-arrow');
    });
});


/* SCROLL */
const btnRetourHaut = document.querySelector('.btn__retour-haut');
btnRetourHaut.addEventListener('click', () => {
    window.scrollTo(0, 0);
})