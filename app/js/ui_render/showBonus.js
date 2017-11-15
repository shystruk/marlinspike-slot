'use strict';

import { http } from './../helpers/http';
import showResults from './showResults';

export default function showBonus() {
    const startBtn = document.getElementById('game-start');
    const firstRun = document.getElementById('game-firstRun');
    const gameBonus = document.getElementById('game-bonus');
    const gameBonusTimer = document.getElementById('game-bonus-timer');

    startBtn.className = 'game-startButton hide';
    gameBonus.className = 'show game-bonus';

    let counting = 6;
    let bonusTimer = () => {
        gameBonusTimer.innerHTML = --counting;

        if (counting < 1) {
            clearInterval(timerInterval);
            startBtn.className = 'game-startButton show';
            gameBonus.className = 'game-bonus';
            gameBonusTimer.innerHTML = '';
            http('/pattern', showResults);
        }
    };

    let timerInterval = setInterval(bonusTimer, 1000);
}