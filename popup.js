//Находим все кнопки, которые должны вызывать попап окно
const buttonsOpenPopup = document.querySelectorAll('.js-openPopup');
const buttonsClosePopup = document.querySelectorAll('.js-close');//зачем нам все кнопки? нужна только та, которая относится к конкретному окну (хз как сделать)
const popupModalWrite = document.querySelector('.js-modal-write');
const inputsModalWrite = popupModalWrite.querySelectorAll('.js-input'); //зачем нам все попапы? Нужны только те, которые относятся к конкретному окну!! (+ГОТОВО)
const statusImg = popupModalWrite.querySelectorAll('.js-status-img')
const inputName = document.getElementById('id-name');//зачем все имена? (+ГОТОВО)
const inputEmail = document.getElementById('id-email');//зачем все емайлы? (+ГОТОВО)
const inputComment = document.getElementById('id-desc');//зачем все комменты? (+ГОТОВО)
const buttonModalWrite = popupModalWrite.querySelector('.js-button');
const overlay = document.querySelector('.js-overlay');

for (let elem of buttonsOpenPopup) {
    elem.addEventListener('click', function (event) {
        event.preventDefault();
        openPopup(this);
    });
}

for (let elem of buttonsClosePopup) {
    elem.addEventListener('click', function (event) {
        closePopup(elem);
    });

    overlay.addEventListener('click', function (event) {
        closePopup(elem);
    });

    window.addEventListener('keydown', function (event) {
        if (event.code == "Escape") {
            event.preventDefault();
            closePopup(elem);
        }
    });
}

buttonModalWrite.setAttribute('disabled', true);

inputName.addEventListener('blur', function () {
    checkingValidity(inputName);
})

inputEmail.addEventListener('blur', function () {
    checkingValidity(inputEmail);
})

inputComment.addEventListener('blur', function () {
    checkingValidity(inputComment);
})

inputName.addEventListener('focus', function () {
    removeValidityStatus(inputName);
})

inputEmail.addEventListener('focus', function () {
    removeValidityStatus(inputEmail);
})

inputComment.addEventListener('focus', function () {
    removeValidityStatus(inputComment);
})

function openPopup(elem) {
    const classNamePopup = elem.getAttribute('data-popup');
    const popup = document.querySelector(`.${classNamePopup}`);

    popup.classList.add('js-animation-open-popup');
    overlay.classList.add('display_block');
    document.body.style.overflow = "hidden";
}

function closePopup(elem) {
    elem.closest('.js-popup').classList.remove('js-animation-open-popup');
    overlay.classList.remove('display_block');
    document.body.style.overflow = "auto";

    for (let elem of inputsModalWrite) {
        if (elem.classList.contains('js-invalid') || elem.classList.contains('js-valid')) {
            elem.classList.remove('js-valid');
            elem.classList.remove('js-invalid');
            elem.value = '';
        };
    }

    for (let elem of statusImg) {
        elem.classList.remove('display_block');
    }
}

function checkingValidity(input) {
    const statusImg = input.nextElementSibling;

    if ( !(input.checkValidity()) || input.value == '') {
        input.classList.add('js-invalid');
        statusImg.classList.add('display_block');
        statusImg.style.background = "url('../svg/remove.svg') no-repeat"
    } else {
        input.classList.add('js-valid');
        statusImg.classList.add('display_block');
        statusImg.style.background = "url('../svg/check-mark.svg') no-repeat"
    }
    if (inputName.classList.contains('js-valid') && inputEmail.classList.contains('js-valid') && inputComment.classList.contains('js-valid')) {
        buttonModalWrite.removeAttribute('disabled');
    }
    if (inputName.classList.contains('js-invalid') || inputEmail.classList.contains('js-invalid') || inputComment.classList.contains('js-invalid')) {
        buttonModalWrite.setAttribute('disabled', true);
    }
}

function removeValidityStatus(input) {
    const statusImg = input.nextElementSibling;

    input.classList.remove('js-invalid');
    input.classList.remove('js-valid');
    statusImg.classList.remove('display_block');
}