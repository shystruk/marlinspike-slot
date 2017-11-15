'use strict';

import { http } from './helpers/http';
import showResults from './ui_render/showResults';

(function(window, document) {
    const startBtn = document.getElementById('game-start');

    startBtn.addEventListener('click', () => {
        http('/pattern', showResults);
    });
}(window, document));
