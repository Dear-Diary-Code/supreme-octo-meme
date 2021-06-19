const btn = document.getElementById('btn1');
const slide = document.getElementById('slide');

btn.addEventListener('click', function(event) {
    slide.classList.toggle('slide-step2');
});