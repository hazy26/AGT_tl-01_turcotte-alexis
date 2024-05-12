const h3Links = document.querySelectorAll('h3');

h3Links.forEach(link => {
    const img = document.createElement('img');
    img.src = './assets/img/expand-arrow.svg';
    link.appendChild(img);

    link.addEventListener('click', () => {
        link.firstElementChild.classList.toggle('open-arrow');
        link.nextElementSibling.classList.toggle('hidden');
    });
});