'use strict';

import showBonus from './showBonus';

/**
 * @param {JSON} data
 */
export default function showResults(data) {
    const gameTitle = document.getElementById('game-title');
    const images = document.getElementsByClassName('game-result-img');
    const firstRun = document.getElementById('game-firstRun');
    const startBtn = document.getElementById('game-start');
    const gameBonus = document.getElementById('game-bonus');
    const loader = document.getElementById('game-loader');

    data = JSON.parse(data);

    loader.style.display = 'inline';

    for (let image of images) {
        image.className = 'game-result-img';
    }

    setTimeout(() => {
        gameTitle.innerHTML = `${data.result}!`;
        firstRun.className = 'hide';
        loader.style.display = 'none';

        data.digits.forEach((value, index) => {
            images[index].className = `game-result-img game-symbol-${value}`;
        });

        if (data.bonus) {
            showBonus();
        } else {
            startBtn.className = 'game-startButton show';
            gameBonus.className = 'game-bonus';
        }
    }, 1000);
}
