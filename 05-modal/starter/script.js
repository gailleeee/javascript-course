'use strict';

//MODAL ELEMENTS

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalEl.length);

const openModal = function {
    modalEl.classList.remove('hidden');
    overlayEl.checkList.remove('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));




