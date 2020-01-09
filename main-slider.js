const slider = document.querySelector('.slider-product');
const sliderList = slider.querySelectorAll('.slider-list__item');
const buttonsSlider = slider.querySelectorAll('.slider-controls__item');

for (let elem of buttonsSlider) {
        elem.addEventListener('click', function() {
                removePreviousPhoto(slider);
                toogleButton(elem, slider);
                addActivePhoto(elem, sliderList);
        })
}

function removePreviousPhoto(parent) {
        const activePhoto = parent.querySelector('.display_flex');
        activePhoto.classList.remove('display_flex');
}

function toogleButton(elem, parent) {
        const activeButton = parent.querySelector('.js-buttons-slider');
        activeButton.classList.remove('js-buttons-slider');
        elem.classList.add('js-buttons-slider');
}

function addActivePhoto(elem, parent) {
        const index = elem.getAttribute('data-img');

        const needPhoto = parent[index];
        needPhoto.classList.add('display_flex');
}
