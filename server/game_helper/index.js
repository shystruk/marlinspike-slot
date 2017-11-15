'use strict';

const WIN_TYPES = require('../constants').WIN_TYPES;

module.exports = {

    /**
     * @param {Number} min
     * @param {Number} max
     * @returns {Number}
     */
    getRandomDigit: (min = 0, max = 5) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * @param {Array} digits
     * @returns {String}
     */
    getTypeOfWin: digits => {
        const sortArr = digits.sort();
        let result = 0;

        sortArr.forEach((value, index) => {
            if (index !== sortArr.length - 1 && value === sortArr[index + 1]) {
                ++result;
            }
        });

        switch (result) {
            case 1: {
                return WIN_TYPES.SMALL;
            }
            case 2: {
                return WIN_TYPES.BIG;
            }
            default: {
                return WIN_TYPES.NO;
            }
        }
    }
};
