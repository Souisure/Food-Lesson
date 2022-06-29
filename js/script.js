import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import forms from './modules/forms';
import menu from './modules/menu';
import slider from './modules/slider';
import timer from './modules/timer';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 10000);

    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    calc();
    menu();
    slider();
    timer();
    forms(modalTimerId);
}); 