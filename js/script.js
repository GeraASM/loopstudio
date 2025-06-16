const bg = document.getElementById('background');
const interactiveImg = document.querySelector('.interactive__img');

function newBackground() {

    if (window.innerWidth >= 768) {
        interactiveImg.src = './images/desktop/image-interactive.jpg';
    }

    if (window.innerWidth >= 1024) {
        bg.style.backgroundImage = "url('./images/desktop/image-hero.jpg')";

    } else if (window.innerWidth < 768) {
        bg.style.backgroundImage = "url('./images/mobile/image-hero.jpg')";
        interactiveImg.src = './images/mobile/image-interactive.jpg';

    }
}



window.addEventListener('DOMContentLoaded', newBackground);
window.addEventListener('resize', newBackground);