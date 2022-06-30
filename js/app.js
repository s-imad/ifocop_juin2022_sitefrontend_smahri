// fonction qui permet de faire apparaitre le menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    });
}
toggleMenu();

// fonction qui permet de faire apparaitre les parfums en fonction de la barre de recherche
function rechercheParfum() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('parfums');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}