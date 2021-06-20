const selectBtn = document.querySelector('.selectionner');
const articles = document.querySelectorAll('.tuile');
const buttonBtn = document.querySelector('.button');

let canSelect = false;
let selected = 0;

selectBtn.addEventListener('click', function(event) {
    selectBtn.classList.toggle('cancel');
    if (selectBtn.classList.contains('cancel')) {
        selectBtn.innerText = "Annuler"
    } else {
        selectBtn.innerText = "Sélectionner"
    }
    if (canSelect === true) {
        canSelect = false;
        articles.forEach(function(article) {
            article.classList.remove('selected');
        });
        selected = 0;
        buttonBtn.classList.remove('active');
    } else {
        canSelect = true;
    }
});

articles.forEach(function(article) {
    article.addEventListener('click', function(event) {
        if (canSelect === true) {
            article.classList.toggle('selected');
            if (article.classList.contains('selected')) {
                selected += 1;
            } else {
                selected -= 1;
            }
            if (selected >= 1) {
                buttonBtn.classList.add('active');
            } else {
                buttonBtn.classList.remove('active');
            }
        }
    })
});