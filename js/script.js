window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          menu = require('./modules/menu'),
          slider = require('./modules/slider'),
          timer = require('./modules/timer');

    tabs();
    modal();
    calc();
    menu();
    slider();
    timer();
    forms();
}); 