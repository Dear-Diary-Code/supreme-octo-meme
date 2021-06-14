// la liste des différentes couleurs à utiliser
const pageClassColor = [
    "purple",
    "blue",
    "pink",
    "blue",
]
// on selectionne tous les elements du DOM (Document Object Model) qui nous intéresse dans la page
const nextDom = document.getElementById('next');
const pagesDom = document.querySelectorAll('.page');
const flecheDom = document.querySelector('.fleche');
const pagesIndexesDom = document.querySelectorAll('ul > li');

nextDom.addEventListener('click', function(event) {
    // on récupère et stocke l'index de la page courrante
    const currentPage = event.target.dataset.current;
    // puis on incrémente la valeur de l'attribut dataset de 1 pour correspondre à notre nouvelle page
    event.target.dataset.current = parseInt(currentPage) + 1;
    if (event.target.dataset.current < 5) {
        // on met à jour la couleur de la flèche
        flecheDom.setAttribute('src', "../../img/tuto" + (parseInt(currentPage) + 1) + "_fleche.svg")
        // on retire la class active de tous les elements de la page précédente
        const previousIndex = (parseInt(currentPage) - 1);
        pagesDom[previousIndex].classList.remove('active');
        pagesDom[previousIndex].classList.add('inactive');
        pagesIndexesDom[previousIndex].classList.remove('active');
        // on met à jour les courleurs du slider
        pagesIndexesDom.forEach(function(elem) {
            elem.classList.remove(pageClassColor[previousIndex]);
            elem.classList.add(pageClassColor[currentPage]);
        });
        // puis on rajoute la classe active sur l'element qui correspond à la nouvelle page
        // comme un tableau commence avec l'index 0 on peut directement utiliser la valeur
        // de currentPage
        pagesIndexesDom[currentPage].classList.add('active');
        pagesDom[currentPage].classList.add('active');
    } else {
        simulateClick();
    }
});

/**
 * found on stackoverflow at https://stackoverflow.com/a/17569610/5016557
 * allow to simulate a click on a link
 */
function simulateClick() {
    // on créé l'objet evenement 
    const event = new MouseEvent("click", {isTrusted: true});
    // on récupère le lien sur lequel nous voulons "cliquer"
    const redirectLinkDom = document.querySelector(".passer");
    // on déclenche l'évenement sur le lien (en gros on clique virtuellement dessus)
    redirectLinkDom.dispatchEvent(event);
  }