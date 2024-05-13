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
})