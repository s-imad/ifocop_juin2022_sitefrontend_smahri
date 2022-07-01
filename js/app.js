// fonction qui permet de faire apparaitre le menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {
        e.preventDefault()
        navbar.classList.toggle('show-nav');
    });
}
toggleMenu();


//page parfums
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

// page contact
// fonction qui permet d'envoyer une alert si on valide sans avoir rempli le formulaire
function promoValider() {
    const btn = document.getElementById('bouton');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if (name.value == "" || surname.value == "" || email.value == "") {
            alert(`Veuillez remplir le formulaire correctement`);
        } else {
            alert(`Felicitaions ! Vous recevrez par mail votre coupon de reduction, à bientot!`)
        }
    })
}
promoValider();