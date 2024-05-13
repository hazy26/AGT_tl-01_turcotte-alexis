const links = document.querySelectorAll(".title");
const arrows = document.querySelector(".down-arrow");
links.forEach((link)=>{
    link.addEventListener("click", ()=>{
        link.nextElementSibling.classList.toggle("hidden");
        link.lastElementChild.classList.toggle("up-arrow");
    });
});

//# sourceMappingURL=index.ddfba629.js.map
