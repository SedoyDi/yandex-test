// мкрипт для слайдера 3го блока 

const slidesBl3 = document.querySelectorAll('.block-3__slide');
const leftBtnBl3 = document.getElementById('bl3-btn-left');
const rightBtnBl3 = document.getElementById('bl3-btn-right');
const countSlide = document.getElementById('counter-slide');
const countLenght = document.getElementById('counter-lenght');

let windowWidth = window.innerWidth;

let cnt = 0;
let step = 0;

function render(e) {
    if (e < 1300) {
        for (let k = 0; k <= slideImg.length; k++) {
            slidesBl3[k].classList.remove('active')
        }
        cnt = 0
        step = 1
        slidesBl3[cnt].classList.add('active');
        countSlide.textContent = step;
    } else {
        for (let k = 0; k <= slideImg.length; k++) {
            slidesBl3[k].classList.remove('active')
        }
        cnt = 0
        step = 3
        slidesBl3[cnt].classList.add('active');
        slidesBl3[cnt + 1].classList.add('active');
        slidesBl3[cnt + 2].classList.add('active');
        countSlide.textContent = step;

    }

    countLenght.textContent = slidesBl3.length;
}

render(windowWidth);
window.addEventListener('resize', (e) => {
    render(e.currentTarget.innerWidth)
    windowWidth = e.currentTarget.innerWidth
}, true)

function leftClick() {
    windowWidth > 1300 ? step = 3 : step = 1;

    for (let k = 0; k <= slideImg.length; k++) {
        slidesBl3[k].classList.remove('active')
    }
    cnt = cnt - step;

    (cnt < 0) && (cnt = slidesBl3.length - 1);

    if (windowWidth < 1300) {
        slidesBl3[cnt].classList.add('active')
    } else {
        slidesBl3[cnt].classList.add('active')
        slidesBl3[cnt - 1].classList.add('active')
        slidesBl3[cnt - 2].classList.add('active')
    }

    countSlide.textContent = cnt + step;
}

function rightClick() {
    windowWidth > 1300 ? step = 3 : step = 1;

    for (let k = 0; k <= slideImg.length; k++) {
        slidesBl3[k].classList.remove('active')
    }

    cnt = cnt + step;

    (cnt > slidesBl3.length - 1) && (cnt = 0);

    if (windowWidth < 1300) {
        slidesBl3[cnt].classList.add('active')
    } else {
        slidesBl3[cnt].classList.add('active')
        slidesBl3[cnt + 1].classList.add('active')
        slidesBl3[cnt + 2].classList.add('active')
    }
    countSlide.textContent = cnt + step;
}


let second = 1000 * 4;
let timerclick = setInterval(() => rightClick(), second)

leftBtnBl3.addEventListener('click', () => leftClick())
rightBtnBl3.addEventListener('click', () => rightClick())

const container = document.getElementById("slider-container");
container.addEventListener('mouseover', () => clearInterval(timerclick));
container.addEventListener('mouseleave', () => {
    timerclick = setInterval(() => rightClick(), second)
});

