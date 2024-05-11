/* DROP MENU FUNCTION */
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
    btnMenu.classList.toggle('open');
};




/* SCROLL FUNCTIONS */
const header = document.querySelector('header');
const btnRetourHaut = document.querySelector('.btn__retour-haut');

function whenScrolling(){
    if(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50){
        btnRetourHaut.classList.remove('hidden');
        header.classList.add('minimize');
    } else{
        btnRetourHaut.classList.add('hidden');
        header.classList.remove('minimize');
    };
};
window.onscroll = function(){whenScrolling()};

btnRetourHaut.addEventListener('click', () => {
    window.scrollTo(0, 0);
});




/* DROPDOWNS*/
const h3Links = document.querySelectorAll('h3');

h3Links.forEach(link => {
    const img = document.createElement('img');
    img.src = '/src/assets/img/expand-arrow.svg';
    link.appendChild(img);

    link.addEventListener('click', () => {
        link.firstElementChild.classList.toggle('open-arrow');
        link.nextElementSibling.classList.toggle('hidden');
    });
});