'use strict';

//MODAL ELEMENTS

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

let lastFocusedButton = null;

const openModal = function {
    modalEl.classList.remove('hidden');
    overlayEl.checkList.remove('hidden');
    modalEl.focus();
    lastFocusedButton = document.activeElement;
};

const closeModal = function () {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')){
        closeModal();
    }
});
