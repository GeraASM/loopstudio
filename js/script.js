const bg = document.getElementById('background');
const interactiveImg = document.querySelector('.interactive__img');
const creationsImg = document.querySelectorAll('.creations__img');

function newBackground() {

    if (window.innerWidth >= 768) {
        interactiveImg.src = './images/desktop/image-interactive.jpg';
    }

    if (window.innerWidth >= 1024) {
        bg.style.backgroundImage = "url('./images/desktop/image-hero.jpg')";
        creationsImg.forEach((creationImg, index) => {
            creationImg.src = creationsDesktop[index];
        })


    } else if (window.innerWidth < 768) {
        bg.style.backgroundImage = "url('./images/mobile/image-hero.jpg')";
        interactiveImg.src = './images/mobile/image-interactive.jpg';
        creationsImg.forEach((creationImg, index) => {
            creationImg.src = creationsMobile[index];
        })
    }
}



window.addEventListener('DOMContentLoaded', newBackground);
window.addEventListener('resize', newBackground);

const creationsDesktop = {
    0: './images/desktop/image-deep-earth.jpg',
    1: './images/desktop/image-night-arcade.jpg',
    2: './images/desktop/image-soccer-team.jpg',
    3: './images/desktop/image-grid.jpg',
    4: './images/desktop/image-from-above.jpg',
    5: './images/desktop/image-pocket-borealis.jpg',
    6: './images/desktop/image-curiosity.jpg',
    7: './images/desktop/image-fisheye.jpg'
}

const creationsMobile = {
    0: './images/mobile/image-deep-earth.jpg',
    1: './images/mobile/image-night-arcade.jpg',
    2: './images/mobile/image-soccer-team.jpg',
    3: './images/mobile/image-grid.jpg',
    4: './images/mobile/image-from-above.jpg',
    5: './images/mobile/image-pocket-borealis.jpg',
    6: './images/mobile/image-curiosity.jpg',
    7: './images/mobile/image-fisheye.jpg'
}

const loopstudiosMenu = document.querySelector('.loopstudios__menu');
const menuShow = document.getElementById('menuShow');
const close = document.getElementById('close');

function activateMenu() {
    menuShow.style.transform = 'translateX(0)';
}

function removeMenu() {
    menuShow.style.transform = 'translateX(-100%)';
}

loopstudiosMenu.addEventListener('click', activateMenu);
close.addEventListener('click', removeMenu);