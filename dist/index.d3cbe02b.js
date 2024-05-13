const header = document.querySelector("header");
function whenScrolling() {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) header.classList.add("minimize");
    else header.classList.remove("minimize");
}
window.onscroll = function() {
    whenScrolling();
};
const btnRetourHaut = document.querySelector(".btn__retour-haut");
btnRetourHaut.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
});

//# sourceMappingURL=index.d3cbe02b.js.map
