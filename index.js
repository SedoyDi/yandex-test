
// скрипт для слайдера 2го блока

const slideImg = document.querySelectorAll('.block-2__slide-img');
const points = document.querySelectorAll('.block-2__point');
const leftBtn = document.getElementById('bl2-btn-left');
const rightBtn = document.getElementById('bl2-btn-right');

slideImg[0].classList.add('active');
points[0].classList.add('active');
leftBtn.setAttribute('disabled', true);

let counter = 0;

leftBtn.addEventListener('click', () => {
    for (let k = 0; k < slideImg.length; k++) {
        points[k].classList.remove('active')
        slideImg[k].classList.remove('active')
    }
    counter--
    if (counter <= 0) {
        leftBtn.setAttribute('disabled', true);
        rightBtn.removeAttribute('disabled');
    }
    slideImg[counter].classList.add('active');
    points[counter].classList.add('active');
})

rightBtn.addEventListener('click', () => {
    for (let k = 0; k < slideImg.length; k++) {
        points[k].classList.remove('active')
        slideImg[k].classList.remove('active')
    }

    counter++

    if (counter !== 0 || counter < slideImg.length) {
        leftBtn.removeAttribute('disabled');
        rightBtn.removeAttribute('disabled');

    }

    if (counter >= (slideImg.length - 1)) {
        leftBtn.removeAttribute('disabled');
        rightBtn.setAttribute('disabled', true);
    }

    slideImg[counter].classList.add('active');
    points[counter].classList.add('active');

}) 