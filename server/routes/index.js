'use strict';

const helpers = require('../game_helper');
const WIN_TYPES = require('../constants').WIN_TYPES;
const BONUS_QNTY = require('../constants').BONUS_QNTY;

module.exports = function (app) {
    let bonus = 0;

    app.get('/pattern', (req, res, next) => {
        ++bonus;

        const data = {
            digits: [
                helpers.getRandomDigit(),
                helpers.getRandomDigit(),
                helpers.getRandomDigit()
            ],
            result: null,
            bonus: null
        };

        data.result = helpers.getTypeOfWin(data.digits);

        if (bonus > BONUS_QNTY && data.result === WIN_TYPES.NO) {
            data.bonus = true;
            bonus = 0;
        }

        res.json(data)
    });
};