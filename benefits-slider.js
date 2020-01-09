const slider2 = document.querySelector('.slider-adv');
const sliderList2 = slider2.querySelectorAll('.desc-list__item');
const buttonsSlider2 = slider2.querySelectorAll('.button-list__button');

for (let elem of buttonsSlider2) {
        elem.addEventListener('click', function () {
                removePreviousPhoto2(slider2);
                toogleButton2(elem, slider2);
                addActivePhoto2(elem, sliderList2);
        })
}

function removePreviousPhoto2(parent) {
        const activePhoto = parent.querySelector('.display_block');
        activePhoto.classList.remove('display_block');
}

function toogleButton2(elem, parent) {
        const activeButton = parent.querySelector('.js-button-list__button');
        activeButton.classList.remove('js-button-list__button');
        elem.classList.add('js-button-list__button');
}

function addActivePhoto2(elem, parent) {
        const index = elem.getAttribute('data-img');

        const needPhoto = parent[index];
        needPhoto.classList.add('display_block');
}
