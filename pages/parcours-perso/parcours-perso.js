const btn = document.getElementById('btn1');
const slide = document.getElementById('slide');

btn.addEventListener('click', function(event) {
    slide.classList.toggle('slide-step2');
});

// la liste des différentes couleurs à utiliser
const pageClassColor = [
    "purple",
    "blue"
]
// on selectionne tous les elements du DOM (Document Object Model) qui nous intéresse dans la page
const nextDom = document.getElementById('next');
const pagesDom = document.querySelectorAll('.page');
const flecheDom = document.querySelector('.fleche');
const pagesIndexesDom = document.querySelectorAll('.page-step');

nextDom.addEventListener('click', function(event) {
    // on récupère et stocke l'index de la page courrante
    const currentPage = event.target.dataset.current;
    // puis on incrémente la valeur de l'attribut dataset de 1 pour correspondre à notre nouvelle page
    event.target.dataset.current = parseInt(currentPage) + 1;
    if (event.target.dataset.current <= pageClassColor.length) {
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

const meteoItems = document.querySelectorAll('.meteo .item');
const meteoTexte = document.getElementById('meteo-texte');
const meteoTextes = {
    'soleil': 'Je me sens ensoleillé, je suis prêt à aider les autres !',
    'nuageux': 'Le soleil est là, mais il y a des nuages à l\'horizon...',
    'arc-en-ciel': 'Après la pluie le beau temps, je sors d\'une période désagréable',
    'pluie': 'Je ne suis pas dans une phase positive',
    'nuage': 'Pas de joie ni de tristesse particulière',
    'eclair': 'Je ressens de la détresse, aidez-moi !'
};

meteoItems.forEach(function(item) {
    item.addEventListener('change', function(event) {
        const lastChecked = document.querySelector('.last-checked');
        lastChecked.dataset.degree = event.target.dataset.degree;
        lastChecked.classList.remove('center');
        lastChecked.classList.remove('last-checked');
        lastChecked.classList.add(lastChecked.dataset.degree);
        meteoTexte.innerText = meteoTextes[event.target.dataset.name];
        event.target.classList.remove(event.target.dataset.degree);
        event.target.classList.add('center');
        event.target.classList.add('last-checked');
    })
})